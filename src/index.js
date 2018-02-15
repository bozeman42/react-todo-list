import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider} from 'react-redux';
import promise from 'redux-promise';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';

const store = applyMiddleware(promise)(createStore)(reducers);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
