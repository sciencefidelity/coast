import React from 'react'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zM5 16.05c.162-.033.329-.05.5-.05H19V4H5v12.05zM16 9H8V7h8v2z"></path>
      </g>
    </svg>
  ),
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
      name: 'imageData',
      title: 'Image data',
      type: 'imageData',
      group: 'page'
    },
    {
      name: 'title',
      title: 'Page title',
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
      name: 'settings',
      title: 'Page settings',
      type: 'pageSettings',
      group: 'settings'
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
    },
    {
      name: 'feature',
      title: 'Feature this page',
      type: 'boolean',
      group: 'settings'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author0: 'settings.authors.0.name',
      author1: 'settings.authors.1.name',
      author2: 'settings.authors.2.name',
      author3: 'settings.authors.3.name',
      media: 'image'
    },
    prepare: ({ title, author0, author1, author2, author3 }) => {
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
