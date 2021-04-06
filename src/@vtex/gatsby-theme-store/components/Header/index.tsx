import Minicart from '@vtex/gatsby-theme-store/src/components/Minicart'
import SearchBar from '@vtex/gatsby-theme-store/src/components/SearchBar'
import { Box, Flex, Header } from '@vtex/store-ui'
import type { FC } from 'react'
import React, { Fragment } from 'react'

import Login from '../../../../components/Login'
import Logo from './Logo'
import Menu from './Menu'
import NotificationBar from './NotificationBar'
import OverMenu from './OverMenu'

const StoreHeader: FC = () => {
  const variant = 'header'

  const onClick = () => {
    fetch('/functions/hello?name=VTEX')
      .then((resp) => resp.text())
      .then((text) => alert(text))
  }

  return (
    <Fragment>
      <Box onClick={onClick}>
        <NotificationBar
          text="Serverless function test"
          variant={`${variant}.notificationbar`}
        />
      </Box>
      <OverMenu variant={`${variant}.overmenu`} />
      <Header variant={variant}>
        <Flex variant={`${variant}.left`}>
          <Logo variant={`${variant}.logo`} />
          <Menu variant={`${variant}.menu`} />
        </Flex>
        <Flex variant={`${variant}.right`}>
          <SearchBar placeholder="Search" aria-label="Search" />
          <Login />
          <Minicart />
        </Flex>
      </Header>
    </Fragment>
  )
}

export default StoreHeader
