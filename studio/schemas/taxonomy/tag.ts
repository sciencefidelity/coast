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
      name: 'meta',
      title: 'Meta data',
      type: 'metaData',
      group: 'meta'
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'twitterCard',
      group: 'twitter'
    },
    {
      name: 'facebookCard',
      title: 'Facebook Card',
      type: 'facebookCard',
      group: 'facebook'
    }
  ]
}
