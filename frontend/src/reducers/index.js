import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from './auth';
import homeReducer from "./home";
import createMovieReducer from "./createMovie";
import createFuncionReducer from "./createFuncion";

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    home: homeReducer,
    createMovie: createMovieReducer,
    createFuncion: createFuncionReducer,
});