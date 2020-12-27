import {defaultBooks} from '../books'
import C from '../constants'
import {generate as id} from 'shortid'

export default (state= defaultBooks, action) => {
    const {type, payload} = action

    switch(type) {
        case C.ADD_BOOK: return [{_id: id(), ...payload}, ...state]

        default: return state
    }
}
