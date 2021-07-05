import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import React from 'react'
import type { FC } from 'react'

import { useMetadata } from './useMetadata'
import { useSiteLinksSearchBoxJsonLd } from './useSiteLinksSearchBoxJsonLd'
import type { Props } from '../../../pages'

const Seo: FC<Props> = (props) => {
  const metadata = useMetadata(props)
  const siteLinksSearchBox = useSiteLinksSearchBoxJsonLd(props)

  return (
    <>
      <GatsbySeo {...metadata} defer />
      <JsonLd json={siteLinksSearchBox} defer />
    </>
  )
}

export default Seo
