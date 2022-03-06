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
      description: 'Recommended: 70 characters.' // You’ve used 0
    },
    {
      name: 'description',
      title: 'Twitter Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 125 characters.' // You’ve used 0
    }
  ],
  options: {
    collapsible: true,
    collapsed: true
  }
}
