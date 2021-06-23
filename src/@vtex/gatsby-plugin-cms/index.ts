/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  Schema,
  ContentTypes,
  BuilderConfig,
} from '@vtex/gatsby-plugin-cms'

const widgets = {
  imageUploader: {
    widget: {
      'ui:widget': 'image-uploader',
    },
  },
  googleSEOPreview: {
    widget: {
      'ui:ObjectFieldTemplate': 'GoogleSeoPreview',
    },
  },
  facebookSEOPreview: {
    widget: {
      'ui:ObjectFieldTemplate': 'FacebookPreview',
    },
  },
}

const siteMetadata: Schema = {
  title: 'Site Metadata',
  description: 'Configure global site metadata',
  type: 'object',
  ...widgets.googleSEOPreview,
  properties: {
    title: {
      title: 'Default page title',
      description: 'Display this title when no other tile is available',
      type: 'string',
      default: 'Store Theme | VTEX SFJ',
    },
    description: {
      title: 'Meta tag description',
      type: 'string',
      default: 'A beautifuly designed site for general VTEX stores',
    },
    titleTemplate: {
      title: 'Title template to be used in category/product pages',
      type: 'string',
      default: '%s | Store Theme',
    },
  },
}

const siteMetadataWithSlug: Schema = {
  ...siteMetadata,
  properties: {
    title: {
      title: 'Default page title',
      description: 'Display this title when no other tile is available',
      type: 'string',
      default: 'Store Theme | VTEX SFJ',
    },
    description: {
      title: 'Meta tag description',
      type: 'string',
      default: 'A beautifuly designed site for general VTEX stores',
    },
    titleTemplate: {
      title: 'Title template to be used in category/product pages',
      type: 'string',
      default: '%s | Store Theme',
    },
    slug: {
      title: 'URL Slug',
      type: 'string',
      default: '/landing-page-url',
    },
  },
}

const facebook: Schema = {
  title: 'Facebook',
  description: 'How your store is shared on Facebook',
  type: 'object',
  required: ['thumbnail'],
  ...widgets.facebookSEOPreview,
  properties: {
    title: {
      type: 'string',
      title: 'Title',
      description: 'Store title in facebook',
      default: 'Marin Brasil Tramontina',
    },
    thumbnail: {
      type: 'string',
      title: 'Thumbnail',
      description:
        'Thumbnail to show in facebook when someone is sharing you store. The image must be bigger than 200px/200px',
      ...widgets.imageUploader,
    },
    description: {
      type: 'string',
      title: 'Description',
      description: 'Site description when sharing on facebook',
      default: 'A beautifuly designed site for general VTEX stores',
    },
  },
}

const orderByMap = {
  'price:desc': 'Price: High to Low',
  'price:asc': 'Price: Low to High',
  'orders:desc': 'Sales',
  'name:desc': 'Name, descending',
  'name:asc': 'Name, ascending',
  'release:desc': 'Release date',
  'discount:desc': 'Discount',
  '': 'Default',
}

const orderBy = ({
  title: 'Order By',
  description: 'Default search ordering',
  type: 'string',
  default: '',
  enum: Object.keys(orderByMap),
  enumNames: Object.values(orderByMap),
} as unknown) as Schema

const SearchIdSelector: Schema = {
  title: 'Category ID Selector',
  description: 'In which categories this banner will be shown',
  type: 'object',
  required: ['id'],
  properties: {
    id: {
      title: 'Category Id',
      description: 'The id of the category to show',
      type: 'string',
    },
    orderBy,
  },
}

const SearchBanner: Schema = {
  title: 'Search Banner',
  description: 'Banners in PLP page',
  type: 'object',
  required: ['desktop', 'mobile', 'alt'],
  properties: {
    title: {
      title: 'Image Title',
      type: 'string',
    },
    description: {
      title: 'Image description',
      type: 'string',
    },
    alt: {
      title: 'Image alt',
      type: 'string',
    },
    desktop: {
      title: 'Desktop Banner',
      type: 'object',
      required: ['srcSet'],
      properties: {
        srcSet: {
          title: 'Desktop Image',
          type: 'string',
          ...widgets.imageUploader,
        },
      },
    },
    mobile: {
      title: 'Mobile Banner',
      type: 'object',
      required: ['srcSet'],
      properties: {
        srcSet: {
          title: 'Mobile Image',
          type: 'string',
          ...widgets.imageUploader,
        },
      },
    },
  },
}

const Carousel: Schema = {
  title: 'Carousel',
  description: 'A carousel of images',
  type: 'object',
  properties: {
    allItems: {
      type: 'array',
      minItems: 1,
      items: {
        title: 'Images',
        type: 'object',
        properties: {
          sources: {
            type: 'array',
            minItems: 2,
            maxItems: 2,
            items: {
              title: 'Responsive image',
              type: 'object',
              properties: {
                srcSet: {
                  title: 'Image',
                  type: 'string',
                  widget: {
                    'ui:widget': 'image-uploader',
                  },
                } as any,
                media: {
                  title: 'Device type',
                  type: 'string',
                  description: 'In which device the image will be shown',
                  oneOf: [
                    {
                      type: 'string',
                      enum: ['(max-width: 40em)'],
                      title: 'mobile',
                    },
                    {
                      type: 'string',
                      enum: ['(min-width: 40em)'],
                      title: 'desktop',
                    },
                  ],
                },
              },
            },
            required: ['media'],
          },
          href: {
            title: 'Link',
            description:
              'After clicking the image, the user will navigate to this link',
            type: 'string',
          },
          alt: {
            title: 'Description',
            description: 'How users who cannot open the image read the link',
            type: 'string',
          },
        },
      },
    },
  },
}

