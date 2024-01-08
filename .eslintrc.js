module.exports = {
    // ESLint stops looking in parent folders once it finds a configuration with "root": true. Prevents Cascading.
    "root": true,
    "env": {
        // Each environment brings with it a certain set of predefined global variables.
        // broswer env adds globals like console.log and lint
        "browser": true,
        // add languange features such as Map, Set...
        "es2015": true,
        // add node features like require and module.export and path to global variables
        // "node": true
    },
    // Globals - the additional global variables your script accesses during execution.
    // "globals": {

    // },
    // By default eslint uses Espree parser
    // extends apply the rules specified in eslint:recommended, we can override it in rules
    "extends": ["eslint:recommended", "airbnb"],
    "parserOptions": {
        // defautl sourceType is script making it module to support import and export
        "sourceType": "module"
    },
    "rules": {
        // we are able to use these rules directly without having any plugin, because it is part of the eslint rules
        "quotes": [2, "single", {
            "allowTemplateLiterals": true
        }]
    },
    // Overiding rule in test files, to allow console log
    "overrides": [
        {
            "files": ["src/*.test.js"],
            // "excludedFiles": "*.test.js",
            "rules": {
                "no-console": "off"
            }
        }
    ]
}