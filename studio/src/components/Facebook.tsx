import React, { FC } from "react"
import {
  FacebookLogo,
  HeartIcon,
  ThumbIcon
} from "./FacebookIcons"
import s from "./Facebook.module.css"
import u from "./Utils.module.css"

const Facebook: FC = () => {
  return (
    <div className={u.previewPane}>
      <div className={u.previewContent}>
        <div className={s.ogContainer}>
          <div className={`${u.flex} ${u.ma3} ${u.mb2}`}>
            <span>
              <FacebookLogo />
            </span>
            <div>
              <div className={s.ogTitle}>Ghost</div>
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
                <div className={s.ogPreviewMeta}>coast.blog</div>
                <div className={s.ogPreviewTitle}>Customizing your brand and design settings - Coast</div>
                <div className={s.ogPreviewDesc}>How to tweak a few settings in Ghost to transform your site from a generic template to a custom brand with style and personality.</div>
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
