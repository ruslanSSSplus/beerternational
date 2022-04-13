import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunkMiddleware from 'redux-thunk'
import loginReducer from "./Reducers/loginReducer";
import membersReducer from "./Reducers/membersReducer";
import invitePageReducer from "./Reducers/invitePageReducer";
import bundlesReducer from "./Reducers/bundlesReducer";
import authReducer from "./Reducers/authReducer";


let rootReducer = combineReducers({
    login: loginReducer,
    members: membersReducer,
    invitePage: invitePageReducer,
    bundles: bundlesReducer,
    auth: authReducer
})


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store

