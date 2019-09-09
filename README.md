# monorepo.ts.vue

> Project with lerna + Storybook + Jest + Typescript + Vue-cli 3

> include terms/tags that can be searched

**Badges**

- lerna
- storybook
- Jest
- Typescript (https://github.com/microsoft/TypeScript)
- Vue cli 3 (https://github.com/vuejs/vue-cli)

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://storybook.js.org/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)



## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)


---

## Installation

### Clone

- Clone this repo to your local machine using `https://github.com/evgeniy-logvinov/lerna.monorepo.ts.vue.git`

### Setup

- If you want more syntax highlighting, format your code like this:

> install packages first

```shell
$ npm install
```
---

## Usage

- Project contains installed lerna. Inside packages you can find HelloWorld project. This project contains jest for testing. You can add new project inside folder `/packages/*`.

- To start unit tests for each projects inside `/packages/*` run:

```shell
    npm run test:unit
```

- Also project contains storybook.

- To start stroybook run next:

```shell
    npm run stroybook:serve
```

- Please don't forget about files: `shims-tsx.d.ts` and `shims-vue.d.ts`. They can help you start project with typescript.


## Tests

- Use jest inside `/packages/*` for each project and add this line to your `package.json` file

```js
    scripts: {
        "test:unit": "vue-cli-service test:unit --color"
    }
```

---

## Support

Reach out to me at one of the following places!

- Github <a href="https://github.com/evgeniy-logvinov">`evgeniy-logvinov`</a>
- Facebook <a href="https://www.facebook.com/evgeniy.logvinov.k" target="_blank">`evgeniy.logvinov.k`</a>
- LinkedIn <a href="https://www.linkedin.com/in/evgeniy-logvinov-k/" target="_blank">`evgeniy-logvinov-k`</a>


---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>.