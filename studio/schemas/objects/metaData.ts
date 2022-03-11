import { Rule } from '@sanity/types'
import StringWithLimits from '../components/StringWithLimits'

export default {
  name: 'metaData',
  title: 'Meta data',
  type: 'object',
  description: 'Extra content for search engines',
  fields: [
    {
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      inputComponent: StringWithLimits,
      validation: (Rule: Rule) => Rule.max(70).warning("Some text won't be visible.")
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 156 characters.', // You’ve used 0
      validation: (Rule: Rule) => Rule.max(156).warning("Some text won't be visible.")
    },
    {
      name: 'canonicalURL',
      title: 'Canonical URL',
      type: 'url'
    }
  ],
  options: {
    collapsible: true,
    collapsed: true
  }
}
