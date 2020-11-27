# URL SHORTENER

URL Shortener Project (Backend)


## Backend

* Node JS + TypeScript + Express + MySQL

### How To

* Criar projeto NodeJs com TypeScript

```
  $ mkdir pasta-projeto
  $ cd pasta-projeto
  $ yarn init -y
  $ yarn add express
  $ yarn add -D @types/express typescript ts-node-dev eslint-import-resolver-typescript
  $ yarn tsc --init
```

Configurar tsconfig.json
```
    "outDir": "./dist",
    "rootDir": "./src",
```

Configurar script no package.json
  ```
    "scripts": {
    "start": "tsc && node ./dist/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```

## Frontend

* React JS

## More Hints

Padronizar projeto

  * Instalar plugin "EditorConfig for VS Code"
  * Botão direito na pasta do projeto e escolher "Generate .editorconfig"

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

Instalar plugin "ESLint"

```
$ yarn add eslint -D

$ yarn eslint --init
    ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
    ? What type of modules does your project use? JavaScript modules (import/export)
    ? Which framework does your project use? None of these
    ? Does your project use TypeScript? Yes
    ? Where does your code run? Node
    ? How would you like to define a style for your project? Use a popular style guide
    ? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
    ? What format do you want your config file to be in? JSON
    ? Would you like to install them now with npm? No

$ yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.20.1 @typescript-eslint/parser@latest


```

Criar .eslintigonore
  ```
  /*.js
  node_modules
  dist
  ```

Atualizar settings.json
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

Prettier

  $ yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

  Configurar .eslintrc.json
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

Criar prettier.config.js
	```
  module.exports = {
		singleQuote: true,
		trailingComma: "all",
		arrowParens: "avoid",
	};
  ```
