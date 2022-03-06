import React from 'react'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: () => (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4.965 5.096l3.546 12.41 3.04-6.08 5.637-2.255L4.965 5.096zM2.899 2.3l18.806 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.26 2.911A.5.5 0 0 1 2.9 2.3z"></path></g></svg>
  ),
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  groups: [
    {
      name: 'primary',
      title: 'Primary navigation'
    },
    {
      name: 'secondary',
      title: 'Secondary navigation'
    }
  ],
  fields: [
    {
      name: 'primary',
      title: 'Primary navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label'
            },
            {
              name: 'url',
              type: 'reference',
              to: [
                { type: 'author' },
                { type: 'tag' },
                { type: 'page' },
                { type: 'post' }
              ]
            }
          ]
        }
      ],
      sortable: true,
      group: 'primary'
    },
    {
      name: 'secondary',
      title: 'Secondary navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            {
              name: 'url',
              type: 'reference',
              to: [
                { type: 'author' },
                { type: 'tag' },
                { type: 'page' },
                { type: 'post' }
              ]
            }
          ]
        }
      ],
      sortable: true,
      group: 'secondary'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare: () => {
      return {
        title: 'Navigation'
      }
    }
  }
}
