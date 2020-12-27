import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";
import thunk from "redux-thunk"
import {createLogger} from "redux-logger";

const logger = createLogger({collapsed: true})

const middleware = [thunk, logger];

export default function (initialState) {
    return configureStore({
        reducer,
        middleware
    });
}
