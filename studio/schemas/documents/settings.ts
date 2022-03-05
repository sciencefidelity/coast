export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  groups: [
    {
      name: 'site',
      title: 'Title and description'
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
    },
    {
      name: 'social',
      title: 'Social accounts'
    }
  ],
  fields: [
    {
      name: 'siteName',
      title: 'Site name',
      type: 'string',
      description: 'The name of your site',
      group: 'site'
    },
    {
      name: 'siteDescription',
      title: 'Site description',
      type: 'string',
      description: 'Used in your theme, meta data and search results',
      group: 'site'
    },
    // {
    //   name: 'timezone',
    //   title: 'Set timezone',
    //   type: 'string',
    //   group: 'site'
    // },
    {
      name: 'language',
      title: 'Publication language',
      type: 'string',
      description: 'Default: English (en)',
      group: 'site'
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
    },
    {
      name: 'facebookURL',
      title: 'Facebook URL',
      type: 'url',
      description: 'URL of your publication\'s Facebook Page',
      group: 'social'
    },
    {
      name: 'twitterURL',
      title: 'Twitter URL',
      type: 'url',
      description: 'URL of your publication\'s Twitter profile',
      group: 'social'
    }
  ],
  preview: {
    select: {
      title: 'siteName',
      media: 'mainImage'
    }
  }
}
