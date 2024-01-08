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