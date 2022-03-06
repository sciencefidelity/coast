import React from 'react'

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM6 6v3.515L3.515 12 6 14.485V18h3.515L12 20.485 14.485 18H18v-3.515L20.485 12 18 9.515V6h-3.515L12 3.515 9.515 6H6zm6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
      </g>
    </svg>
  ),
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
      placeholder: 'en',
      group: 'site'
    },
    {
      name: 'meta',
      title: 'Site meta',
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
      subtitle: 'siteDescription',
      media: 'twitterCard.image'
    }
  }
}
