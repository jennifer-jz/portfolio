module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node" : true,
        "jquery" : true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "createClass": 'createReactClass',
            "pragma": 'React',
            "version": 'detect',
            "flowVersion": '0.53',
            'import/resolver': {
                "node": {
                    "moduleDirectory": ['node_modules', 'src'],
                },
            },
        }
    },
    "rules": {
        "indent": ["error", 2],
        "semi": ["error", "always"],
        "max-len": ["error", {
            "code": 120,
            "ignoreUrls": true,
        }],
    }
};