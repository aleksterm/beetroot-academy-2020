import {generate as id} from "shortid"
import C from "../constants"

export default function (state = [], action) {
    const {type, payload} = action
    switch (type) {
        case C.CREATE_COURSE: return [...state, {id: id(), ...payload}]
        case C.CREATE + C.COURSE: return [...state, payload];
        case C.LOAD_COURSES_SUCCESS: return payload
        case C.CREATE_COURSE_SUCCESS: return [...state, {...payload}]
        case C.UPDATE_COURSE_SUCCESS: return state.map(c => c.id === payload.id ? payload : c)

        default: return state
    }
}
