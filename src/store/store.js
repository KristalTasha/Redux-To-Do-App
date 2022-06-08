import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { todos, loading } from './reducers/reducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const reducers = {
    todos,
    loading
};

//the rootReducer containers all the reducers for carrying out a specific action
//and combines the reducers and passes to the store
const rootReducer = combineReducers(reducers);

// export const configureStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const configureStore = () => createStore(rootReducer, composedEnhancer);