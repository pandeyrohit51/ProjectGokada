import { createStore, applyMiddleware } from 'redux';
import FetchReducer from './reducer/index';
import thunk from 'redux-thunk';

const store = createStore(FetchReducer, applyMiddleware(thunk));

export default store;
