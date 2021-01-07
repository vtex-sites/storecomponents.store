import {
  Box,
  Flex,
  InfoCard,
  InfoCardImage,
  InfoCardInfo,
  InfoCardInfoAction,
  RichMarkdown,
} from '@vtex/store-ui'
import { PageProps } from 'gatsby'
import React, { FC } from 'react'

import { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import exampleStoreMd from './example-store.md'
import reachUsMd from './reach-us.md'

type Props = PageProps<HomePageQueryQuery>

const Block: FC = ({ children }) => <Box sx={{ my: 5 }}>{children}</Box>

const BelowTheFold: FC<Props> = () => (
  <>
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

export default BelowTheFold
