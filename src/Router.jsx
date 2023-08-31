import {Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";

import Profile from "./pages/profilePage/Profile";
import Login from "./pages/loginPage/Login";
import Signup from "./pages/RegisterPage/Register";
import Home from "./pages/homePage/Home";

function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoute/>}>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
            </Route>
            {/*<Route path={"/logout"} element={<Logout/>} />*/}
        </Routes>
    );
}

export default Router;
