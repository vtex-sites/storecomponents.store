import { useIntl } from '@vtex/gatsby-plugin-i18n'
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import Shelf from '@vtex/gatsby-theme-vtex/src/components/Shelf/AsyncShelf'
import {
  Box,
  Flex,
  InfoCard,
  InfoCardImage,
  InfoCardInfo,
  InfoCardInfoAction,
  RichMarkdown,
} from '@vtex/store-ui'
import React, { FC } from 'react'

import exampleStoreMd from './example-store.md'
import reachUsMd from './reach-us.md'

const Block: FC = ({ children }) => <Box sx={{ my: 5 }}>{children}</Box>

const BelowTheFold: FC = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <Container>
        <Shelf
          title={formatMessage({ id: 'shelf.title.0' })}
          searchParams={{
            query: 'apparel---accessories',
            orderBy: 'OrderByScoreDESC',
            hideUnavailableItems: true,
            map: 'c',
            from: 0,
            to: 9,
          }}
          showArrows
          showDots
          autoplay={false}
          pageSizes={[1, 3, 5]}
        />
      </Container>

      <Block>
        <InfoCard>
          <InfoCardInfo title="New Promotion!">
            <InfoCardInfoAction href="/vintage-phone/p" label="BUY NOW" />
          </InfoCardInfo>
          <InfoCardImage
            height="300px"
            width="840px"
            href="/vintage-phone/p"
            src="https://storecomponents.vtexassets.com/assets/faststore/images/banner-infocard2___3f284742ba9ede3826bc0721f0789694.png?height=300&aspect=true"
            alt="infocard-banner"
          />
        </InfoCard>
      </Block>

      <Flex sx={{ justifyContent: 'center' }}>
        <RichMarkdown text={exampleStoreMd} variant="question" />
      </Flex>

      <Block>
        <RichMarkdown text={reachUsMd} variant="link" />
      </Block>
    </>
  )
}

export default BelowTheFold
