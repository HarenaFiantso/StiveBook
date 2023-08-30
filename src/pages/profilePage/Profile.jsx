import {
  EmailOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  MoreVert,
  Pinterest,
} from "@mui/icons-material";
import profileImage from "../../assets/1.jpg";
import coverImage from "../../assets/2.jpg";
import Navbar from "../../components/navbar/Navbar";

import "./profile.css";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="images">
          <img src={coverImage} alt="profile Image" className="cover" />
          <img src={profileImage} alt="profile Image" className="profilePic" />
        </div>
        <div className="profileContainer">
          <div className="uInfo">
            {/* Ceci est juste un lien optionnel que j'ai ajouté pour juste ajouter un style à la page */}
            <div className="left">
              <a href="https://web.facebook.com/fiantso.harena.3/">
                <Facebook fontSize="large" />
              </a>
              <a href="https://web.facebook.com/fiantso.harena.3/">
                <Instagram fontSize="large" />
              </a>
              <a href="https://web.facebook.com/fiantso.harena.3/">
                <LinkedIn fontSize="large" />
              </a>
              <a href="https://web.facebook.com/fiantso.harena.3/">
                <Pinterest fontSize="large" />
              </a>
            </div>
            {/* Ici ce sont les informations supplémentaire */}
            <div className="center">
              <span className="centerTitle">Fiantso Harena</span>
              <span>God's worshiper</span>
              <button>Update my profile</button>
            </div>
            {/* Mmmh, some additionnal features I think */}
            <div className="right">
              <EmailOutlined />
              <MoreVert />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
