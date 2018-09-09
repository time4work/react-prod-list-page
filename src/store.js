import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import createHistory from 'history/createBrowserHistory';
// export const history = createHistory();

import rootReducer from './reducers';


const initialState = {};
const enhancers = [];
const middleware = [
	thunk,
	// routerMiddleware(history)
];

/* eslint-disable no-underscore-dangle */
// if (process.env.NODE_ENV === 'developer') {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
// }
/* eslint-enable */

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

const store = createStore(
	// connectRouter(history)(rootReducer),
	rootReducer,
	initialState,
	composedEnhancers
);

export default store;

// export default (initialState) => {
// 	return createStore(rootReducer, initialState);
// }

