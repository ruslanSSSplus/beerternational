import {applyMiddleware, combineReducers, createStore, compose, Action} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import loginReducer from "./loginReducer";
import membersReducer from "./membersReducer";
import invitePageReducer from "./invitePageReducer";
import historyReducer from "./historyReducer";


let rootReducer = combineReducers({
    login: loginReducer,
    members: membersReducer,
    invitePage: invitePageReducer,
    history: historyReducer
})


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store

