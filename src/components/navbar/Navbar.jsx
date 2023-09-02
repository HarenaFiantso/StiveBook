import { Logout, Search } from "@mui/icons-material";
import "./navbar.css";
import profileImage from "../../assets/1.jpg"
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../context/AuthContext.jsx";

function Navbar() {
    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);
    const handleProfileClick= () => {
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
    const handleNavigation = () => {
        navigate('/');
    };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo" onClick={handleNavigation}>Stivebook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem" onClick={handleLogoutClick}>
            <Logout className="logoutIcon"/>
          </div>
        </div>
        <img src={user && user.photo ? user.photo : profileImage} alt="" className="topbarImg" onClick={handleProfileClick} />
      </div>
    </div>
  );
}

export default Navbar;
