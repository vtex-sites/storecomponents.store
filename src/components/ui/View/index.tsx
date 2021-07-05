import React from 'react'
import { Center, Spinner, SuspenseViewport } from '@vtex/store-ui'
import type { PropsWithChildren, FC, CSSProperties } from 'react'

interface Props<D> {
  data: D
  seo: FC<D>
  above: FC<D>
  below: {
    component: FC<D>
    preloader: () => Promise<unknown>
  }
}

export const View = <D,>(props: PropsWithChildren<Props<D>>) => (
  <>
    <props.seo {...props.data} />
    <props.above {...props.data} />
    <SuspenseViewport
      preloader={props.below.preloader}
      fallback={
        <div
          style={
            {
              contentVisibility: 'auto',
              containIntrinsicSize: '500px',
            } as unknown as CSSProperties
          }
        >
          <Center height="500px">
            <Spinner />
          </Center>
        </div>
      }
    >
      <props.below.component {...props.data} />
    </SuspenseViewport>
  </>
)
