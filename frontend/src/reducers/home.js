import { HOME_GET_DATA } from "../actions/types";

const DEFAULT_STATE = {
    funcions: [],
    movies: [],
    user:{}
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case HOME_GET_DATA:
            console.log(action.payload.movies);
            return {...state, movies: action.payload.movies, funcions: action.payload.funcions, user:action.payload.user }
        default:
            return state
    }

}