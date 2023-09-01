import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import "./navbar.css";
import profileImage from "../../assets/1.jpg"
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../context/authContext.jsx";

function Navbar() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const handleProfileClick= () => {
        if (user && user.id) {
            navigate(`/profile/${user.id}`);
        } else {
            navigate(`*`);
        }
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
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={profileImage} alt="" className="topbarImg" onClick={handleProfileClick} />
      </div>
    </div>
  );
}

export default Navbar;
