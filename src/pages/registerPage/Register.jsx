import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import {useContext, useState} from "react";
import { UserContext } from "../../context/AuthContext";
import {post} from "../../utils/api.js";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username && !email && !password && !confirmPassword) {
      setErrorMessage("Please fill in the following inputs");
      return;
    }

    if (username.length < 5) {
      setErrorMessage("Username must be at least 5 characters long");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email address");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const values = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    post("users", values)
      .then(() => {
        post("users/login", values).then((res) => {
          const token = res.token;
          delete res.token;
          login(res.id, token);
          navigate("/");
        });
      })
      .catch((error) => {
        console.error("Error creating your account:", error);
      });
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Stivebook.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <form>
            <input
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Confirm your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
