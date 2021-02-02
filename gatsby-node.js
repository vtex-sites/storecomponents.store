const { optimize } = require('@vtex/gatsby-theme-store/sdk/img/fileManager')

exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) => {
  setWebpackConfig({
    resolve: {
      alias: {
        react: require.resolve('react'),
        'react-dom': require.resolve('react-dom'),
      },
    },
  })
}

const throwOnErrors = (errors, reporter) => {
  if (Array.isArray(errors) && errors.length > 0) {
    reporter.panicOnBuild(errors.toString())

    throw errors
  }
}

exports.onCreateNode = async ({ node, reporter }) => {
  if (node.internal.type !== 'vtexCmsPageContent') {
    return
  }

  const sizes = {
    mobile: [360, 480],
    desktop: [1280, 1440, 1920],
  }

  reporter.info('[storecomponents.store]: Optimizing Images for', node.name)

  if (node.type === 'home') {
    const carousel = node.blocks.find((block) => block.name === 'Carousel')

    for (const item of carousel.props.allItems) {
      for (const source of item.sources) {
        const widths =
          source.media === '(max-width: 40em)' ? sizes.mobile : sizes.desktop

        const src = source.srcSet

        source.srcSet = widths
          .map((width) => `${optimize(src, { width, aspect: true })} ${width}w`)
          .join(',')
      }
    }
  }

  // eslint-disable-next-line vtex/prefer-early-return
  if (node.type === 'plp' || node.type === 'productListLandingPage') {
    const banner = node.blocks.find((block) => block.name === 'SearchBanner')

    banner.props.sources = [
      {
        media: '(min-width: 40em)',
        srcSet: sizes.desktop
          .map(
            (width) =>
              `${optimize(banner.props.desktop.srcSet, {
                width,
                aspect: true,
              })} ${width}w`
          )
          .join(','),
      },
      {
        media: '(max-width: 40em)',
        srcSet: sizes.mobile
          .map(
            (width) =>
              `${optimize(banner.props.mobile.srcSet, {
                width,
                aspect: true,
              })} ${width}w`
          )
          .join(','),
      },
    ]

    delete banner.props.desktop
    delete banner.props.mobile
  }
}

let resolveGraphQL = null
const graphqlPromise = new Promise((resolve) => {
  resolveGraphQL = resolve
})

exports.createPages = async ({ graphql }) => {
  resolveGraphQL(graphql)
}

// Use this API to capture the graphql executor function
const nodesByIds = (nodes) =>
  nodes.reduce((acc, node) => {
    const { props } = node.extraBlocks
      .find((block) => block.name === 'Parameters')
      .blocks.find((block) => block.name === 'SearchIdSelector')

    acc[props.id] = node

    return acc
  }, {})

exports.onCreatePage = async (args) => {
  const {
    page,
    reporter,
    actions: { createPage, deletePage },
  } = args

  const graphql = await graphqlPromise

  /**
   * Adds context to home page
   */
  if (
    page.path === '/' ||
    (page.context !== undefined &&
      typeof page.context.originalPath === 'string' &&
      page.context.originalPath === '/')
  ) {
    const home = await graphql(`
      query CMSContent {
        vtexCmsPageContent(type: { eq: "home" }) {
          blocks {
            name
            props
          }
        }
      }
    `)

    throwOnErrors(home.errors, reporter)

    if (!home.data.vtexCmsPageContent) {
      return
    }

    const {
      data: {
        vtexCmsPageContent: { blocks },
      },
    } = home

    const {
      props: { searchParams },
    } = blocks.find((x) => x.name === 'DynamicShelf')

    // Add context to home page

    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        ...searchParams,
      },
    })
  }

  /**
   * Adds context to search pages
   */
  if (!page.component.endsWith('/templates/search.tsx')) {
    return
  }

  const plps = await graphql(`
    query CMSPageContent {
      allVtexCmsPageContent(
        filter: { extraBlocks: { elemMatch: { name: { eq: "Parameters" } } } }
      ) {
        nodes {
          blocks {
            name
            props
          }
          extraBlocks {
            name
            blocks {
              name
              props
            }
          }
        }
      }
    }
  `)

  throwOnErrors(plps.errors, reporter)

  const nodeMap = nodesByIds(plps.data.allVtexCmsPageContent.nodes)

  const {
    context: { canonicalPath },
  } = page

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      vtexCmsPageContent: nodeMap[canonicalPath] || null,
    },
  })
}
