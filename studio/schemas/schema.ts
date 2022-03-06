import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import facebookCard from './objects/facebookCard'
import imageData from './objects/imageData'
import metaData from './objects/metaData'
import portableText from './objects/portableText'
import pageSettings from './objects/pageSettings'
import twitterCard from './objects/twitterCard'
import youtube from './objects/youtube'

// documents
import author from './documents/author'
import design from './documents/design'
import navigation from './documents/navigation'
import page from './documents/page'
import post from './documents/post'
import settings from './documents/settings'

// taxonomy
import tag from './taxonomy/tag'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    facebookCard,
    imageData,
    metaData,
    pageSettings,
    portableText,
    twitterCard,
    youtube,

    // documents
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
