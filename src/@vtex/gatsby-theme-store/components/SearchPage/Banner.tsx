/**  @jsx jsx */
import { jsx, ResponsivePicture } from '@vtex/store-ui'
import type { FC } from 'react'
import { useMemo } from 'react'

interface Props {
  blocks: any
}

export const Banner: FC<Props> = ({ blocks }) => {
  const props = useMemo(() => {
    const block = blocks.find((b: any) => b.name === 'SearchBanner')

    if (block == null) {
      return null
    }

    return {
      text: block.props.text,
      alt: block.props.alt,
      sources: [
        {
          media: '(min-width: 40em)',
          srcSet: block.props.desktop.srcSet,
        },
        {
          media: '(max-width: 40em)',
          srcSet: block.props.mobile.srcSet,
        },
      ],
    }
  }, [blocks])

  if (props === null) {
    return null
  }

  return (
    <div sx={{ position: 'relative' }}>
      <ResponsivePicture
        {...props}
        variant="searchBanner"
        loading="eager"
        width="360px"
        height="238px"
      />
      <div
        sx={{ position: 'absolute', top: 0, left: 0 }}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </div>
  )
}
