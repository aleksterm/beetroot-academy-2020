import C from '../constants'

function actionTypeEndsToSuccess(type) {
    return type.substring(type.length -8) === '_SUCCESS'
}

export default function(state = 0, action) {
    const {type} = action

    if (type === C.BEGIN_API_CALL) { return state + 1
    } else if (type === C.API_CALL_ERROR || actionTypeEndsToSuccess(type)) {
        return state - 1
    }

    return state
}