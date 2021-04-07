/**  @jsx jsx */
import { jsx } from '@vtex/store-ui'
import type { FC } from 'react'
import { useMemo } from 'react'
import { stateToHTML } from 'draft-js-export-html'
import { convertFromRaw } from 'draft-js'
import type { RawDraftContentState } from 'draft-js'

interface Props {
  name?: string
}

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

interface Props {
  blocks: any
}

const useRichText = (blocks: any) =>
  useMemo(() => {
    const block = blocks.find((b: any) => b.name === 'RichText')

    return block?.props
  }, [blocks])

export const RichTextExample: FC<Props> = ({ blocks }) => {
  const props = useRichText(blocks)

  const content = useMemo(() => {
    return stateToHTML(parseToEditorState(props?.content ?? ''), options)
  }, [props.content])

  return (
    <div
      style={{ margin: '10px auto', maxWidth: '900px' }}
      dangerouslySetInnerHTML={createMarkup(content)}
    />
  )
}
