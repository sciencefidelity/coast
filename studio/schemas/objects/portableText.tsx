import React from 'react'
import { MdOutlineAddLink, MdOutlineAlternateEmail } from 'react-icons/md'
import { RiExternalLinkLine } from 'react-icons/ri'

const codeRender = ({ children }) => (
  <code
    style={{
      color: '#ff79c6',
      backgroundColor: '#151719'
    }}
  >
    {children}
  </code>
)

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
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Code',
            value: 'code',
            blockEditor: {
              render: codeRender
            }
          }
        ],
        annotations: [
          {
            title: 'Internal link',
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
              icon: MdOutlineAddLink,
              render: ({ children }) => (
                <span
                  style={{
                    color: '#7aa9f3',
                    borderBottom: '1px solid #7aa9f3'
                  }}
                >
                  {children}
                </span>
              )
            }
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                name: 'href',
                type: 'url'
              },
              {
                title: 'Open in a new window',
                name: 'blank',
                type: 'boolean',
                initialValue: true
              }
            ],
            blockEditor: {
              icon: RiExternalLinkLine
            }
          },
          {
            title: 'Email',
            name: 'mailto',
            type: 'object',
            fields: [
              {
                name: 'mailto',
                type: 'email'
              }
            ],
            blockEditor: {
              icon: MdOutlineAlternateEmail,
              render: ({ children }) => (
                <span
                  style={{
                    color: '#7aa9f3',
                    borderBottom: '1px solid #7aa9f3'
                  }}
                >
                  {children}
                </span>
              )
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
    },
    {
      type: 'youtube'
    }
  ]
}
