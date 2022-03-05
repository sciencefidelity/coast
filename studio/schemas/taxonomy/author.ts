export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full name',
      type: 'string',
      description: 'Use your real name so people can recognize you'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where in the world do you live?'
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      description: 'Have a website or blog other than this one? Link it!'
    },
    {
      name: 'facebook',
      title: 'Facebook profile',
      type: 'url',
      description: 'URL of your personal Facebook Profile'
    },
    {
      name: 'facebook',
      title: 'Facebook profile',
      type: 'url',
      description: 'URL of your personal Twitter Profile'
    },
    {
      name: 'body',
      title: 'Bio',
      type: 'text',
      description: 'Recommended: 200 characters.'
    },
    {
      name: 'image',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
