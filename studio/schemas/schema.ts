import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import horizontalRule from './objects/horizontalRule'
import portableText from './objects/portableText'

// documents
import design from './documents/design'
import navigation from './documents/navigation'
import page from './documents/page'
import post from './documents/post'
import settings from './documents/settings'

// taxonomy
import author from './taxonomy/author'
import tag from './taxonomy/tag'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    horizontalRule,
    portableText,

    // documents
    // home,
    // menu,
    post,
    page,

    // taxonomy
    tag,
    author,

    // settings
    settings,
    design,
    navigation

  ])
})
