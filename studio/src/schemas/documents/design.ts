import {defineType, defineField} from 'sanity'
// import {HiOutlineColorSwatch} from 'react-icons/hi'

export default defineType({
  name: 'design',
  title: 'Design',
  type: 'document',
  // icon: HiOutlineColorSwatch,
  groups: [
    {
      name: 'brand',
      title: 'Brand',
    },
  ],
  fields: [
    defineField({
      name: 'accentColor',
      title: 'Accent color',
      type: 'color',
      description: 'Primary color used in your publication theme',
      group: 'brand',
    }),
    defineField({
      name: 'icon',
      title: 'Publication icon',
      type: 'file',
      description: 'A square, social icon, at least 60x60px',
      group: 'brand',
    }),
    defineField({
      name: 'logo',
      title: 'Publication logo',
      type: 'file',
      description: 'The primary logo, should be transparent and at least 600x72px',
      group: 'brand',
    }),
    defineField({
      name: 'image',
      title: 'Publication cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'An optional large background image for your site',
      group: 'brand',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({title, media}: {title: string; media: string}) {
      return {
        title: 'Site design',
        media,
      }
    },
  },
})
