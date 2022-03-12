import { Rule } from '@sanity/types'
// import SlugInput from 'sanity-plugin-better-slug'
import SlugWithPath from '../components/SlugWithPath'

export default {
  name: 'pageSettings',
  type: 'object',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
      inputComponent: SlugWithPath,
      validation: (Rule: Rule) =>
        Rule.max(70).warning("Some text won't be visible.")
    },
    {
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      options: {
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
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
