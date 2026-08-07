module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'plugins': ["import"],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    "rules": {
        "import/extensions": [
            "error",
            "ignorePackages"
        ],
        "no-unused-vars": "warn"
    },
}