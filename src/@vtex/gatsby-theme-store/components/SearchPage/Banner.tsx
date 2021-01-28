/**  @jsx jsx */
import { jsx, ResponsivePicture } from '@vtex/store-ui'
import type { FC } from 'react'
import { useMemo } from 'react'

interface Props {
  blocks: any
}

const convert = (src: string) => (width: string) =>
  `${src}?width=${width}&aspect=true&quality=8 ${width}w`

const mobileSizes = ['360', '480']
const desktopSizes = ['1080', '1920', '3840']

export const Banner: FC<Props> = ({ blocks }) => {
  const props = useMemo(() => {
    const block = blocks.find((b: any) => b.name === 'SearchBanner')

    if (block == null) {
      return null
    }

    return {
      title: block.props.title,
      description: block.props.description,
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
        sx={{
          top: '0px',
          position: 'absolute',
          color: 'black',
          width: ['320px', '570px'],
          marginX: '0px',
          left: '50%',
          transform: 'translate(-50%)',
          textAlign: 'center',
        }}
      >
        <h1
          sx={{
            fontSize: ['36px', '48px'],
            minHeight: ['40px', '52px'],
            fontWeight: 400,
            marginTop: ['10px', '0px'],
            lineHeight: '1.1',
          }}
        >
          {props.title}
        </h1>
        <h2
          sx={{
            marginTop: '140px',
            lineHeight: '24px',
            fontWeight: 400,
            fontSize: 'initial',
          }}
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      </div>
    </div>
  )
}
