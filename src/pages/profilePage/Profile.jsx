import {
  EmailOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  MoreVert,
  Pinterest,
} from "@mui/icons-material";
import coverImage from "../../assets/2.jpg";
import profileImage from "../../assets/1.jpg";

import "./profile.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar"
import UpdateProfileModal from "./UpdateProfileModal";

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
            <div className="center">
              <span className="centerTitle">Fiantso Harena</span>
              <span>God's worshiper</span>
              <button onClick={handleOpenModal}>Update my profile</button>
              <UpdateProfileModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
