import "./rightbar.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext.jsx";

const Rightbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleProfileClick = () => {
    if (user && user.id) {
      navigate(`/profile/${user.id}`);
    } else {
      navigate(`*`);
    }
  };

  const handleLogoutClick = () => {
    logout(); 
    navigate('/login'); 
  };

  return (
    <div className="rightbar">
      <div className="container">
        <h1>Welcome to Stivebook ! </h1>
        <button className="share__btn" onClick={handleProfileClick}>
          View your profile
        </button>
        <button className="share__btn" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
