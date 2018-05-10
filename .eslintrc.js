module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecoratos": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "flowtype",
    ],
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": 0,
        "semi": 0,
        "eol-last": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "one-var": 0,
        "no-unused-vars": 0,  //<==
        "react/prop-types": 0,
        "no-shadow": 0,
        "no-console": 0,
        "react/forbid-prop-types": 0,
        "no-use-before-define": 0,
        "max-len": 0,
        "linebreak-style": 0,
        "prefer-const": 0,
        "no-nested-ternary": 0,
        "react/no-array-index-key": 0,
        "guard-for-in": 0,
        "consistent-return": 0,
        "no-restricted-syntax": 0,
        "array-callback-return": 0,
        "camelcase": 0,
        "no-unneeded-ternary": 0,
        "jsx-a11y/media-has-caption": 0,
        "no-unused-expressions": 0,
        "no-bitwise": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "no-plusplus": 0,
        "flowtype/boolean-style": [
            2,
            "boolean"
        ],
        "flowtype/define-flow-type": 1,
        "flowtype/delimiter-dangle": [
            2,
            "never"
        ],
        "flowtype/generic-spacing": [
            2,
            "never"
        ],
        "flowtype/no-primitive-constructor-types": 2,
        "flowtype/no-types-missing-file-annotation": 2,
        "flowtype/no-weak-types": 2,
        "flowtype/object-type-delimiter": [
            2,
            "comma"
        ],
        "flowtype/require-parameter-type": 2,
        "flowtype/require-return-type": [
            2,
            "always",
            {
                "annotateUndefined": "never"
            }
        ],
        "flowtype/require-valid-file-annotation": 2,
        "flowtype/semi": [
            2,
            "always"
        ],
        "flowtype/space-after-type-colon": [
            2,
            "always"
        ],
        "flowtype/space-before-generic-bracket": [
            2,
            "never"
        ],
        "flowtype/space-before-type-colon": [
            2,
            "never"
        ],
        "flowtype/type-id-match": [ //<== enable if want to use type aliases
            2,
            "^([A-Z][a-z0-9]+)+Type$"
        ],
        "flowtype/union-intersection-spacing": [
            2,
            "always"
        ],
        "flowtype/use-flow-type": 1,
        "flowtype/valid-syntax": 1
    },
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": false
        }
    }
};