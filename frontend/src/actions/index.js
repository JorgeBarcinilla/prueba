import axios from "axios";
import { AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT, AUTH_SIGN_IN, HOME_GET_DATA, MOVIE_CREATE, FUNCION_CREATE, FUNCION_DELETE} from "./types";

export const signUp = data => {

    return async dispatch => {
        try {
            console.log('[ActionCreator] signUp Called!!');
            const res = await axios.post('http://localhost:4000/api/user/signUp', data);

            console.log('[ActionCreator] signUp dispatched an action!!');
            dispatch({
                type: AUTH_SIGN_UP,
                payload: res.data.token
            });

            localStorage.setItem('JWT_TOKEN', res.data.token);
            axios.defaults.headers.common['Authorization'] = res.data.token;

        } catch (err) {
            console.error('err',err);
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email is already use'
            });
        }
    }
}

export const signIn = data => {

    return async dispatch => {
        try {
            console.log('[ActionCreator] signUp Called!!');
            const res = await axios.post('http://localhost:4000/api/user/signIn', data);

            console.log('[ActionCreator] signUp dispatched an action!!');
            dispatch({
                type: AUTH_SIGN_IN,
                payload: res.data.token
            });

            localStorage.setItem('JWT_TOKEN', res.data.token);
            axios.defaults.headers.common['Authorization'] = res.data.token;

        } catch (err) {
            console.error('err',err);
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email or Password incorrect'
            });
        }
    }
}

export const getFuncions = () => {
    return async dispatch => {
        try {
            const movies = await axios.get('http://localhost:4000/api/movie/');
            const funcions = await axios.get('http://localhost:4000/api/funcion/');
            const user = await axios.get('http://localhost:4000/api/user/home');

            console.log(funcions);
            dispatch({
                type: HOME_GET_DATA,
                payload: {
                    movies : movies.data,
                    funcions: funcions.data,
                    user: user.data
                }
            });

        } catch (err) {
            console.error('err',err);
        }
        
    }
}

export const deleteFuncion = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:4000/api/funcion/delete', data);
            console.log(res.data);
            dispatch({
                type: FUNCION_DELETE,
                payload: res.data
            });

        } catch (err) {
            console.error('err',err);
        }
        
    }
}

export const createMovie = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:4000/api/movie/create', data);
            console.log(res.data);
            dispatch({
                type: MOVIE_CREATE,
                payload: res.data
            });

        } catch (err) {
            console.error('err',err);
        }
        
    }
}

export const createFuncion = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:4000/api/funcion/create', data);
            console.log(res.data);
            dispatch({
                type: FUNCION_CREATE,
                payload: res.data
            });

        } catch (err) {
            console.error('err',err);
        }
        
    }
}


export const signOut = () => {
    return dispatch => {
        localStorage.removeItem('JWT_TOKEN');
        axios.defaults.headers.common['Authorization'] = '';
        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        })
    }
}