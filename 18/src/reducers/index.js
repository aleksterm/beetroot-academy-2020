import {combineReducers} from "redux"
import courses from './coursesReducer'
import authors from './authorsReducer'
import counter from './counterReducer'

const rootReducer = combineReducers({
    courses,
    authors,
    counter,
})

export default rootReducer
