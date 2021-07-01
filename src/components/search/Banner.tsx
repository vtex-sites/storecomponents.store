/** @jsx jsx */
import { jsx } from '@vtex/store-ui'

import styles from './styles.json'
import type { BrowserSearchPageQueryQuery } from '../../@vtex/gatsby-theme-store/templates/__generated__/BrowserSearchPageQuery.graphql'

type SearchBanners = NonNullable<
  NonNullable<BrowserSearchPageQueryQuery['vtex']['banners']>['banners']
>

interface Props {
  banners: SearchBanners
}

const SearchBanner = ({ banners = [] }: Props) => {
  const [banner] = banners

  if (!banner?.html) {
    return null
  }

  return (
    <div
      sx={styles.banner.container}
      dangerouslySetInnerHTML={{ __html: banner.html }}
    />
  )
}

export default SearchBanner
