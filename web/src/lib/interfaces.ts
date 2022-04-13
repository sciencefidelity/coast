export interface Author extends SanityDocument {
  _type: "author"
  body: string
  email: string
  facebook: string
  image: Image
  location: string
  name: string
  posts: Post[]
  twitter: string
  slug: string
  website: string
}

export interface Design extends SanityDocument {
  accentColor: string
  icon: {
    url: string
  }
  image: Image
  logo: {
    url: string
  }
}

export interface Image {
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface MetaData {
  canonicalURL: string
  description: string
  title: string
}

export interface Navigation extends SanityDocument {
  primary: NavItem[]
  secondary: NavItem[]
}

export interface NavItem {
  _key: string
  label: string
  url: {
    _type: string
    slug: string
    title: string
  }
}

export interface Page extends SanityDocument {
  _type: "page"
  body: PortableText
  facebookCard: SocalCard
  image: Image
  meta: MetaData
  settings: PageSettings
  slug: string
  title: string
  twitterCard: SocalCard
}

export interface PageSettings {
  authors: Author[]
  excerpt: string
  publishedAt: string
  tags: Tag[]
}

export type PortableText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image"
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export interface Post extends SanityDocument {
  _type: "post"
  body: PortableText
  facebookCard: SocalCard
  image: Image
  meta: MetaData
  settings: PageSettings
  slug: string
  title: string
  twitterCard: SocalCard
}

export interface SanityBlock {
  _type: "block"
  [key: string]: any
}

export interface SanityDocument {
  _id: string
  _createdAt: string
  _rev: string
  _updatedAt: string
}

export interface SanityImageAsset extends SanityDocument {
  _type: "sanity.imageAsset"
  assetId: string
  extension: string
  metadata: SanityImageMetadata
  mimeType: string
  originalFilename: string
  path: string
  sha1hash: string
  size: number
  uploadId: string
  url: string
}

export interface SanityImageCrop {
  _type: "sanity.imageCrop"
  bottom: number
  left: number
  right: number
  top: number
}

export interface SanityImageDimensions {
  _type: "sanity.imageDimensions"
  aspectRatio: number
  height: number
  width: number
}

export interface SanityImageHotspot {
  _type: "sanity.imageHotspot"
  height: number
  width: number
  x: number
  y: number
}

export interface SanityImageMetadata {
  _type: "sanity.imageMetadata"
  dimensions: SanityImageDimensions
  hasAlpha: boolean
  isOpaque: boolean
  lqip: string
  palette: SanityImagePalette
}

export interface SanityImagePalette {
  _type: "sanity.imagePalette"
  darkMuted: SanityImagePaletteSwatch
  darkVibrant: SanityImagePaletteSwatch
  dominant: SanityImagePaletteSwatch
  lightMuted: SanityImagePaletteSwatch
  lightVibrant: SanityImagePaletteSwatch
  muted: SanityImagePaletteSwatch
  vibrant: SanityImagePaletteSwatch
}

export interface SanityImagePaletteSwatch {
  _type: "sanity.imagePaletteSwatch"
  background: string
  foreground: string
  population: number
  title: string
}

export declare type SanityKeyed<T> = T extends object ? T & {
  _key: string
} : T

export declare type SanityReference<_T> = {
  _type: "reference"
  _ref: string
};

export interface Settings extends SanityDocument {
  siteDescription: string
  siteName: string
  socialLinks: socialLink[]
}

export interface SocalCard {
  description: string
  image: Image
  title: string
}

export interface socialLink {
  _key: string
  url: string
  name: "facebook" | "github" | "intagram" | "linkedin" | "pinterest" | "soundcloud" | "tiktok" | "twitter" | "youtube"
}

export interface Tag extends SanityDocument {
  _type: "tag"
  description: string
  facebookCard: SocalCard
  image: Image
  meta: MetaData
  slug: string
  title: string
  twitterCard: SocalCard
}
