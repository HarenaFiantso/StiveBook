import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import ReRoute from "./utils/ReRoute";

import Profile from "./pages/profilePage/Profile";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import Home from "./pages/homePage/Home";

function Router() {
  return (
    <Routes>
        <Route element={<ReRoute />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
        </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
      {/*<Route path={"/logout"} element={<Logout/>} />*/}
    </Routes>
  );
}

export default Router;
