import S from '@sanity/desk-tool/structure-builder'
import SocialPreview from 'part:social-preview/component'

export default () => S.list().title('Content').items(S.documentTypeListItems())

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Add the social preview view only to those schema types that support it
  if (['blog.post', 'marketing.page'].includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view.component(SocialPreview()).title('Social & SEO')
    ])
  }
  return S.document().views([S.view.form()])
}
