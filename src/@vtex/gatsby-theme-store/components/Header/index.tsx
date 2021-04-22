import { useIntl } from '@vtex/gatsby-plugin-i18n'
import { Flex, Header } from '@vtex/store-ui'
import type { FC } from 'react'
import React, { Fragment } from 'react'

import Login from '../../../../components/Login'
import Minicart from '../../../../components/Minicart'
import SearchBar from '../../../../components/SearchBar'
import Logo from './Logo'
import Menu from './Menu'
import NotificationBar from './NotificationBar'
import OverMenu from './OverMenu'

const StoreHeader: FC = () => {
  const variant = 'header'
  const { formatMessage } = useIntl()

  return (
    <Fragment>
      <NotificationBar
        text={formatMessage({ id: 'notification-bar.sale' })}
        variant={`${variant}.notificationbar`}
      />
      <OverMenu variant={`${variant}.overmenu`} />
      <Header variant={variant}>
        <Flex variant={`${variant}.left`}>
          <Logo variant={`${variant}.logo`} />
          <Menu variant={`${variant}.menu`} />
        </Flex>
        <Flex variant={`${variant}.right`}>
          <SearchBar />
          <Login />
          <Minicart />
        </Flex>
      </Header>
    </Fragment>
  )
}

export default StoreHeader
