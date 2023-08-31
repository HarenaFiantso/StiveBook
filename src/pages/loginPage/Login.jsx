import { useContext, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { UserContext } from "../../context/AuthContext.jsx";
import {post} from "../../utils/api"
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const values = {
      email: email,
      password: password,
    };
    post("users/login", values)
        .then((res) => {
          const token = res.token
          delete res.token;
          login(res.data, token)
          navigate("/");
        })
        .catch((error) => {
          console.error("Error logging in:", error);
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
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span>Don't have an account yet?</span>
          <Link to="/signup">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
