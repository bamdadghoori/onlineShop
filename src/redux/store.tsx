//@ts-ignore
import { Reducer } from "./lots/Reducers.tsx";
import thunk from 'redux-thunk'
import { createStore,applyMiddleware } from "redux";
export const store=createStore(Reducer,applyMiddleware(thunk))