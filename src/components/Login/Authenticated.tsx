/** @jsx jsx */
import { FormattedMessage } from '@vtex/gatsby-plugin-i18n'
import { LocalizedLink, LoginLogo, Box, jsx } from '@vtex/store-ui'
import type { FC } from 'react'

interface Props {
  name: string
}

const Authenticated: FC<Props> = ({ name }) => (
  <LocalizedLink to="/account" sx={{ variant: 'login.button.container' }}>
    <LoginLogo />
    <Box variant="login.button.greeting">
      <FormattedMessage id="login.button.greeting" values={{ name }} />
    </Box>
  </LocalizedLink>
)

export default Authenticated
