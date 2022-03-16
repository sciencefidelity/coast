import defaultResolve from 'part:@sanity/base/document-actions'

import { SetAndPublishAction } from './SetAndPublishAction'

export default function resolveDocumentActions(props) {
  return [...defaultResolve(props), SetAndPublishAction]
}
