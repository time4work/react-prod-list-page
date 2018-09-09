import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import './index.css';

// import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');

render(
    <Provider store={store}>
        <div className="product-list-page">
            <App />
        </div>
    </Provider>,
    target
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
