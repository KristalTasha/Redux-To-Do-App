import { legacy_createStore as createStore, combineReducers } from 'redux';
import { todos } from './reducers/reducer';

const reducers = {
    todos
};

//the rootReducer containers all the reducers for carrying out a specific action
//and combines the reducers and passes to the store
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());