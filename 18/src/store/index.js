import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import reducers from '../reducers'
import {createLogger} from 'redux-logger'
import generateId from '../middlewares/generateId'

const logger = createLogger({collapsed: true})
const middlewares = [thunk, generateId, logger]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function(initialState) {
    return createStore(
        reducers,
        composeEnhancers(applyMiddleware(...middlewares))
    )
}