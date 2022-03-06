export default {
  name: 'imageData',
  type: 'object',
  fields: [
    {
      name: 'imageCaption',
      title: 'Feature image caption',
      type: 'string',
      description: 'Add a caption to the feature image',
    },
    {
      name: 'imageAltText',
      title: 'Feature image alt text',
      type: 'string',
      description: 'Add alt text to the feature image',
    }
  ],
  options: {
    collapsible: true,
    collapsed: true
  }
}
