
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




