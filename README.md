# Smapper

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Simple mapper to remove strapi wrappers

## Motivation
Strapi is one the most popular headless cms, internally wraps the response inside  `data`, `attributes` object, in some scenarios could be verbose, for this reason was created [strapi-plugin-transformer](https://github.com/ComfortablyCoding/strapi-plugin-transformer), plugin to remove this response wrapper.

However this package does not have support for graphql (you can read more [here](https://github.com/ComfortablyCoding/strapi-plugin-transformer#support)), it can just be applied to the API Rest responses, that is the main reason for this package be created.

## Usage

Install package:

```sh
# npm
npm install smapper

# yarn
yarn add smapper

# pnpm
pnpm install smapper
```

Import:

```js
// ESM
import mapper from "smapper";

// CommonJS
const mapper = require("smapper");
```

We have a graphql like this:

```graphql
query Posts {
  posts {
    data {
      attributes {
        title
        content
        slug
        images {
          data {
            id
            attributes {
              name
              formats
              url
            }
          }
        }
      }
    }
  }
}
```

And you want remove the data and attributes wrappers, just call the function imported and pass the graphql result as parameter:

```javascript
import mapper from 'smapper';
import GetPost from './graphql';

const response = await graphql(GetPost);
const mapped = mapper(response);
```

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## Annotations 📝
This project is originally written as strapi plugin ([strapi-plugin-transformer](https://github.com/ComfortablyCoding/strapi-plugin-transformer)) by:

- @ComfortablyCoding ([profile](https://github.com/ComfortablyCoding))

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/smapper?style=flat&colorA=007ec6&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/smapper
[npm-downloads-src]: https://img.shields.io/npm/dm/smapper?style=flat&colorA=007ec6&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/smapper
[license-src]: https://img.shields.io/github/license/unjs/smapper.svg?style=flat&colorA=007ec6&colorB=F0DB4F
[license-href]: https://github.com/Dave136/smapper/blob/main/README.md
