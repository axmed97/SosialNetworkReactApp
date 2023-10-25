import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit'
import { AuthReducer } from './reducers/AuthReducer';
import { UserReducer } from './reducers/UserReducer';
const {default: thunk} = require('redux-thunk');

const reducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer
})


const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...middleware));

export default store
