import React from 'react'

const codeRender = ({ children }) => (
  <code style={{
    color: '#ff79c6',
    backgroundColor: '#151719'
  }}>{children}</code>
)
// const highlightIcon = () => (
//   <span style={{ fontWeight: 'bold' }}>H</span>
// )
// const highlightRender = ({children}) => (
//   <span style={{ backgroundColor: 'hsla(265, 90%, 78%, 0.6)' }}>
//     {children}
//   </span>
// )

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
          },
          // {
          //   title: 'Highlight',
          //   value: 'highlight',
          //   blockEditor: {
          //     icon: highlightIcon,
          //     render: highlightRender
          //   }
          // }
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
                  <path fill="none" d="M0 0h24v24H0"></path>
                  <path d="M8 11h8v2H8zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zM3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
                </svg>
              ),
              render: ({children}) => <span style={{
                color: "#7aa9f3",
                borderBottom: "1px solid #7aa9f3"
              }}>{children}</span>
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
                    <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                  </g>
                </svg>
              )
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
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                </svg>
              ),
              render: ({children}) => <span style={{
                color: "#7aa9f3",
                borderBottom: "1px solid #7aa9f3"
              }}>{children}</span>
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
