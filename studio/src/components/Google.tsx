import React from 'react'
import moment from 'moment'
import {GoogleLogo, SearchIcon} from './GoogleIcons'
import s from './Google.module.css'
import u from './Seo.module.css'

const googleize = (url: string) => {
  const arr: string[] = url.split(/(?<!\/)\/(?!\/)/g)
  return (
    <div>
      {arr[0]}
      {arr[1] && <span className={s.subdirectory}>{' › ' + arr[arr.length - 1]}</span>}
    </div>
  )
}

const Google = ({document}: {document: any}) => {
  const url = 'https://coast.blog/'.replace(/\/$/, '')
  let canonical = <div>{url}</div>
  if (document.displayed.settings && document.displayed.settings.slug) {
    canonical = googleize(`${url}/${document.displayed.settings.slug}`)
  }
  if (document.displayed.meta && document.displayed.meta.canonicalURL) {
    canonical = googleize(document.displayed.meta.canonicalURL)
  }
  let metaTitle = '(untitled)'
  if (document.displayed.title) metaTitle = document.displayed.title
  if (document.displayed.meta && document.displayed.meta.title) {
    metaTitle = document.displayed.meta.title
  }
  let publishedAt = moment(document.displayed._createdAt).format('DD MMM YYYY')
  if (document.displayed.settings && document.displayed.settings.publishedAt) {
    publishedAt = moment(document.displayed.settings.publishedAt).format('DD MMM YYYY')
  }
  let metaDescription = ''
  if (document.displayed.body) {
    metaDescription = document.displayed.body[0].children[0].text
  }
  if (document.displayed.settings && document.displayed.settings.excerpt) {
    metaDescription = document.displayed.settings.excerpt
  }
  if (document.displayed.meta && document.displayed.meta.description) {
    metaDescription = document.displayed.meta.description
  }
  return (
    <div className={u.previewPane}>
      <div className={u.previewContent}>
        <div className={s.seoContainer}>
          <div className={`${s.seoPreview} ${u.flex}`}>
            <div className={`${u.flex} ${u.mb7}`}>
              <GoogleLogo />
              <div className={`${s.seoSearchBar} ${u.flex}`}>
                <SearchIcon />
              </div>
            </div>
            <div className={s.seoPreviewLink}>{canonical}</div>
            <div className={s.seoPreviewTitle}>{metaTitle}</div>
            <div className={s.seoPreviewDesc}>
              {publishedAt}
              {' — '}
              {metaDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Google
