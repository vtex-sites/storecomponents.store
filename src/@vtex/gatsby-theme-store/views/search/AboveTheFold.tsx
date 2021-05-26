import type { FC } from 'react'
import React, { lazy } from 'react'
import type { BreadcrumbItem } from '@vtex/store-ui'
import { SuspenseDevice, Breadcrumb, Container } from '@vtex/store-ui'
import PageList from '@vtex/gatsby-theme-store/src/components/Search/List'
import Controls from '@vtex/gatsby-theme-store/src/components/Search/Controls'
import {
  SearchTemplateContainer,
  SearchTemplateAside,
  SearchTemplateMain,
} from '@vtex/gatsby-theme-store/src/components/Search/SearchTemplate'
import type { SearchViewProps } from '@vtex/gatsby-theme-store/src/views/search'

import { Banner } from './Banner'

const DesktopSearchFilters = lazy(
  () => import('@vtex/gatsby-theme-store/src/components/Search/Filters/Desktop')
)

const COLUMNS = [2, 3, 5]

interface Props extends SearchViewProps {
  pageContext: {
    canonicalPath: string
    vtexCmsPageContent: any
  }
}

const AboveTheFold: FC<Props> = ({ data, pageContext }) => {
  const breadcrumb = (data.vtex.facets?.breadcrumb ?? []) as BreadcrumbItem[]

  return (
    <Container>
      <Breadcrumb breadcrumb={breadcrumb} type="SEARCH" />

      {pageContext.vtexCmsPageContent != null && (
        <Banner {...pageContext.vtexCmsPageContent} />
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
