import React from 'react'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { FC } from 'react'
import { stateToHTML } from 'draft-js-export-html'
import { convertFromRaw } from 'draft-js'
import type { RawDraftContentState } from 'draft-js'
import Container from '@vtex/gatsby-theme-store/src/components/Container'

import Layout from '../components/Layout'

type Props = PageProps<unknown>

const options = {
  inlineStyles: {
    BOLD: {
      attributes: { class: 'rich-text-example' },
      style: { fontSize: 16, color: 'blue' },
    },
  },
}

const parseToEditorState = (value: string) => {
  const rawDraftContentState = JSON.parse(value) as RawDraftContentState

  return convertFromRaw(rawDraftContentState)
}

function createMarkup(content: string) {
  return { __html: content }
}

export const RichTextExample = ({ content }: { content?: string }) => {
  const htmlContent = React.useMemo(() => {
    return stateToHTML(parseToEditorState(content ?? ''), options)
  }, [content])

  return <div dangerouslySetInnerHTML={createMarkup(htmlContent)} />
}

const Page: FC<Props> = ({ data, pageContext }) => {
  const { vtexCmsPageContent } = pageContext
  const [header, richText] = data?.content?.blocks

  return (
    <Layout>
      <Container>
        <h1>{header?.props?.title}</h1>
        <RichTextExample content={JSON.stringify(richText?.props?.content)} />
        {JSON.stringify(richText?.props?.content)}
      </Container>
    </Layout>
  )
}

// These variables are populated via CMS in gatsby-node's onCreatePage API
export const query = graphql`
  query LandingPageQuery {
    content: vtexCmsPageContent(type: { eq: "landingPage" }) {
      blocks {
        name
        props
      }
      extraBlocks {
        blocks {
          name
          props
        }
      }
    }
  }
`

export default Page
