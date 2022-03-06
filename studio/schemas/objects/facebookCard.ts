export default {
  name: 'facebookCard',
  title: 'Facebook Card',
  type: 'object',
  description: 'Customize Open Graph data',
  fields: [
    {
      name: 'image',
      title: 'Facebook image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Facebook title',
      type: 'string',
      description: 'Recommended: 70 characters.' // You’ve used 0
    },
    {
      name: 'description',
      title: 'Facebook Description',
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
