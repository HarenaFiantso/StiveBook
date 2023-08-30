import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profile from "./pages/profilePage/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
