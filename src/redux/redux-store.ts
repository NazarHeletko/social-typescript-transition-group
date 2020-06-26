import {combineReducers, createStore, applyMiddleware} from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';


let rootReducer = combineReducers({
    auth: authReducer
});

type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


// @ts-ignore
window.store = store;


export default store;