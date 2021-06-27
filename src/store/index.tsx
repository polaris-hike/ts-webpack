import {applyMiddleware, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import combinedReducers from '@/store/reducers';
import history from '@/history';

const store = applyMiddleware(thunk,routerMiddleware(history))(createStore)(combinedReducers)

export default store;