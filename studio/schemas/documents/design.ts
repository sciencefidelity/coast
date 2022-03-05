export default {
  name: 'design',
  title: 'Design',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  groups: [
    {
      name: 'brand',
      title: 'Brand'
    }
  ],
  fields: [
    {
      name: 'accentColor',
      title: 'Accent color',
      type: 'color',
      description: 'Primary color used in your publication theme',
      group: 'brand'
    },
    {
      name: 'icon',
      title: 'Publication icon',
      type: 'file',
      description: 'A square, social icon, at least 60x60px',
      group: 'brand'
    },
    {
      name: 'logo',
      title: 'Publication logo',
      type: 'file',
      description: 'The primary logo, should be transparent and at least 600x72px',
      group: 'brand'
    },
    {
      name: 'image',
      title: 'Publication cover',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'An optional large background image for your site',
      group: 'brand'
    }
  ],
  preview: {
    select: {
      media: 'image'
    }
  }
}
