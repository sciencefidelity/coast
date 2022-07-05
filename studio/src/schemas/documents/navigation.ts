import {defineType, defineField} from 'sanity'
// import { RiNavigationLine } from 'react-icons/ri'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  // icon: RiNavigationLine,
  // groups: [
  //   {
  //     name: 'primary',
  //     title: 'Primary navigation',
  //   },
  //   {
  //     name: 'secondary',
  //     title: 'Secondary navigation',
  //   },
  // ],
  fields: [
    defineField({
      name: 'primary',
      title: 'Primary navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label',
            },
            {
              name: 'url',
              type: 'reference',
              to: [{type: 'author'}, {type: 'tag'}, {type: 'page'}, {type: 'post'}],
            },
          ],
        },
      ],
      // sortable: true,
      group: 'primary',
    }),
    defineField({
      name: 'secondary',
      title: 'Secondary navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {
              name: 'url',
              type: 'reference',
              to: [{type: 'author'}, {type: 'tag'}, {type: 'page'}, {type: 'post'}],
            },
          ],
        },
      ],
      // sortable: true,
      group: 'secondary',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    // prepare: () => {
    //   return {
    //     title: 'Navigation',
    //   }
    // },
  },
})
