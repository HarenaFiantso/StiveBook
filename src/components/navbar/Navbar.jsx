import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import UserImage from "../../assets/1.jpg"
import "./navbar.css";

function Navbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Stivebook</span>
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
        <img src={UserImage} alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default Navbar;
