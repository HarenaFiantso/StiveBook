import {
  EmailOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  MoreVert,
  Pinterest,
} from "@mui/icons-material";
import coverImage from "../../assets/2.jpg";
import Navbar from "../../components/navbar/Navbar";

import "./profile.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://[::1]:8080/users/${id}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du profil utilisateur",
          error
        );
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="images">
          <img src={coverImage} alt="profile Image" className="cover" />
          <img
            src={userData.photo}
            alt="profile Image"
            className="profilePic"
          />
        </div>
        <div className="profileContainer">
          <div className="uInfo">
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
            <div className="center">
              <span className="centerTitle">{userData.username}</span>
              <span>{userData.bio}</span>
              <button>Update my profile</button>
            </div>
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
