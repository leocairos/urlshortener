# URL SHORTENER

URL Shortener Project (Frontend)

React JS + Bootstrap

## How To

### Create a project React JS

$ npx create-react-app frontend


---
### Project Normalize

* Install plugin "EditorConfig for VS Code"
* Right Button on project and choice "Generate .editorconfig"

  ```
    root = true

    [*]
    indent_style = space
    indent_size = 2
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    end_of_line = lf
  ```

### Add ESLINT

* $ yarn add eslint -D

* Remove configuration from package.json

```
  "eslintConfig": {
    "extends": "react-app"
  },
```

* yarn eslint --init

```
  ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
  ? What type of modules does your project use? JavaScript modules (import/export)
  ? Which framework does your project use? React
  ? Does your project use TypeScript? No
  ? Where does your code run? Browser
  ? How would you like to define a style for your project? Use a popular style guide
  ? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
  ? What format do you want your config file to be in? JSON
  ? Would you like to install them now with npm? No
```

* $ yarn add -D eslint-plugin-react eslint-config-airbnb@latest eslint-plugin-import eslint-plugin-jsx-a11 eslint-plugin-react-hooks


* Create .eslintgnore

  ```
    node_modules
    build
  ```

* Edit .eslintrc.json

  ```
  {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "plugin:react/recommended",
      "airbnb",
      "plugin:prettier/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "react-hooks",
      "prettier"
    ],
    "rules": {
      "prettier/prettier": "error"
    }
  }
  ```

* $ yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

* Create prettier.config.js

  ```
  module.exports = {
    singleQuote: true,
    trailingComma: 'all',
    allowParens: 'avoid',
  }
  ```

* Rename files with React Component to JSX extension
