/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@vtex/store-ui'
import { FormattedMessage } from 'react-intl'
import type { FC } from 'react'
import type { SxStyleProp } from '@vtex/store-ui'

import PinterestIcon from '../../icons/Pinterest'
import WhatsAppIcon from '../../icons/WhatsApp'
import FacebookIcon from '../../icons/Facebook'

const styles: SxStyleProp = {
  mx: '2px',
  border: 'none',
  padding: '0px',
  font: 'inherit',
  color: 'inherit',
  cursor: 'pointer',
  backgroundColor: 'transparent',

  '&:hover': {
    opacity: '0.5',
  },
}

const Social: FC = () => (
  <Fragment>
    <div sx={{ color: '#707070', fontSize: '14px' }}>
      <FormattedMessage id="social.share" />
    </div>
    <div sx={{ display: 'flex' }}>
      <div className="vtex-store-components-3-x-shareButtons flex flex-row">
        <button sx={styles} aria-label="facebook">
          <FacebookIcon />
        </button>
        <button sx={styles} aria-label="whatsapp">
          <WhatsAppIcon />
        </button>
        <button
          sx={styles}
          title="Top Fashion Eyeglasses 1 at storecomponents: "
          aria-label="pinterest"
        >
          <PinterestIcon />
        </button>
      </div>
    </div>
  </Fragment>
)

export default Social
