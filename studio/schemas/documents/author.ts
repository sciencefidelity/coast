// import { RiTeamLine } from 'react-icons/ri'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  // icon: RiTeamLine,
  fields: [
    defineField({
      name: 'name',
      title: 'Full name',
      type: 'string',
      description: 'Use your real name so people can recognize you',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where in the world do you live?',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      description: 'Have a website or blog other than this one? Link it!',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook profile',
      type: 'url',
      description: 'URL of your personal Facebook Profile',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter profile',
      type: 'url',
      description: 'URL of your personal Twitter Profile',
    }),
    defineField({
      name: 'body',
      title: 'Bio',
      type: 'text',
      description: 'Recommended: 200 characters.',
    }),
    defineField({
      name: 'image',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
