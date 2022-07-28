# sanity-plugin-seo-preview

## Installation

```
npm install --save sanity-plugin-seo-preview
```

or

```
yarn add sanity-plugin-seo-preview
```

## Usage

Add it as a plugin in sanity.config.ts (or .js):

```
 import {createConfig} from 'sanity'
 import {myPlugin} from 'sanity-plugin-seo-preview'

 export const createConfig({
     /...
     plugins: [
         myPlugin({})
     ]
 })
```

## License

MIT © Matt Cook
See LICENSE
