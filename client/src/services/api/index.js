import axios from "axios";
import { auth_logout } from "../../redux/actions/auth-action";
import { store } from "../../redux/store"

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    },
    timeout: 10000
})

instance.interceptors.request.use(
    (request) => {
      if(store.getState().auth.user){
        request.headers["Authorization"] = "Bearer " + store.getState().auth.user.token
      }
      return request
    },
    (error) => {
      return Promise.reject(error);
    }
);


instance.interceptors.response.use(
    (response) => {
        if(response) return response
    },
    (error) => {
        if(error.response?.status === 401 || error.response?.status === 403 || error.response?.status === 500) {
            store.dispatch(auth_logout("Session expired. Please login again."));
        }
        return Promise.reject(error);
    }
)

export default instance;