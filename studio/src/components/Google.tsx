import React from 'react'
import moment from 'moment'
import GoogleLogo from './GoogleLogo'
import SearchIcon from './SearchIcon'
import s from './google.module.css'

const googleize = (url: string) => {
  const arr: string[] = url.split(/(?<!\/)\/(?!\/)/g)
  return (
    <div>
      {arr[0]}
      {arr[1] && (
        <span className={s.subdirectory}>{' › ' + arr[arr.length - 1]}</span>
      )}
    </div>
  )
}

const Google = ({ document }) => {
  return (
    <div className={s.settingsMenuPane}>
      <div className={s.settingsMenuContent}>
        <div className={s.seoContainer}>
          <div className={`${s.seoPreview} ${s.flex}`}>
            <div className={`${s.flex} ${s.mb7}`}>
              <GoogleLogo />
              <div className={`${s.seoSearchBar} ${s.flex}`}>
                <SearchIcon />
              </div>
            </div>
            <div className={s.seoPreviewLink}>
              {document.displayed.meta.canonicalURL &&
                googleize(document.displayed.meta.canonicalURL)}
            </div>
            <div className={s.seoPreviewTitle}>
              {document.displayed.meta.title || document.displayed.title}
            </div>
            <div className={s.seoPreviewDesc}>
              {document.displayed.settings.publishedAt &&
                moment(document.displayed.settings.publishedAt).format(
                  'DD MMM YYYY'
                ) + ' — '}
              {document.displayed.meta.description ||
                document.displayed.excerpt ||
                document.displayed.title || ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Google
