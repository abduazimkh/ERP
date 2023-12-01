import { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router-dom";
import Login from "../routes/login/Login";
import Register from "../routes/register/Register";
import Admin from "../pages/admin/Admin";
import Students from './students/Students';
import Attendance from './attendance/Attendance';
import Profile from './profile/Profile';

const Home = lazy(() => import("../pages/home/Home"))
const Private = lazy(() => import("./private/Private"))
const Auth = lazy(() => import("../pages/auth/Auth"))

const RouteController = () => {
  return (
    <Routes>
        <Route path="" element={
            <Suspense fallback={<p>Loading...</p>}>
                <Home/>
            </Suspense>
        }/>
        <Route path="admin" element={
            <Suspense fallback={<p>Loading...</p>}>
                <Private/>
            </Suspense>
        }>
            <Route path="" element={<Admin/>}>
                <Route path="" element={<Students/>}/>
                <Route path='attendances' element={<Attendance/>} />
                <Route path='profile' element={<Profile/>} />
            </Route>
        </Route>
        <Route path="auth" element={
            <Suspense fallback={<p>Loading...</p>}>
                <Auth/>
            </Suspense>
        }>
            <Route path='register' element={<Register/>} />
            <Route path="login" element={<Login/>} />
        </Route>
    </Routes>
  )
}

export default RouteController