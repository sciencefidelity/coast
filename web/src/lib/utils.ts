import imageUrlBuilder from "@sanity/image-url"
import { PortableText } from "../lib/interfaces"
import sanityClient from "./sanityClient"
import { Image } from "./interfaces"

export const buildUrl = (type: string, slug: string): string => {
  return `${subdir(type)}/${slug}`
}

export const capitalize = (str: string): string => {
  return str
    .split(/[\s-]/g)
    .map(e => e.replace(e[0], e[0].toUpperCase()))
    .join(" ")
}

export const kebabCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(" ")
    .join("-")
    .replace(/[^a-z0-9-]/g, "")
}

export const subdir = (type: string): string => {
  switch (type) {
    case "author":
      return "/author"
    case "post":
      return "/blog"
    case "tag":
      return "/tag"
    default:
      return ""
  }
}

// https://www.sanity.io/docs/presenting-block-text#ac67a867dd69
export const toPlainText = (blocks: PortableText = []): string => {
  return blocks
    .map(block => {
      if (block._type !== "block" || !block.children) {
        return ""
      }
      return block.children.map(child => child.text).join("")
    })
    .join("\n\n")
}

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}
