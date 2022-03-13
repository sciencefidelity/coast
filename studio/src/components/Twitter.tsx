import React, { FC } from "react"
import {
  CommentIcon,
  LikeIcon,
  LinkIcon,
  RetweetIcon,
  ShareIcon,
  TwitterLogo
} from "./TwitterIcons"
import s from "./Twitter.module.css"
import u from "./Utils.module.css"

const Twitter: FC = () => {
  return (
    <div className={u.previewPane}>
      <div className={u.previewContent}>
        <div className={s.twitterContainer}>
          <div className={`${u.flex} ${u.ma4}`}>
            <span>
              <TwitterLogo />
            </span>
            <div className={u.w100}>
              <span className={s.twitterTitle}>Ghost</span>
              {" "}
              <span className={s.twitterTime}>12 hrs</span>
              <div className={`${u.flex} ${u.flexColumn} ${u.mt2} ${u.mb3}`}>
                <span className={`${s.twitterDesc} ${u.w100} ${u.mb2}`}></span>
                <span className={`${s.twitterDesc} ${u.w60}`}></span>
              </div>
              <div className={s.twitterPostPreview}>
                <div
                  className={s.twitterPreviewImage}
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1647119126202-d13a4263d40c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMTc3M3wwfDF8YWxsfDEyfHx8fHx8Mnx8MTY0NzE4Nzc1Mg&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000')"
                  }}
                ></div>
                <div className={s.twitterPreviewContent}>
                  <div className={s.twitterPreviewTitle}>
                    Customizing your brand and design settings - Coast
                  </div>
                  <div className={s.twitterPreviewDesc}>How to tweak a few settings in Ghost to transform your site from a generic template to a custom brand with style and personality.</div>
                  <div className={s.twitterPreviewMeta}>
                    <LinkIcon />
                    https://coast.blog/design
                  </div>
                </div>
              </div>
              <div className={s.twitterReactions}>
                <div className={`${u.flex} ${s.itemsCenter}`}>
                  <CommentIcon />
                  2
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
