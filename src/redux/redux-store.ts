import {combineReducers, createStore, applyMiddleware} from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    auth: authReducer
});


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));



export default store;