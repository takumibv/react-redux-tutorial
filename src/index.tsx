
import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import App from './containers/App';
import reducer from './reducers/index'

import './scss/reset.scss';
import './scss/index.scss';
// import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
