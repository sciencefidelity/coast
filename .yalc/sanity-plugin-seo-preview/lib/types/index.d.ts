interface MyPluginConfig {
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
export const myPlugin: import("sanity").Plugin<void | MyPluginConfig>;

//# sourceMappingURL=index.d.ts.map
