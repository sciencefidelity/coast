import React from "react"
import Layout from "components/Layout"
import { GoogleLogo, SearchIcon } from "components/GoogleIcons"
import s from "styles/Google.module.scss"
import u from "styles/utils.module.scss"

const Google = () => {
  return (
    <Layout>
      <div className={`${s.settingsMenu} ${s.settingsMenuPane} ${s.settingsMenuPaneWide}`}>
        <div className={s.settingsMenuContent}>
          <div className={s.seoContainer}>
            <div className={`${s.seoPreview} ${u.flex}`}>
              <div className={`${u.flex} ${u.mb7}`}>
                <GoogleLogo />
              </div>
              <div className={`${s.seoSearchBar} ${u.flex}`}>
                <SearchIcon />
              </div>
              <div className={s.seoPreviewLink}>
                https://coast.blog
                <span className={s.subdirectory}> › design</span>
              </div>
              <div className={s.seoPreviewTitle}>Customizing your brand and design settings - Coast</div>
              <div className={s.seoPreviewDesc}>07 Mar 2022 — How to tweak a few settings in Ghost to transform your site from a generic template to a custom brand with style and personality.</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Google
