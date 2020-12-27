import C from '../constants'

export const selectBook = id => ({
    type: C.SELECT_BOOK,
    payload: id,
})
