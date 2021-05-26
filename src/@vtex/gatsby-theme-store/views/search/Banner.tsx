/**  @jsx jsx */
import { jsx, ResponsivePicture } from '@vtex/store-ui'
import type { FC } from 'react'
import { useMemo } from 'react'

interface Props {
  blocks: any
}

const useBanner = (blocks: any) =>
  useMemo(() => {
    const block = blocks.find((b: any) => b.name === 'SearchBanner')

    return block?.props
  }, [blocks])

export const Banner: FC<Props> = ({ blocks }) => {
  const props = useBanner(blocks)

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
