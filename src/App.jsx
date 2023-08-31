import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profile from "./pages/profilePage/Profile";
import Home from "./pages/homePage/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
