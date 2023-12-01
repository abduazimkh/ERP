import { combineReducers } from "redux";
import { authreducer } from "./auth-reducer";

const rootReducer = combineReducers({
    auth: authreducer
})

export default rootReducer