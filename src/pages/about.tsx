import React from 'react'
import Layout from '@vtex/gatsby-theme-store/src/components/Layout'
import type { FC } from 'react'
import { Box, Image, Heading, Container, YoutubeIframe } from '@vtex/store-ui'

const Page: FC = () => (
  <Layout>
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexWrap: ['wrap', 'nowrap'],
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            mx: '30px',
            minWidth: '50%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            width="2130px"
            height="2280px"
            src="https://storecomponents.vtexassets.com/arquivos/mobile-phone.png"
            sx={{
              maxHeight: '600px',
              width: 'auto',
            }}
          />
        </Box>
        <Box>
          <Heading
            as="h1"
            sx={{
              color: 'primary',
              fontSize: '42px',
              maxWidth: '400px',
              my: '32px',
              mx: ['auto', '0px'],
              textAlign: ['center', 'left'],
            }}
          >
            Create meaningful and relevant experiences.
          </Heading>
          <Box
            as="ul"
            sx={{
              listStyleType: 'none',
              margin: 0,
              padding: 0,
              marginBottom: '32px',
              mx: ['10px', '0px'],
            }}
            style={{ fontSize: '16px' }}
          >
            <Box as="li" sx={{ my: '5px' }}>
              <strong>Optimized store framework</strong>
              <br />
              Free your front-end with our React + Node store framework. Improve
              usability and SEO, while driving more conversion with modular
              components, single page applications, and a ready-for-PWA
              structure.
            </Box>
            <Box as="li" sx={{ my: '5px' }}>
              <strong>Multi-currency and language</strong>
              <br />
              Go international with multiple storefronts to support different
              languages and easily manage local currencies and payment
              conditions.
            </Box>
            <Box as="li" sx={{ my: '5px' }}>
              <strong>Serverless development platform</strong>
              <br />
              Reduce loading time, improve usability, and make the best out of
              SEO. Developing scalable components with a comprehensive,
              easy-to-use toolset, you can build stores faster than ever
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 'calc(-100vw / 12)',
          maxWidth: ['100vw', '65vw'],
          mx: 'auto',
        }}
      >
        <YoutubeIframe
          title="Accelerate Your Business Transformation"
          src="https://www.youtube.com/embed/JgkrlaF52WQ?autoplay=false&loop=0&enablejsapi=1&iv_load_policy=3&modestbranding=1&rel=0&controls=1&playsinline=0"
        />
      </Box>
    </Container>
  </Layout>
)

export default Page
