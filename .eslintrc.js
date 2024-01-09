module.exports = {
    // ESLint stops looking in parent folders once it finds a configuration with "root": true. Prevents Cascading.
    "root": true,
    "env": {
        // LANGUAGE OPTIONS
        // These environments are not mutually exclusive, so you can define more than one at a time.

        // Each environment brings with it a certain set of predefined global variables.
        // broswer env adds globals like console.log and lint
        "browser": true,
        // add languange features such as Map, Set...
        "es2021": true,
        // add node features like require and module.export and path to global variables
        // "node": true
    },
    // Globals - the additional global variables your script accesses during execution.
    "globals": {
        "var1": "writable",
        "var2": "readonly",
        "Promise": "off"
    },
    "plugins": ["react", "react-hooks", "import", "jsx-a11y"],
    // By default eslint uses Espree parser
    // extends apply the rules specified in eslint:recommended, we can override it in rules
    // "plugin:react/jsx-runtime" is used so that we don't need have to import React in every file
    // Read more here https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    "extends": ["eslint:recommended", "airbnb", "airbnb/hooks", "plugin:react/jsx-runtime"],
    // "plugin:react/recommended", "plugin:react-hooks/recommended", 
    "parserOptions": {
        // defautl sourceType is script making it module to support import and export
        "sourceType": "module",
        // This is for the syntax???
        "ecmaVersion": "latest",
        // additional language features
        "ecmaFeatures": {
            "jsx": true,
            "impliedStrict": true
        }
    },
    "rules": {
        // we are able to use these rules directly without having any plugin, because these are [built-in](https://eslint.org/docs/latest/rules/) rules
        "quotes": [2, "single", {
            "allowTemplateLiterals": true
        }],
    },
    // disable adding inline rules
    "noInlineConfig": true,
    "reportUnusedDisableDirectives": true,
    // Overiding rule in test files, to allow console log
    "overrides": [
        {
            "files": ["src/*.test.js"],
            // "excludedFiles": "*.test.js",
            "rules": {
                "no-console": "off"
            }
        }
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}