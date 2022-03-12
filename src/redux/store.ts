import { createStore, compose, applyMiddleware } from "@reduxjs/toolkit"
import rootReducer, { RootState } from "./reducers"
import thunk from "redux-thunk"

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))
)

store.subscribe(()=>{
   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


export type AppDispatch = typeof store.dispatch
export default store