/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  Schemas,
  ContentTypes,
  BuilderConfig,
} from '@vtex/gatsby-plugin-cms'

const blocks: Schemas = {
  Carousel: {
    title: 'Carousel',
    description: 'Um carousel de imagens',
    type: 'object',
    properties: {
      allItems: {
        type: 'array',
        minItems: 1,
        items: {
          title: 'Imagens',
          type: 'object',
          properties: {
            sources: {
              type: 'array',
              minItems: 2,
              maxItems: 2,
              items: {
                title: 'Imagem responsiva',
                type: 'object',
                properties: {
                  srcSet: {
                    title: 'Imagem',
                    type: 'string',
                    widget: {
                      'ui:widget': 'image-uploader',
                    },
                  } as any,
                  media: {
                    title: 'Tipo de dispositivo',
                    type: 'string',
                    description: 'Em qual dispositivo a imagem sera mostrada',
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
                'Apos clicada a imagem, o usuario vai navegar para este link',
              type: 'string',
            },
            alt: {
              title: 'Descricao da imagem',
              description:
                'Como usuarios que nao podem abrir a imagem leem o link',
              type: 'string',
            },
          },
        },
      },
    },
  },
  Fold: {
    title: 'Fold',
    description:
      'Componentes embaixo deste serao renderizados apos a dobra da pagina',
    type: 'null',
  },
  DynamicShelf: {
    title: 'Shelf dinamica',
    description: 'Mude sua shelf dinamica',
    type: 'object',
    properties: {
      title: {
        type: 'string',
        title: 'Titulo da Shelf',
      },
      searchParams: {
        type: 'object',
        title: 'Parametros de busca da Shelf',
        properties: {
          from: {
            type: 'number',
            title: 'de',
          },
          to: {
            type: 'number',
            title: 'ate',
          },
          collection: {
            type: 'string',
            title: 'Colecao',
          },
          hideUnavailableItems: {
            default: true,
            type: 'boolean',
            title: 'Esconder items indisponiveis',
          },
          orderBy: {
            type: 'string',
            enum: [
              'OrderByScoreDESC',
              'OrderByPriceDESC',
              'OrderByPriceASC',
              'OrderByTopSaleDESC',
              'OrderByReviewRateDESC',
              'OrderByNameDESC',
              'OrderByNameASC',
              'OrderByReleaseDateDESC',
              'OrderByBestDiscountDESC',
            ],
            title: 'Orderne Por',
          },
        },
      },
    },
  },
}

export const contentTypes: ContentTypes = {
  home: {
    name: 'Home Page',
    extraBlocks: {
      SEO: {
        siteMetadata: {
          title: 'admin/siteMetadataTitle',
          description: 'admin/siteMetadataDescription',
          type: 'object',
          required: ['slug'],
          widget: {
            'ui:ObjectFieldTemplate': 'GoogleSeoPreview',
          },
          properties: {
            title: {
              type: 'string',
              title: 'admin/meta/siteMetadataTitleFieldTitle',
              description: 'admin/meta/siteMetadataTitleFieldDescription',
            },
            slug: {
              type: 'string',
              title: 'admin/meta/siteMetadataSlugFieldTitle',
              description: 'admin/meta/siteMetadataSlugFieldDescription',
            },
            description: {
              type: 'string',
              title: 'admin/meta/siteMetadataDescriptionFieldTitle',
              description: 'admin/meta/siteMetadataDescriptionFieldDescription',
            },
          },
        } as any,
        facebook: {
          title: 'admin/facebookTitle',
          description: 'admin/facebookDescription',
          type: 'object',
          required: ['thumbnail'],
          widget: {
            'ui:ObjectFieldTemplate': 'FacebookPreview',
          },
          properties: {
            title: {
              type: 'string',
              title: 'admin/meta/facebookTitleFieldTitle',
              description: 'admin/meta/facebookTitleFieldDescription',
            },
            thumbnail: {
              type: 'string',
              title: 'admin/meta/facebookThumbnailFieldTitle',
              description: 'admin/meta/facebookThumbnailFieldDescription',
            },
            description: {
              type: 'string',
              title: 'admin/meta/facebookDescriptionFieldTitle',
              description: 'admin/meta/facebookDescriptionFieldDescription',
            },
          },
        } as any,
      },
    },
    beforeBlocks: {
      Header: {
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
      } as any,
    },
    afterBlocks: {
      Footer: {
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
      } as any,
    },
  },
}

export const builderConfig: BuilderConfig = {
  blocks,
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
