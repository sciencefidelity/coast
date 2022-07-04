import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'

export default createConfig({
  name: 'default',
  title: 'Coast',

  projectId: 'eom0zz6k',
  dataset: 'production',

  plugins: [colorInput(), deskTool()],

  schema: {
    types: schemaTypes,
  },
})
