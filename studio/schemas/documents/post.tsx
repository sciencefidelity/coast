import React from 'react'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: () => (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"></path></g></svg>
  ),
  groups: [
    {
      name: 'post',
      title: 'Post'
    },
    {
      name: 'settings',
      title: 'Settings'
    },
    {
      name: 'meta',
      title: 'Meta data'
    },
    {
      name: 'twitter',
      title: 'Twitter card'
    },
    {
      name: 'facebook',
      title: 'Facebook card'
    }
  ],
  fields: [
    {
      name: 'image',
      title: 'Feature image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'post'
    },
    {
      name: 'imageData',
      title: 'Image data',
      type: 'imageData',
      group: 'post'
    },
    {
      name: 'title',
      title: 'Post title',
      type: 'string',
      group: 'post'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
      group: 'post'
    },
    {
      name: 'settings',
      title: 'Post settings',
      type: 'pageSettings',
      group: 'settings'
    },
    {
      name: 'meta',
      title: 'Meta data',
      type: 'metaData',
      group: 'meta'
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'twitterCard',
      group: 'twitter'
    },
    {
      name: 'facebookCard',
      title: 'Facebook Card',
      type: 'facebookCard',
      group: 'facebook'
    },
    {
      name: 'feature',
      title: 'Feature this post',
      type: 'boolean',
      group: 'settings'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author0: 'settings.authors.0.name',
      author1: 'settings.authors.1.name',
      author2: 'settings.authors.2.name',
      author3: 'settings.authors.3.name',
      media: 'image'
    },
    prepare: ({title, author0, author1, author2, author3, media}) => {
      const authors = [author0, author1, author2].filter(Boolean)
      const subtitle = authors.length > 0 ? `by ${authors.join(', ')}` : ''
      const hasMoreAuthors = Boolean(author3)
      return {
        title,
        subtitle: hasMoreAuthors ? `${subtitle}…` : subtitle,
        media
      }
    }
  }
}
