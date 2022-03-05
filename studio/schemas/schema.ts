import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import blockContent from './objects/blockContent'

// documents
import home from './documents/home'
import menu from './documents/menu'
import page from './documents/page'
import post from './documents/post'
import site from './documents/site'

// taxonomy
import author from './taxonomy/author'
import category from './taxonomy/category'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    blockContent,

    // documents
    home,
    menu,
    post,
    page,
    site,

    // taxonomy
    author,
    category
  ])
})
