import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunkMiddleware from 'redux-thunk'
import loginReducer from "./Reducers/loginReducer";
import membersReducer from "./Reducers/membersReducer";
import invitePageReducer from "./Reducers/invitePageReducer";
import bundlesReducer from "./Reducers/bundlesReducer";


let rootReducer = combineReducers({
    login: loginReducer,
    members: membersReducer,
    invitePage: invitePageReducer,
    bundles: bundlesReducer
})


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store

