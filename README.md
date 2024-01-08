# Exploring all the tsconfig Options

- If we create a build without typescript, the default config will be applied
- "build": "find ./src -name '*.ts' -exec tsc --outDir ./dist {} +"

### Command to create tsconfig.json file
- tsc --init


- How does the import work when a file is imported without .ts or .js extension?

- Module: Module type of the output file 
- Module Resolution: .cjs (commonJS file as require and exports has to be injected in global scope) .js(checks nearest package.json to determine whether it is esm or commonJS to decide what to inject either import,export or require and exports)


## ESlint

- npx eslint <file>
- npx eslint <file> --fix
- eslint -c myconfig.json myfiletotest.js

[Read](https://eslint.org/docs/latest/use/configure/language-options#specifying-parser-options)
Please note that supporting JSX syntax is not the same as supporting React. React applies specific semantics to JSX syntax that ESLint doesn’t recognize. We recommend using eslint-plugin-react if you are using React.

By the same token, supporting ES6 syntax is not the same as supporting new ES6 globals (e.g., new types such as Set). For ES6 syntax, use { "parserOptions": { "ecmaVersion": 6 } }; for new ES6 global variables, use { "env": { "es6": true } }. Setting { "env": { "es6": true } } enables ES6 syntax automatically, but { "parserOptions": { "ecmaVersion": 6 } } does not enable ES6 globals automatically. In summary, to support only ES6 syntax, use { "parserOptions": { "ecmaVersion": 6 } }, and to support both ES6 syntax and new ES6 global variables, such as Set and others, use { "env": { "es6": true } }.


`eslint-disable` to disable code

```js
/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */
```