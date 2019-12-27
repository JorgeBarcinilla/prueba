import { FUNCION_CREATE } from "../actions/types";

const DEFAULT_STATE = {
    data: '',
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case FUNCION_CREATE:
            return {...state, data: action.payload}
        default:
            return state
    }

}