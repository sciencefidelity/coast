import htm from "htm"
import vhtml from "vhtml"
import { uriLooksSafe } from "@portabletext/to-html"
import imageUrlBuilder from "@sanity/image-url"
import { BlockContent } from "../generated/schema"
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
  return str.toLowerCase().split(" ").join("-").replace(/[^a-z0-9-]/g, "")
}

const html = htm.bind(vhtml)
export const portableTextComponents = {
  marks: {
    link: ({children, value}) => {
      const href = value.href || ""
      if (uriLooksSafe(href)) {
        const rel = href.startsWith("/") ? undefined : "noreferrer"
        return html`
          <a href="${href}" rel="${rel}" class="text-rose-500 underline">
            ${children}
          </a>
        `
      }
      return children
    },
    internalLink: ({children, value}) => {
      return html`
        <a
          href=${buildUrl(value?.item._type, value?.item.slug)}
          class="text-rose-500 underline"
        >
          ${children}
        </a>
      `
    }
  }
}

export const subdir = (type: string): string => {
  switch (type) {
  case "author":
    return "/authors"
  case "category":
    return "/categories"
  case "post":
    return "/blog"
  default:
    return ""
  }
}

export const toPlainText = (blocks: BlockContent = []): string => {
  return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children,
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('')
    })
    // join the paragraphs leaving split by two linebreaks
    .join('\n\n')
}

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}
