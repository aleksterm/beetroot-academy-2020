import C from '../constants'

const activeBook = (state = null, action) => {
    const {type, payload} = action

    switch(type) {
        case C.SELECT_BOOK: return payload === state ? null : payload

        default: return state
    }
}

export default activeBook
