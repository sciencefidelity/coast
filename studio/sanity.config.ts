import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {structure, defaultDocumentNode} from './src/structure'
import {schemaTypes} from './src/schemas'
import {colorInput} from '@sanity/color-input'

export default createConfig({
  name: 'default',
  title: 'Coast',

  projectId: 'eom0zz6k',
  dataset: 'production',

  plugins: [
    colorInput(),
    deskTool({
      defaultDocumentNode,
      structure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
