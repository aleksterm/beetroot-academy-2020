import C from '../constants'
import * as authorApi from '../api/authorApi'

export function loadAuthorsAction() {
    return function(dispatch) {
        return authorApi
            .getAuthors()
            .then(authors => {
                debugger
                dispatch({
                    type: C.LOAD_AUTHOR_SUCCESS,
                    payload: authors,
                })
            })
            .catch(err => {
                throw err
            })
    }
}