import C from '../constants'
import {categories} from '../books'
import {arrToMap} from '../utils'

const initialState = {
    categories: arrToMap(categories),
    selectedCategory: null,
}

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case C.SELECT_CATEGORY: return {...state, selectedCategory: payload.id}

        default: return state
    }
}
