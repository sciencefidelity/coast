import {
  BlockContent,
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot
} from "../generated/schema"

export interface Author {
  _id: string
  _type: string
  body: string
  name: string
  slug: string
}

export interface Design {
  accentColor: string
  icon: {
    url: string
  }
  image: Image
}

export interface Head {
  settings: Settings
}

export interface Image {
  _type: "image";
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface Layout {
  design: Design
  navigation: Navigation
  settings: Settings
}

export interface NavItem {
  _key: string
  label: string
  url: {
    slug: string
    title: string
  }
}

export interface Navigation {
  primary: NavItem[]
  secondary: NavItem[]
}

export interface Post {
  _id: string
  _type: string
  authors: Author[]
  body: BlockContent
  excerpt: string
  image: Image
  publishedAt: string
  slug: string
  tags: Tag[]
  title: string
}

export interface Settings {
  facebookURL: string
  siteDescription: string
  siteName: string
  twitterURL: string
}

export interface Tag {
  _id: string
  _type: string
  slug: string
  title: string
}

// export interface Category {
//   _id: string
//   posts: Post[]
//   slug: string
//   title: string
// }
//
// export interface Home {
//   body: BlockContent
//   featured: Post[]
//   title: string
// }
//
// export interface MenuItem {
//   slug: string
//   title: string
// }
//
// export interface Site extends SEO {
//   siteDescription: string
//   siteName: string
//   twitterHandle: string
//   url: string
// }
//
// export interface SEO {
//   keywords: string
//   seoDescription: string
//   seoImage: Image
//   seoTitle: string
// }
//
// export interface Page extends SEO {
//   body: BlockContent
//   slug: string
//   template: string
//   title: string
// }
//
// export interface Post extends SEO {
//   author: Author
//   body: BlockContent
//   categories: Category[]
//   next: Post
//   previous: Post
//   publishedAt: string
//   slug: string
//   title: string
// }

