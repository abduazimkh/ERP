import { AUTH, AUTH_LOADING, AUTH_ERROR, AUTH_LOUGOUT } from "../actions";

const initialState = {
    user: null,
    isloading: false,
    error: false,
    message: null,
    isloggedin: false
}

const authreducer = (state = initialState, {type, payload}) => {
    switch(type){
        case AUTH:
            return {
                user: payload.user,
                isloading: false,
                error: false,
                message: payload.message,
                isloggedin: true
            }
        case AUTH_LOADING: 
            return {
                user: null,
                isloading: true,
                error: false,
                message: payload.message,
                isloggedin: false
            }
        case AUTH_ERROR: 
            return {
                user: null,
                isloading: false,
                error: true,
                message: payload.message,
                isloggedin: false
            }
        case AUTH_LOUGOUT:
            return {
                user: null,
                isloading: false,
                error: false,
                message: payload.message,
                isloggedin: false
            }
        default: 
            return state
    }
}

export { authreducer };