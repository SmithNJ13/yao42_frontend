import {legacy_createStore as createStore} from "redux"
import BGReducer from "./reducers/bgReducer"

const store = createStore(BGReducer)

export default store
