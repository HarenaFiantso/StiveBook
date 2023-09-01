import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import { post } from "../../utils/api";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const validatorForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
      setTimeout(() => {
        setErrors({ ...errors, email: "" }); // Clear email error after 1.5 seconds
      }, 1500);
    }
    if (!password) {
      newErrors.password = "Password is required";
      setTimeout(() => {
        setErrors({ ...errors, password: "" }); // Clear password error after 1.5 seconds
      }, 1500);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearErrors = () => {
    setLoginError("");
    setErrors({});
  };

  const handleLogin = (e) => {
    e.preventDefault();

    clearErrors(); // Clear previous errors

    if (!validatorForm()) {
      setLoginError("Please fill in your information");
      setTimeout(() => {
        setLoginError(""); // Clear the error message after 1.5 seconds
      }, 1500);
      return;
    }

    const values = {
      email: email,
      password: password,
    };
    post("users/login", values)
      .then((res) => {
        const token = res.token;
        delete res.token;
        login(res, token);
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            setLoginError("Incorrect email or password");
          } else if (error.response.status === 400) {
            if (error.response.data.message === "Invalid email") {
              setLoginError("Invalid email");
            } else {
              setLoginError("Incorrect email or password");
            }
          } else if (error.response.status === 404) {
            setLoginError("Unknown user");
          } else {
            console.log("Error logging in:", error);
          }
        }

        setTimeout(() => {
          setLoginError(""); // Clear the error message after 1.5 seconds
        }, 1500);
      });
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't have an account yet?</span>
          <Link to="/signup">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          {loginError && <div className="error">{loginError}</div>}
          <form>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearErrors(); // Clear errors when typing
              }}
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearErrors(); // Clear errors when typing
              }}
            />
            {errors.password && <div className="error">{errors.password}</div>}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
