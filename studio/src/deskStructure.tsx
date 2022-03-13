import S from '@sanity/desk-tool/structure-builder'
import Facebook from './components/Facebook'
import Google from './components/Google'
import Twitter from './components/Twitter'
import { HiOutlineColorSwatch } from 'react-icons/hi'
import {
  RiBook2Line,
  RiEdit2Line,
  RiNavigationLine,
  RiPriceTag3Line,
  RiSettings2Line,
  RiTeamLine
} from 'react-icons/ri'

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === "post" || schemaType === "page" || schemaType === "tag") {
    return S.document().views([
      S.view.form(),
      S.view.component(Google).title('Google'),
      S.view.component(Twitter).title('Twitter'),
      S.view.component(Facebook).title('Facebook')
    ])
  }
}

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Post')
        .icon(RiEdit2Line)
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('All posts')
                .icon(RiEdit2Line)
                .child(
                  S.documentTypeList('post')
                    .title('All posts')
                    .filter('_type == "post"')
                ),
              S.listItem()
                .title('Draft posts')
                .icon(RiEdit2Line)
                .child(
                  S.documentTypeList('post')
                    .title('Draft')
                    .filter('_type == "post" && (_id in path("drafts.**"))')
                ),
              S.listItem()
                .title('Published posts')
                .icon(RiEdit2Line)
                .child(
                  S.documentTypeList('post')
                    .title('Published')
                    .filter('_type == "post" && !(_id in path("drafts.**"))')
                ),
              S.listItem()
                .title('Featuerd posts')
                .icon(RiEdit2Line)
                .child(
                  S.documentTypeList('post')
                    .title('Featuerd')
                    .filter('_type == "post" && feature == true')
                ),
              S.listItem()
                .title('Posts by tag')
                .icon(RiPriceTag3Line)
                .child(
                  S.documentTypeList('tag')
                    .title('Tag')
                    .child(tagId =>
                      S.documentList()
                        .title('Posts')
                        .filter(
                          '_type == "post" && $tagId in settings.tags[]._ref'
                        )
                        .params({ tagId })
                    )
                ),
              S.listItem()
                .title('Posts by author')
                .icon(RiTeamLine)
                .child(
                  S.documentTypeList('author')
                    .title('Author')
                    .child(authorId =>
                      S.documentList()
                        .title('Posts')
                        .filter(
                          '_type == "post" && $authorId in settings.authors[]._ref'
                        )
                        .params({ authorId })
                    )
                )
            ])
        ),
      S.listItem()
        .title('Page')
        .icon(RiBook2Line)
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('All pages')
                .icon(RiBook2Line)
                .child(
                  S.documentTypeList('page')
                    .title('All pages')
                    .filter('_type == "page"')
                ),
              S.listItem()
                .title('Draft pages')
                .icon(RiBook2Line)
                .child(
                  S.documentTypeList('page')
                    .title('Draft')
                    .filter('_type == "page" && (_id in path("drafts.**"))')
                ),
              S.listItem()
                .title('Published pages')
                .icon(RiBook2Line)
                .child(
                  S.documentTypeList('page')
                    .title('Published')
                    .filter('_type == "page" && !(_id in path("drafts.**"))')
                ),
              S.listItem()
                .title('Featuerd pages')
                .icon(RiBook2Line)
                .child(
                  S.documentTypeList('page')
                    .title('Featuerd')
                    .filter('_type == "page" && feature == true')
                ),
              S.listItem()
                .title('Pages by tag')
                .icon(RiPriceTag3Line)
                .child(
                  S.documentTypeList('tag')
                    .title('Tag')
                    .child(tagId =>
                      S.documentList()
                        .title('Pages')
                        .filter(
                          '_type == "page" && $tagId in settings.tags[]._ref'
                        )
                        .params({ tagId })
                    )
                ),
              S.listItem()
                .title('Pages by author')
                .icon(RiTeamLine)
                .child(
                  S.documentTypeList('author')
                    .title('Author')
                    .child(authorId =>
                      S.documentList()
                        .title('Pages')
                        .filter(
                          '_type == "page" && $authorId in settings.authors[]._ref'
                        )
                        .params({ authorId })
                    )
                )
            ])
        ),
      ...S.documentTypeListItems().filter(
        item =>
          !['settings', 'design', 'navigation', 'page', 'post'].includes(
            item.getId()
          )
      ),
      S.divider(),
      S.listItem()
        .title('settings')
        .icon(RiSettings2Line)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General')
                .child(
                  S.document().schemaType('settings').documentId('settings')
                )
                .icon(RiSettings2Line),
              S.listItem()
                .title('Design')
                .child(S.document().schemaType('design').documentId('design'))
                .icon(HiOutlineColorSwatch),
              S.listItem()
                .title('Navigation')
                .child(
                  S.document().schemaType('navigation').documentId('navigation')
                )
                .icon(RiNavigationLine)
            ])
        )
    ])
