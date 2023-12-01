import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { validateToken } from "../../helpers"
import usePriorFetch from "../../services/hooks/usePriorFetch";

const Private = () => {
    const [profiledata, isloading, error] = usePriorFetch("/users/profile");

    const userdata = useSelector(state => state.auth);

    return userdata.user && userdata.user.token && validateToken(userdata.user.token) ? <Outlet context={[profiledata, isloading, error]} /> : <Navigate to={"/auth/login"} />
}

export default Private