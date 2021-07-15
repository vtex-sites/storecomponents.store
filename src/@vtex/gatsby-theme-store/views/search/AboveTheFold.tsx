/** @jsx jsx */
import { SuspenseDevice, Breadcrumb, Container, jsx } from '@vtex/store-ui'
import PageList from '@vtex/gatsby-theme-store/src/components/Search/List'
import Controls from '@vtex/gatsby-theme-store/src/components/Search/Controls'
import {
  SearchTemplateContainer,
  SearchTemplateAside,
  SearchTemplateMain,
} from '@vtex/gatsby-theme-store/src/components/Search/SearchTemplate'
import SearchBanner from 'src/components/search/Banner'
import CollectionBanner from 'src/components/common/CollectionBanner'
import { lazy } from 'react'
import type { FC } from 'react'
import type { SearchViewProps } from '@vtex/gatsby-theme-store/src/views/search'
import type { BreadcrumbItem } from '@vtex/store-ui'

import type { BrowserSearchPageQueryQuery } from '../../templates/__generated__/BrowserSearchPageQuery.graphql'

const DesktopSearchFilters = lazy(
  () => import('@vtex/gatsby-theme-store/src/components/Search/Filters/Desktop')
)

const COLUMNS = [2, 3, 4]

interface Props extends SearchViewProps {
  pageContext: {
    canonicalPath: string
    vtexCmsPageContent: any
  }
}

const AboveTheFold: FC<Props> = ({ data, pageContext }) => {
  const breadcrumb = (data.vtex.facets?.breadcrumb ?? []) as BreadcrumbItem[]
  const { vtex } = data as BrowserSearchPageQueryQuery

  return (
    <Container>
      {vtex.banners?.banners && <SearchBanner banners={vtex.banners.banners} />}

      <Breadcrumb breadcrumb={breadcrumb} type="SEARCH" />

      {pageContext.vtexCmsPageContent != null && (
        <CollectionBanner {...pageContext.vtexCmsPageContent} />
      )}

      <SearchTemplateContainer>
        <SearchTemplateAside>
          <SuspenseDevice device="desktop" fallback={null}>
            <DesktopSearchFilters
              isActive={(index: number) => index < 5}
              variant="desktop"
            />
          </SuspenseDevice>
        </SearchTemplateAside>

        <SearchTemplateMain>
          <Controls data={data} />
          <PageList initialData={data as any} columns={COLUMNS} />
        </SearchTemplateMain>
      </SearchTemplateContainer>
    </Container>
  )
}

export default AboveTheFold
