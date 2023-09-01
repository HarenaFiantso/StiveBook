import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext.jsx";
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
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    if (!validatorForm()) {
      setLoginError("Please fill in your informations");
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
          <span>Don&apos;t have an account yet?</span>
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
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
