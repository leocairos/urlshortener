# URL SHORTENER

URL Shortener Project (Backend)
Node JS + TypeScript + Express + Postgres

## How To

### Criar projeto NodeJs com TypeScript

```
  $ mkdir pasta-projeto
  $ cd pasta-projeto
  $ yarn init -y
  $ yarn add express
  $ yarn add -D @types/express typescript ts-node-dev eslint-import-resolver-typescript
  $ yarn tsc --init
```

###Configurar tsconfig.json

```
    "outDir": "./dist",
    "rootDir": "./src",
```

### Configurar script no package.json

  ```
    "scripts": {
    "start": "tsc && node ./dist/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```

## More tips

### Project normalize

  * Install plugin "EditorConfig for VS Code"
    * Right button in folder project and choice "Generate .editorconfig"
    * Edit file .editorconfig

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

### Install "ESLint" plugin

```
  $ yarn add eslint -D
```

```
$ yarn eslint --init
    ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
    ? What type of modules does your project use? JavaScript modules (import/export)
    ? Which framework does your project use? None of these
    ? Does your project use TypeScript? Yes
    ? Where does your code run? Node
    ? How would you like to define a style for your project? Use a popular style guide
    ? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
    ? What format do you want your config file to be in? JSON
    ? Would you like to install them now with npm? Yes

```

### Create file .eslintigonore

  ```
    /*.js
    node_modules
    dist
  ```

### Update settings.json

```
    "[javascript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[javascriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
```

### Install Prettier

```
  $ yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

### Configure file .eslintrc.json
  ```
    ...
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    ...
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    ...
    "rules": {
        "prettier/prettier": "error",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never"
            }
        ]
    },

    "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
  ```

### Create file prettier.config.js

  ```
  module.exports = {
		singleQuote: true,
		trailingComma: "all",
		arrowParens: "avoid",
	};
  ```
