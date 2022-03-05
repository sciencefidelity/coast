import {
  BlockContent,
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot
} from "../generated/schema"

export interface Author {
  body: BlockContent
  name: string
  posts: Post[]
  slug: string
  twitterHandle: string
}

export interface Category {
  _id: string
  posts: Post[]
  slug: string
  title: string
}

export interface Head {
  keywords: string
  permalink: string
  seoTitle: string
  seoDescription: string
  seoImage: Image
  title: string
  twitter: string
  twitterHandle: string
}

export interface Home {
  body: BlockContent
  featured: Post[]
  title: string
}

export interface Image {
  _type: "image";
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface Layout {
  title: string
  keywords: string
  slug: string
  seoTitle: string
  seoDescription: string
  seoImage: Image
  twitterHandle: string
  url: string
}

export interface Menu {
  item: MenuItem[]
}

export interface MenuItem {
  slug: string
  title: string
}

export interface Site extends SEO {
  siteDescription: string
  siteName: string
  twitterHandle: string
  url: string
}

export interface SEO {
  keywords: string
  seoDescription: string
  seoImage: Image
  seoTitle: string
}

export interface Page extends SEO {
  body: BlockContent
  slug: string
  template: string
  title: string
}

export interface Post extends SEO {
  author: Author
  body: BlockContent
  categories: Category[]
  next: Post
  previous: Post
  publishedAt: string
  slug: string
  title: string
}