const Fold: Schema = {
  title: 'Fold',
  description: 'Components below this will be loaded as the user scrolls',
  type: 'null',
}

const DynamicShelf: Schema = {
  title: 'Dynamic Shelf',
  description: 'Change your dynamic shelf',
  type: 'object',
  properties: {
    title: {
      type: 'string',
      title: 'Shelf Title',
    },
    searchParams: {
      type: 'object',
      title: 'Search parameters for Shelf',
      properties: {
        from: {
          type: 'number',
          title: 'from',
        },
        to: {
          type: 'number',
          title: 'to',
        },
        collection: {
          type: 'string',
          title: 'Collection',
        },
        hideUnavailableItems: {
          default: true,
          type: 'boolean',
          title: 'Hide unavailable items',
        },
        orderBy,
      },
    },
  },
}

const Header: Schema = {
  title: 'admin/headerTitle',
  description: '',
  type: 'object',
  properties: {
    headerSelection: {
      title: 'Header Selection',
      type: 'string',
      enum: ['MAIN_HEADER'],
      enumNames: ['Main Header'],
      default: 'MAIN_HEADER',
    },
  },
} as any

const Footer = {
  title: 'admin/footerTitle',
  description: '',
  type: 'object',
  properties: {
    headerSelection: {
      title: 'Footer Selection',
      type: 'string',
      enum: ['MAIN_FOOTER'],
      enumNames: ['Main Footer'],
      default: 'MAIN_FOOTER',
    },
  },
} as any

const RichText: Schema = {
  title: 'Text',
  description: '',
  type: 'object',
  properties: {
    content: {
      type: 'string',
      title: 'Text',
      widget: {
        'ui:widget': 'draftjs-rich-text',
      },
    },
  },
} as any

const href: Schema = {
  title: 'URL address',
  description: '',
  type: 'string',
}

const alt: Schema = {
  title: 'Image description',
  description: 'Image description for accessibility',
  type: 'string',
}

const src: Schema = {
  title: 'Image',
  description: 'Image',
  type: 'string',
  ...widgets.imageUploader,
}

const Banners: Schema = {
  title: '6 banners group',
  description: 'Home banners below carrousel',
  type: 'object',
  properties: {
    banners: {
      type: 'array',
      maxItems: 6,
      minItems: 6,
      items: {
        type: 'object',
        title: 'Image',
        properties: {
          src,
          href,
          alt,
        },
      },
    },
  },
}

const InstitutionalHeader: Schema = {
  title: 'Institutional page header',
  description: 'Define a title for your page',
  type: 'object',
  properties: {
    title: {
      type: 'string',
      title: 'Institutional page title',
    },
  },
}

export const contentTypes: ContentTypes = {
  home: {
    name: 'Home Page',
    extraBlocks: {},
    beforeBlocks: {
      Header,
    },
    afterBlocks: {
      Footer,
    },
  },
  plp: {
    name: 'PLP',
    extraBlocks: {
      Parameters: {
        SearchIdSelector,
      },
    },
    beforeBlocks: {
      Header,
    },
    afterBlocks: {
      Footer,
    },
  },
  seo: {
    name: 'Global SEO Settings',
    extraBlocks: {
      SEO: {
        siteMetadata,
        facebook,
      },
    },
    beforeBlocks: {},
    afterBlocks: {},
  },
  institutionalPage: {
    name: 'Institutional page',
    extraBlocks: {
      SEO: {
        siteMetadataWithSlug,
      },
    },
    beforeBlocks: {},
    afterBlocks: {},
  },
}

export const builderConfig: BuilderConfig = {
  blocks: {
    Fold,
    Banners,
    Carousel,
    RichText,
    SearchBanner,
    DynamicShelf,
    InstitutionalHeader,
  },
  contentTypes,
  messages: {
    'admin/socialmediaTitle': 'Social Media',
    'admin/meta/socialmediaTitleFieldTitle': 'Title',
    'admin/meta/socialmediaTitleFieldDescription':
      'Appears when a link to this page is shared on social media',
    'admin/meta/socialmediaDescriptionFieldTitle': 'Description',
    'admin/meta/socialmediaDescriptionFieldDescription':
      'Appears when a link to this page is shared on social media',
    'admin/meta/socialmediaImageFieldTitle': 'Thumbnail',
    'admin/meta/socialmediaImageFieldDescription':
      'Appears when the page is shared on social media',
    'admin/headerTitle': 'Header',
    'admin/footerTitle': 'Footer',
    'admin/siteMetadataTitle': 'Site Metadata',
    'admin/siteMetadataDescription': 'How search engines see your store',
    'admin/meta/siteMetadataTitleFieldTitle': 'Title',
    'admin/meta/siteMetadataTitleFieldDescription':
      'Appears on the browser tab and is suggested to search engines',
    'admin/meta/siteMetadataSlugFieldTitle': 'URL Slug',
    'admin/meta/siteMetadataSlugFieldDescription': 'No spaces allowed',
    'admin/meta/siteMetadataDescriptionFieldTitle': 'Meta description',
    'admin/meta/siteMetadataDescriptionFieldDescription':
      'Suggested to search engines',
    'admin/facebookTitle': 'Facebook',
    'admin/facebookDescription': 'How facebook sees your store',
    'admin/meta/facebookTitleFieldTitle': 'Title',
    'admin/meta/facebookTitleFieldDescription':
      'How the name of your site will appear in facebook',
    'admin/meta/facebookThumbnailFieldTitle': 'Thumbnail path',
    'admin/meta/facebookThumbnailFieldDescription':
      'The path to an image of your site. This is how your site will appear on facebook',
    'admin/meta/facebookDescriptionFieldTitle': 'Description',
    'admin/meta/facebookDescriptionFieldDescription':
      'How your site will be described in facebook',
  },
}
