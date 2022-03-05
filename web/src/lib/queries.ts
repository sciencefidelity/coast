import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"

const body = `body[]{
  ...,
  markDefs[]{
    ...,
    item->{
      _type,
      "slug": slug.current
    }
  }
}`

const seo = `
  keywords,
  seoDescription,
  seoImage,
  seoTitle
`

const siteFields = `
  ${seo},
  siteDescription,
  siteName,
  twitterHandle,
  url
`

export const authorsQuery = groq`{
  "authors": *[_type == "author" && ${omitDrafts}]{
    ${body},
    name,
    "posts": *[_type == "post" && author._ref == ^._id && ${omitDrafts}]{
      publishedAt, "slug": slug.current, title
    },
    "slug": slug.current
  }[count(posts) > 0]
}`

export const blogQuery = groq`{
  "posts": *[_type == "post"] | order(publishedAt desc){
    publishedAt,
    "slug": slug.current,
    title
  }
}`

export const categoriesQuery = groq`{
  "categories": *[_type == "category" && ${omitDrafts}] | order(title){
    _id,
    "posts": *[_type == "post" && references(^._id) && ${omitDrafts}] | order(publishedAt desc){
      _id, publishedAt, "slug": slug.current, title
    },
    "slug": slug.current,
    title
  }[count(posts) > 0]
}`

export const featuredPostsQuery = groq`{
  "posts": *[_type == "home" && ${omitDrafts}][0]{
    featured[0..2]->{
      author->{name, "slug": slug.current},
      body,
      categories[]->{
        _id, "slug": slug.current, title
      },
      publishedAt,
      "slug": slug.current,
      title,
    }
  }
}`

export const latestPostsQuery = groq`{
  "posts": *[_type == "post"] | order(publishedAt desc)[0..7]{
    author->{name, "slug": slug.current},
    body,
    categories[]->{
      _id, "slug": slug.current, title
    },
    publishedAt,
    "slug": slug.current,
    title,
  }
}`

export const layoutQuery = groq`{
  "site": *[_type == "site"][0]{
    ${siteFields}
  }
}`

export const postQuery = groq`{
  "posts": *[_type == "post" && ${omitDrafts}]{
    author->{
      name,
      "slug": slug.current,
      twitterHandle
    },
    ${body},
    "categories": categories[]->{
      _id, "slug": slug.current, title
    },
    "next": *[
      _type == 'post' && publishedAt > ^.publishedAt && ${omitDrafts}
    ] | order(publishedAt asc)[0]{
      publishedAt,
      "slug": slug.current,
      title
    },
    "previous": *[
      _type == 'post' && publishedAt < ^.publishedAt && ${omitDrafts}
    ] | order(publishedAt desc)[0]{
      publishedAt,
      "slug": slug.current,
      title
    },
    publishedAt,
    ${seo},
    "slug": slug.current,
    title
  }
}`

export const indexQuery = groq`{
  "home": *[_type == "home" && ${omitDrafts}][0]{
    ${body},
    title
  }
}`

export const navQuery = groq`{
  "menu": *[_type == "menu"][0]{
    "item": items[]->{
      "slug": slug.current,
      title
    }
  }
}`

export const pagesQuery = groq`{
  "pages": *[_type == "page" && ${omitDrafts}]{
    ${body},
    ${seo},
    "slug": slug.current,
    template[0],
    title
  }
}`

export const tagsQuery = groq`{
  "posts": *[_type == "post" && ${omitDrafts}]{
    keywords
  }
}`
