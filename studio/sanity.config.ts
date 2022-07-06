import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {structure, defaultDocumentNode} from './src/structure'
import {schemaTypes} from './src/schemas'
import {codeInput} from '@sanity/code-input'
import {colorInput} from '@sanity/color-input'
import {dashboardTool, projectUsersWidget, projectInfoWidget} from '@sanity/dashboard'

export default createConfig({
  name: 'default',
  title: 'Coast',

  projectId: 'eom0zz6k',
  dataset: 'production',

  plugins: [
    codeInput(),
    colorInput(),
    dashboardTool({widgets: [projectInfoWidget(), projectUsersWidget()]}),
    deskTool({
      defaultDocumentNode,
      structure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
