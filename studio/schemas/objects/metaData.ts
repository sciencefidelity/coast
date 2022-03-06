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
      description: 'Recommended: 70 characters.' // You’ve used 0
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 156 characters.' // You’ve used 0
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
