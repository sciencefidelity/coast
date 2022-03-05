export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  groups: [
    {
      name: 'tag',
      title: 'Tag'
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
      name: 'title', // Color
      title: 'Title',
      type: 'string',
      group: 'tag'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      group: 'tag'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Maximum: 500 characters.', // You’ve used 0
      group: 'tag'
    },
    {
      name: 'image',
      title: 'Tag image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'tag'
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
  ]
}
