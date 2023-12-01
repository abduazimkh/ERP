import { AUTH, AUTH_LOADING, AUTH_ERROR, AUTH_LOUGOUT } from "./index";
import axios from "../../services/api";
import { toast } from "react-toastify";


const auth = (user, message) => {
    toast.success(message)
    return {
        type: AUTH,
        payload: {
            user,
            message
        }
    }
}

const auth_loading = (message) => {
    toast.warning(message, {
        autoClose: 500
    })
    return {
        type: AUTH_LOADING,
        payload: {
            message
        }
    }
}

const auth_error = (message) => {
    toast.error(message)
    return {
        type: AUTH_ERROR,
        payload: {
            message
        } 
    }
}

export const auth_logout = (message) => {
    toast.success(message)
    return {
        type: AUTH_LOUGOUT,
        payload: {
            message
        }
    }
}

const register = USER =>  async dispatch => {
    dispatch(auth_loading("Loading..."));
    axios.post("/users", USER)
        .then(response => {
            if(response.status === 201){
                dispatch(auth(response.data, "Successfully loaded!"))
            }
        })
        .catch(error => {
            dispatch(auth_error(error.response.data.message))
        })
}

const login = USER =>  async dispatch => {
    dispatch(auth_loading("Loading..."));
    axios.post("/users/login", USER)
        .then(response => {
            if(response.status === 200){
                dispatch(auth(response.data, "Successfully loaded!"))
            }
        })
        .catch(error => {
            dispatch(auth_error(error.response.data.message))
        })
}

const logout = () => dispatch => {
    dispatch(auth_logout("You logged out"));
}

export { register, login, logout }