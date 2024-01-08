module.exports = {
    "env": {
        // broswer env adds globals like console.log and lint
        "browser": true,
        // add languange features such as Map, Set...
        "es2015": true
    },
    // extends apply the rules specified in eslint:recommended, we can override it in rules
    "extends": "eslint:recommended",
    "rules": {
        // we are able to use these rules directly without having any plugin, because it is part of the eslint rules
        "quotes": [2, "single", {
            "allowTemplateLiterals": true
        }]
    }
}