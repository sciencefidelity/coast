import { SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.ts',
  outputPath: './src/generated/schema.ts'
}

export default config
