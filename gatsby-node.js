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

let graphql

// Use this API to capture the graphql executor function
exports.createPages = (args) => {
  graphql = args.graphql
}

// Add context from CMS to created pages
exports.onCreatePage = async (args) => {
  const {
    page,
    reporter,
    actions: { createPage, deletePage },
  } = args

  // Only add context to home page
  if (
    page.path !== '/' &&
    (page.context === undefined ||
      typeof page.context.originalPath !== 'string' ||
      page.context.originalPath !== '/')
  ) {
    return
  }

  const { data, errors } = await graphql(`
    query CMSContent {
      vtexCmsPageContent(type: { eq: "home" }) {
        blocks {
          name
          props
        }
      }
    }
  `)

  if (Array.isArray(errors) && errors.length > 0) {
    reporter.panicOnBuild(errors.toString())

    return
  }

  const {
    vtexCmsPageContent: { blocks },
  } = data

  const { searchParams } = blocks.find((x) => x.name === 'DynamicShelf').props

  // Add context to home page
  const pageWithNewContext = {
    ...page,
    context: {
      ...page.context,
      ...searchParams,
    },
  }

  deletePage(page)
  createPage(pageWithNewContext)
}
