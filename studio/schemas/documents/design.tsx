import React from 'react'

export default {
  name: 'design',
  title: 'Design',
  type: 'document',
  icon: () => (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      ></path>
    </svg>
  ),
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  groups: [
    {
      name: 'brand',
      title: 'Brand'
    }
  ],
  fields: [
    {
      name: 'accentColor',
      title: 'Accent color',
      type: 'color',
      description: 'Primary color used in your publication theme',
      group: 'brand'
    },
    {
      name: 'icon',
      title: 'Publication icon',
      type: 'file',
      description: 'A square, social icon, at least 60x60px',
      group: 'brand'
    },
    {
      name: 'logo',
      title: 'Publication logo',
      type: 'file',
      description:
        'The primary logo, should be transparent and at least 600x72px',
      group: 'brand'
    },
    {
      name: 'image',
      title: 'Publication cover',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'An optional large background image for your site',
      group: 'brand'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare: ({ media }) => {
      return {
        title: 'Site design',
        media: media
      }
    }
  }
}
