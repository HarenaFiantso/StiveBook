import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';

import Profile from "./pages/profilePage/Profile";
import Home from "./pages/homePage/Home";
import Login from "./pages/authpage/Login";
import SignupCard from "./pages/authpage/SignUp";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupCard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
