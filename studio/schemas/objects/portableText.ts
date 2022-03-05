import * as React from 'react'

export default {
  title: 'Rich Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        annotations: [
          {
            title: 'Internal Link',
            name: 'internalLink',
            type: 'object',
            fields: [
              {
                name: 'item',
                type: 'reference',
                to: [
                  { type: 'author' },
                  { type: 'tag' },
                  { type: 'page' },
                  { type: 'post' }
                ]
              }
            ],
            blockEditor: {
              icon: () => '🔗'
            }
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              },
              {
                title: 'Open in a new window',
                name: 'blank',
                type: 'boolean'
              }
            ],
            blockEditor: {
              icon: () => '🌎'
            }
          }
        ]
      }
    },
    {
      type: 'image',
      options: { hotspot: true }
    },
    {
      type: 'code'
    }
  ]
}
