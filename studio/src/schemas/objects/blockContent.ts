import {CodeRender, EmailLink, InternalLink} from '../../components/BlockComponents'
import {MdOutlineAddLink, MdOutlineAlternateEmail} from 'react-icons/md'
import {RiExternalLinkLine} from 'react-icons/ri'

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {
            title: 'Code',
            value: 'code',
            blockEditor: {
              render: CodeRender,
            },
          },
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
                to: [{type: 'author'}, {type: 'tag'}, {type: 'page'}, {type: 'post'}],
              },
            ],
            blockEditor: {
              icon: MdOutlineAddLink,
              render: InternalLink,
            },
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in a new window',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              },
            ],
            blockEditor: {
              icon: RiExternalLinkLine,
            },
          },
          {
            title: 'Email',
            name: 'mailto',
            type: 'object',
            fields: [
              {
                name: 'mailto',
                type: 'email',
              },
            ],
            blockEditor: {
              icon: MdOutlineAlternateEmail,
              render: EmailLink,
            },
          },
        ],
      },
    },
    {
      type: 'image',
      options: {hotspot: true},
    },
    {
      type: 'code',
      options: {
        theme: 'monokai',
        darkTheme: 'monokai',
      },
    },
    {
      type: 'youtube',
    },
  ],
}
