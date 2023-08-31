import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Profile from "./pages/profilePage/Profile";
import Home from "./pages/homePage/Home";
import Login from "./pages/authpage/Login"
import SignUp from "./pages/authpage/SignUp"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
