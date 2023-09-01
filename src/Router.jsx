import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import ReRoute from "./utils/ReRoute";
import{Home, NotFound, Profile, Register, Login} from"./pages/index.js";

function Router() {
  return (
    <Routes>
        <Route path='*' element={<NotFound />} />
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
