import { createStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers"

const store = createStore(
   rootReducer,
   //@ts-ignore
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//@ts-ignore
window.store = store
export default store