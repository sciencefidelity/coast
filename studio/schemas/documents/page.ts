export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {
      name: 'page',
      title: 'Page'
    },
    {
      name: 'settings',
      title: 'Settings'
    },
    {
      name: 'meta',
      title: 'Meta data'
    },
    {
      name: 'twitter',
      title: 'Twitter card'
    },
    {
      name: 'facebook',
      title: 'Facebook card'
    }
  ],
  fields: [
    {
      name: 'image',
      title: 'Feature image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'page'
    },
    {
      name: 'imageCaption',
      title: 'Feature Image Caption',
      type: 'string',
      description: 'Add a caption to the feature image',
      group: 'page'
    },
    {
      name: 'imageAltText',
      title: 'Feature Image Alt Text',
      type: 'string',
      description: 'Add alt text to the feature image',
      group: 'page'
    },
    {
      name: 'title',
      title: 'page Title',
      type: 'string',
      group: 'page'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
      group: 'page'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      group: 'settings'
    },
    {
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      group: 'settings'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
      group: 'settings'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'settings'
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'author' } }],
      group: 'settings'
    },
    {
      name: 'feature',
      title: 'Feature this page',
      type: 'boolean',
      group: 'settings'
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Recommended: 70 characters.', // You’ve used 0
      group: 'meta'
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Recommended: 156 characters.', // You’ve used 0
      group: 'meta'
    },
    {
      name: 'canonicalURL',
      title: 'Canonical URL',
      type: 'url',
      group: 'meta'
    },
    {
      name: 'twitterImage',
      title: 'Twitter image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'twitter'
    },
    {
      name: 'twitterTitle',
      title: 'Twitter title',
      type: 'string',
      description: 'Recommended: 70 characters.', // You’ve used 0
      group: 'twitter'
    },
    {
      name: 'twitterDescription',
      title: 'Twitter Description',
      type: 'text',
      description: 'Recommended: 125 characters.', // You’ve used 0
      group: 'twitter'
    },
    {
      name: 'facebookImage',
      title: 'Facebook image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'facebook'
    },
    {
      name: 'facebookTitle',
      title: 'Facebook title',
      type: 'string',
      description: 'Recommended: 70 characters.', // You’ve used 0
      group: 'facebook'
    },
    {
      name: 'facebookDescription',
      title: 'Facebook Description',
      type: 'text',
      description: 'Recommended: 125 characters.', // You’ve used 0
      group: 'facebook'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author0: 'authors.0.name',
      author1: 'authors.1.name',
      author2: 'authors.2.name',
      author3: 'authors.3.name',
      media: 'image'
    },
    prepare: ({title, author0, author1, author2, author3}) => {
      const authors = [author0, author1, author2].filter(Boolean)
      const subtitle = authors.length > 0 ? `by ${authors.join(', ')}` : ''
      const hasMoreAuthors = Boolean(author3)
      return {
        title,
        subtitle: hasMoreAuthors ? `${subtitle}…` : subtitle
      }
    }
  }
}
