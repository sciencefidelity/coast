// import { Rule } from '@sanity/types'
// import SlugInput from 'sanity-plugin-better-slug'
// import SlugWithPath from '../components/SlugWithPath'

export default {
  name: 'pageSettings',
  type: 'object',
  fields: [
    {
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      options: {
        timeStep: 15,
        calendarTodayLabel: 'Today'
      },
      initialValue: new Date().toISOString()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }]
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'author' } }]
    }
  ],
  options: {
    collapsible: true,
    collapsed: false
  }
}
