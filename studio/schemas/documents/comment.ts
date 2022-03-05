import { Rule } from '@sanity/types'

interface Selection {
  title?: string
  author?: string
}

export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.regex(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).error('Not a valid email address')
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text'
    },
    {
      name: 'approved',
      title: 'Approve Comment',
      description: "Comments won't appear on the site until this is checked",
      type: 'boolean'
    },
    {
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string'
    },
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: { type: 'post' }
    }
  ],
  preview: {
    select: {
      title: 'post.title',
      author: 'name'
    },
    prepare(selection: Selection) {
      const { title, author } = selection
      return Object.assign({}, selection, {
        title: title && `Comment in: ${title}`,
        subtitle: author && `by ${author}`
      })
    }
  }
}
