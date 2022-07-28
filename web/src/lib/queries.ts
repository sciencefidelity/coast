import groq from "groq";

const omitDrafts = `!(_id in path('drafts.**'))`;

const slug = `"slug": slug.current`;

const body = `
  body[]{ ..., markDefs[]{ ..., item->{ _type, ${slug} } } }
`;

const seo = `
  facebookCard{ description, image, title },
  meta{ canonicalURL, description, title },
  twitterCard{ description, image, title }
`;

const pageSettings = `
  settings{
    excerpt, publishedAt,
    authors[]->{ _id, _type, image, name, ${slug} },
    tags[]->{ _id, _type, ${slug}, title }
  }
`;
const pagePostFields = `
  _id, _type, excerpt, feature, image, title,
  ${body}, ${pageSettings}, ${seo}, ${slug}
`;

const postReferenceFields = `
  _id, _type, body, excerpt, image, title, ${pageSettings}, ${slug}
`;

export const authors = `
  "authors": *[_type == "author" && ${omitDrafts}] | order(name){
    _id, _type, body, email, facebook, image,
    location, name, twitter, website, ${slug},
    "posts": *[_type == "post" && references(^._id) && ${omitDrafts}]
      | order(publishedAt){ ${postReferenceFields} }
  }[count(posts) > 0]
`;

const design = `
  "design": *[_type == "design" && ${omitDrafts}][0]{
    "accentColor": accentColor.hex, image,
    "icon": icon.asset->{url}, "logo": logo.asset->{url}
  }
`;

const navigation = `
  "navigation": *[_type == "navigation" && ${omitDrafts}][0]{
    primary[]{ _key, label, url->{ _type, ${slug}, title } },
    secondary[]{ _key, label, url->{ _type, ${slug}, title } }
  }
`;

export const pages = `
  "pages": *[_type == "page" && ${omitDrafts}] | order(settings.publishedAt){
    ${pagePostFields}
  }
`;

export const posts = `
  "posts": *[_type == "post" && ${omitDrafts}] | order(settings.publishedAt){
    ${pagePostFields}
  }
`;

const settings = `
  "settings": *[_type == "settings"][0]{
    language, siteDescription, siteName, ${seo},
    socialLinks[]{ _key, name, url }
  }
`;

export const tags = `
  "tags": *[_type == "tag"] | order(title){
    _id, _type, description, image, ${slug}, title,
    "posts": *[_type == "post" && references(^._id) && ${omitDrafts}]
    | order(settings.publishedAt){
      ${postReferenceFields}
    },
  }[count(posts) > 0]
`;

export const indexQuery = groq`{
  ${design}, ${navigation}, ${posts}, ${settings}
}`;

export const pagesQuery = groq`{
  ${design}, ${navigation}, ${pages}, ${settings}
}`;

export const postsQuery = groq`{
  ${design}, ${navigation}, ${posts}, ${settings}
}`;

export const tagsQuery = groq`{
  ${design}, ${navigation}, ${settings}, ${tags}
}`;
