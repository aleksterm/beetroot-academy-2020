import { generate as id} from 'shortid'
import C from '../constants'

export default store => next => action => {
    if (action.type.indexOf(C.CREATE) !== -1) {
        action = {...action, payload: {...action.payload, id: id()}}
    }

    next(action)
}