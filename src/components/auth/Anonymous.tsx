/** @jsx jsx */
import { FormattedMessage } from 'react-intl'
import { Box, jsx, LoginLogo, LocalizedLink } from '@vtex/store-ui'
import type { FC } from 'react'

const Anonymous: FC = () => (
  <LocalizedLink to="/login" sx={{ variant: 'login.button.container' }}>
    <LoginLogo />
    <Box variant="login.button.greeting">
      <FormattedMessage id="login.button.action" />
    </Box>
  </LocalizedLink>
)

export default Anonymous
