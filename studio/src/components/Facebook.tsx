import React, { FC } from "react"
import {
  FacebookLogo,
  HeartIcon,
  ThumbIcon
} from "./FacebookIcons"
import s from "./Facebook.module.css"
import u from "./Seo.module.css"

const Facebook = ({ document }) => {
  const url = ("coast.blog/").replace(/https:\/\//, "").replace(/\/$/, "")
  let facebookTitle = "(untitled)"
  if (document.displayed.title) facebookTitle = document.displayed.title
  if (document.displayed.facebook && document.displayed.facebook.title) {
    facebookTitle = document.displayed.facebook.title
  }
  let facebookDescription = ""
  if (document.displayed.body) {
    facebookDescription = document.displayed.body[0].children[0].text
  }
  if (document.displayed.settings && document.displayed.settings.excerpt) {
    facebookDescription = document.displayed.settings.excerpt
  }
  if (document.displayed.facebook && document.displayed.facebook.description) {
    facebookDescription = document.displayed.facebook.description
  }
  return (
    <div className={u.previewPane}>
      <div className={u.previewContent}>
        <div className={s.ogContainer}>
          <div className={`${u.flex} ${u.ma3} ${u.mb2}`}>
            <span>
              <FacebookLogo />
            </span>
            <div>
              <div className={s.ogTitle}>Coast</div>
              <div className={s.ogTime}>12 hrs</div>
            </div>
          </div>
          <div className={`${u.flex} ${u.flexColumn} ${u.ma3} ${u.mt2}`}>
            <span className={`${s.ogDesc} ${u.w100} ${u.mb2}`}></span>
            <span className={`${s.ogDesc} ${u.w60}`}></span>
          </div>
          <div className={s.ogPreview}>
            <div
              className={s.ogPreviewImage}
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1647164926512-2cca88470829?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMTc3M3wwfDF8YWxsfDE0fHx8fHx8Mnx8MTY0NzE4Nzc1Mg&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000')"
              }}
            ></div>
            <div className={s.ogPreviewBookmark}>
              <div className={s.ogPreviewContent}>
                <div className={s.ogPreviewMeta}>{url}</div>
                <div className={s.ogPreviewTitle}>{facebookTitle}</div>
                <div className={s.ogPreviewDesc}>{facebookDescription}</div>
              </div>
            </div>
          </div>
          <div className={s.ogReactions}>
            <span className={s.ogLikes}>
              <ThumbIcon />
              <HeartIcon />
              182
            </span>
            <span className={s.ogComments}>7 comments</span>
            <span className={`${s.ogComments} ${u.ml2}`}>2 shares</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Facebook
