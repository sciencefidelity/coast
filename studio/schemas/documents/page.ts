// import { Rule } from '@sanity/types'
// import {RiBook2Line} from 'react-icons/ri'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  // icon: RiBook2Line,
  groups: [
    {
      name: 'page',
      title: 'Page',
    },
    {
      name: 'settings',
      title: 'Settings',
    },
    {
      name: 'meta',
      title: 'Meta data',
    },
    {
      name: 'twitter',
      title: 'Twitter card',
    },
    {
      name: 'facebook',
      title: 'Facebook card',
    },
  ],
  fields: [
    {
      name: 'image',
      title: 'Feature image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'page',
    },
    {
      name: 'imageData',
      title: 'Image data',
      type: 'imageData',
      group: 'page',
    },
    {
      name: 'title',
      title: 'Page title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'page',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      // inputComponent: SlugWithPath,
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'settings',
    },
    {
      name: 'settings',
      title: 'Page settings',
      type: 'pageSettings',
      group: 'settings',
    },
    {
      name: 'meta',
      title: 'Meta data',
      type: 'metaData',
      group: 'meta',
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'twitterCard',
      group: 'twitter',
    },
    {
      name: 'facebookCard',
      title: 'Facebook Card',
      type: 'facebookCard',
      group: 'facebook',
    },
    {
      name: 'feature',
      title: 'Feature this page',
      type: 'boolean',
      group: 'settings',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author0: 'settings.authors.0.name',
      author1: 'settings.authors.1.name',
      author2: 'settings.authors.2.name',
      author3: 'settings.authors.3.name',
      media: 'image',
    },
    prepare: ({
      title,
      author0,
      author1,
      author2,
      author3,
      media,
    }: {
      title: string
      author0: string
      author1: string
      author2: string
      author3: string
      media: string
    }) => {
      const authors = [author0, author1, author2].filter(Boolean)
      const subtitle = authors.length > 0 ? `by ${authors.join(', ')}` : ''
      const hasMoreAuthors = Boolean(author3)
      return {
        title,
        subtitle: hasMoreAuthors ? `${subtitle}…` : subtitle,
        media,
      }
    },
  },
}
