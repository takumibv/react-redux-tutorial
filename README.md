
## 参考
- [Redux入門(Qiita)](https://qiita.com/kiita312/items/b001839150ab04a6a427)
- [ReactのプロジェクトにReduxを導入する。](https://qiita.com/gcmae/items/e85abecd999257c2ca8c)
- [「react-redux」についてconnectの実装パターンを試す](https://qiita.com/MegaBlackLabel/items/df868e734d199071b883)

## 導入
### getting started
- reactアプリを作成する
```
($ npm install -g create-react-app ) <= ２回目以降は必要なし

$ create-react-app redux-practice
$ cd redux-practice
```

- ビルド&立ち上げ
```
$ npm install
$ npm start
```
- ここまででreactアプリは作れる。ここからreduxの導入
- 必要なライブラリをインストールする
```
$ npm install redux
$ npm install react-redux
```
- 必要なディレクトリ群を用意する

```
$ mkdir src/{reducers,actions,stores,components,containers}
$ mv src/App.js src/containers
```
- `src/index.jsx`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App';
import reducer from './reducers/reducer'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer) // redux-react間の繋ぎこみ

ReactDOM.render(
	<Provider store={store}> 
    	<App />
  	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
```
- `src/containers/App.jsx`
```js
import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello World</p>
      </div>
    );
  }
}

export default App;
```

- `src/reducers/reducer.jsx`
```js
const initialState = [
  {
    id: 0,
    text: "state1"
  }]

// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // SET_VISIBILITY_FILTER
    case "a":
      return null
    default:
      return state
  }
}
export default reducer
```
- ここまでで、とりあえず動くものができる。

## Typescript導入
### 参考
- 公式: https://facebook.github.io/create-react-app/docs/adding-typescript

### 導入手順
- TypeScriptの導入に必要なパッケージを入れ、ちょこっと書き換えるだけ

```bash
$ yarn create react-app my-app --typescript
$ yarn add typescript @types/node @types/react @types/react-dom @types/jest @types/react-redux

# その他、型定義に必要なライブラリを追加
```

- tsconfig.json作成

```json
{
  "compilerOptions": {
    "outDir": "./src/js",
    "sourceMap": true,
    "strict": true,
    "strictFunctionTypes": true,
    "strictNullChecks": true,
    "strictPropertyInitialization": true,
    "noUnusedLocals": true,
    "noImplicitAny": true,
    "module": "esnext",
    "target": "esnext",
    "jsx": "preserve",
    "allowJs": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "moduleResolution": "node",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

- `index.js` => `index.tsx`に書き換える
- 実行

```bash
$ yarn start
```

## scss導入

- [node-sass](https://github.com/sass/node-sass)

```bash
$ yarn add node-sass
```

- `src/index.tsx`に以下を加える

```js
import './scss/index.scss';
```

- 終わり