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

let resolveCMSData = null
const dataCMS = new Promise((resolve) => {
  resolveCMSData = resolve
})

// Use this API to capture the graphql executor function
exports.createPages = async ({ graphql, reporter }) => {
  const [plps, home] = await Promise.all([
    graphql(`
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
    `),
    graphql(`
      query CMSContent {
        vtexCmsPageContent(type: { eq: "home" }) {
          blocks {
            name
            props
          }
        }
      }
    `),
  ])

  throwOnErrors(home.errors, reporter)
  throwOnErrors(plps.errors, reporter)

  const remoteIdsById = plps.data.allVtexCmsPageContent.nodes.reduce(
    (acc, node) => {
      const { props } = node.extraBlocks
        .find((block) => block.name === 'Parameters')
        .blocks.find((block) => block.name === 'SearchIdSelector')

      acc[props.id] = node

      return acc
    },
    {}
  )

  resolveCMSData({
    home: home.data,
    plps: remoteIdsById,
  })
}

exports.onCreatePage = async (args) => {
  const {
    page,
    actions: { createPage, deletePage },
  } = args

  const { home, plps } = await dataCMS

  /**
   * Adds context to home page
   */
  if (
    page.path === '/' ||
    (page.context !== undefined &&
      typeof page.context.originalPath === 'string' &&
      page.context.originalPath === '/')
  ) {
    if (!home.vtexCmsPageContent) {
      return
    }

    const {
      vtexCmsPageContent: { blocks },
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

  const {
    context: { canonicalPath },
  } = page

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      vtexCmsPageContent: plps[canonicalPath] || null,
    },
  })
}
