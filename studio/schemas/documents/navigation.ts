export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
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
