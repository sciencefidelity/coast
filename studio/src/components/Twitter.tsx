import React from 'react'
import {CommentIcon, LikeIcon, LinkIcon, RetweetIcon, ShareIcon, TwitterLogo} from './TwitterIcons'
import s from './Twitter.module.css'
import u from './Seo.module.css'

const Twitter = ({document}: {document: any}) => {
  const url = 'https://coast.blog/'.replace(/\/$/, '')
  let canonical = url
  if (document.displayed.settings && document.displayed.settings.slug) {
    canonical = `${url}/${document.displayed.settings.slug}`
  }
  let twitterTitle = '(untitled)'
  if (document.displayed.title) twitterTitle = document.displayed.title
  if (document.displayed.twitter && document.displayed.twitter.title) {
    twitterTitle = document.displayed.twitter.title
  }
  let twitterDescription = ''
  if (document.displayed.body) {
    twitterDescription = document.displayed.body[0].children[0].text
  }
  if (document.displayed.settings && document.displayed.settings.excerpt) {
    twitterDescription = document.displayed.settings.excerpt
  }
  if (document.displayed.twitter && document.displayed.twitter.description) {
    twitterDescription = document.displayed.twitter.description
  }
  return (
    <div className={u.previewPane}>
      <div className={u.previewContent}>
        <div className={s.twitterContainer}>
          <div className={`${u.flex} ${u.ma4}`}>
            <span>
              <TwitterLogo />
            </span>
            <div className={u.w100}>
              <span className={s.twitterTitle}>Coast</span>{' '}
              <span className={s.twitterTime}>12 hrs</span>
              <div className={`${u.flex} ${u.flexColumn} ${u.mt2} ${u.mb3}`}>
                <span className={`${s.twitterDesc} ${u.w100} ${u.mb2}`}></span>
                <span className={`${s.twitterDesc} ${u.w60}`}></span>
              </div>
              <div className={s.twitterPostPreview}>
                <div
                  className={s.twitterPreviewImage}
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1647119126202-d13a4263d40c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTY0NzE4Nzc1Mg&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000')",
                  }}
                ></div>
                <div className={s.twitterPreviewContent}>
                  <div className={s.twitterPreviewTitle}>{twitterTitle}</div>
                  <div className={s.twitterPreviewDesc}>{twitterDescription}</div>
                  <div className={s.twitterPreviewMeta}>
                    <LinkIcon />
                    {canonical}
                  </div>
                </div>
              </div>
              <div className={s.twitterReactions}>
                <div className={`${u.flex} ${s.itemsCenter}`}>
                  <CommentIcon />2
                </div>
                <div className={`${u.flex} ${u.itemsCenter}`}>
                  <RetweetIcon />
                  11
                </div>
                <div className={`${u.flex} ${u.itemsCenter}`}>
                  <LikeIcon />
                  32
                </div>
                <div className={`${u.flex} ${u.itemsCenter}`}>
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Twitter
