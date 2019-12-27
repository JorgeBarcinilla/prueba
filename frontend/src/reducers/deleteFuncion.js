import { FUNCION_DELETE } from "../actions/types";

const DEFAULT_STATE = {
    data: '',
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case FUNCION_DELETE:
            return {...state, data: action.payload}
        default:
            return state
    }

}