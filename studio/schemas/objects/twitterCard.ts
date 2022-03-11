import { Rule } from '@sanity/types'
import StringWithLimits from '../components/StringWithLimits'

export default {
  name: 'twitterCard',
  title: 'Twitter Card',
  type: 'object',
  description: 'Customize structured data for Twitter',
  fields: [
    {
      name: 'image',
      title: 'Twitter image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Twitter title',
      type: 'string',
      inputComponent: StringWithLimits,
      validation: (Rule: Rule) => Rule.max(70).warning("Some text won't be visible.")
    },
    {
      name: 'description',
      title: 'Twitter Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 125 characters.', // You’ve used 0
      validation: (Rule: Rule) => Rule.max(125).warning("Some text won't be visible.")
    }
  ],
  options: {
    collapsible: true,
    collapsed: true
  }
}
