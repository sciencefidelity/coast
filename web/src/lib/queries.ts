import groq from "groq"

const omitDrafts = `!(_id in path('drafts.**'))`

const slug = `"slug": slug.current`

const body = `body[]{
  ...,
  markDefs[]{
    ...,
    item->{
      _type, ${slug}
    }
  }
}`

const seo = `
  facebookCard{
    description, image, title
  },
  meta{
    canonicalURL, description, title
  },
  twitterCard{
    description, image, title
  }
`

const pageSettings = `
  settings{
    excerpt, publishedAt, ${slug},
    authors[]->{
      _id, _type, image, name, ${slug}
    },
    tags[]->{
      _id, _type, ${slug}, title
    }
  }
`
const pagePostFields = `
  _id, _type, ${body}, excerpt, feature, image, title, ${pageSettings}, ${seo},
  authors[]->{
    _id, _type, image, name, ${slug}
  },
  tags[]->{
    _id, _type, ${body}, ${slug}, title
  }
`

const postReferenceFields = `
  _id, _type, excerpt, image, title, ${pageSettings},
  authors[]->{
    _id, _type, image, name, ${slug}
  },
  tags[]->{
    _id, _type, ${body}, ${slug}, title
  }
`

export const authors = `
  "authors": *[_type == "author" && ${omitDrafts}] | order(name){
    body, email, facebook, image, location, name, ${slug}, twitter, website,
    "posts": *[_type == "post" && author._ref == ^._id && ${omitDrafts}]{
      ${postReferenceFields}
    }
  }[count(posts) > 0]
`

export const tags = `
  "tags": *[_type == "tag"] | order(title){
    _id, _type, description, image, ${slug}, title,
    "posts": *[_type == "post" && references(^._id) && ${omitDrafts}]
    | order(publishedAt desc){
      ${postReferenceFields}
    },
  }[count(posts) > 0]
`

const design = `
  "design": *[_type == "design" && ${omitDrafts}][0]{
    "accentColor": accentColor.hex,
    "icon": icon.asset->{url},
    image,
    "logo": logo.asset->{url}
  }
`

const navigation = `
  "navigation": *[_type == "navigation" && ${omitDrafts}][0]{
    primary[]{
      _key, label, url->{${slug}, title}
    },
    secondary[]{
      _key, label, url->{${slug}, title}
    }
  }
`

export const pages = `
  "posts": *[_type == "post" && ${omitDrafts}] | order(settings.publishedAt){
    ${pagePostFields}
  }
`

export const posts = `
  "posts": *[_type == "post" && ${omitDrafts}] | order(settings.publishedAt){
    ${pagePostFields}
  }
`

const settings = `
  "settings": *[_type == "settings"][0]{
    language, siteDescription, siteName,
    socialLinks[]{
      _key, name, url
    },
    ${seo}
  }
`

export const indexQuery = groq`{
  ${design},
  ${navigation},
  ${posts},
  ${settings}
}`
