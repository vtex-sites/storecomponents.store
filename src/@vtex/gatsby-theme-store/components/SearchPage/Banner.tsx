/**  @jsx jsx */
import { jsx, ResponsivePicture } from '@vtex/store-ui'
import type { FC } from 'react'
import { useMemo } from 'react'

interface Props {
  blocks: any
}

const convert = (src: string) => (width: string, index: number) =>
  `${src}?width=${width}&aspect=true&quality=${10 - index * 2} ${width}w`

const mobileSizes = ['360', '720', '1080']
const desktopSizes = ['1080', '1920', '3840']

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
          srcSet: desktopSizes
            .map(convert(block.props.desktop.srcSet))
            .join(','),
        },
        {
          media: '(max-width: 40em)',
          srcSet: mobileSizes.map(convert(block.props.mobile.srcSet)).join(','),
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
