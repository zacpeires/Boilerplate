import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducer = combineReducers({user});

const store = createStore(
    reducer, applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
export * from './user';