import {combineReducers} from "redux"
import courses from "./coursesReducer"
import authors from "./authorReducer"
import counter from "./counterReducer"
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer =  combineReducers({
    courses,
    authors,
    counter,
    apiCallsInProgress,
})

export default rootReducer
