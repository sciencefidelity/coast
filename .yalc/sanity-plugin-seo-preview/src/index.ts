import {createPlugin} from 'sanity'

interface MyPluginConfig {
  /* nothing here yet */
}

/**
 * ## Usage in sanity.config.ts (or .js)
 *
 * ```
 * import {createConfig} from 'sanity'
 * import {myPlugin} from 'sanity-plugin-seo-preview'
 *
 * export const createConfig({
 *     /...
 *     plugins: [
 *         myPlugin()
 *     ]
 * })
 * ```
 */
export const myPlugin = createPlugin<MyPluginConfig | void>((config = {}) => {
  return {
    name: 'sanity-plugin-seo-preview',
  }
})
