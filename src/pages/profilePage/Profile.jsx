import coverImage from "../../assets/2.jpg";
import profileImage from "../../assets/1.jpg";
import "./profile.css";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext.jsx";
import EditProfile from "./EditProfile";
import { get } from "../../utils/api"; // Import the 'get' function

function Profile() {
  const { user } = useContext(UserContext);

  const [openEdit, setOpenEdit] = useState(false);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("no bio yet");

  const handleEditSave = (updatedData) => {
    if (updatedData) {
      setUsername(updatedData.updatedUsername);
      setBio(updatedData.updatedBio);
    }
  };

  const fetchData = async () => {
    try {
      const userData = await get(`users/${user.id}`); // Use the 'get' function

      // Assuming 'get' returns an object with username and bio properties
      setUsername(userData.username);
      setBio(userData.bio || "no bio yet");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user.id]);

  return (
    <>
      <Navbar />

      {openEdit && (
        <EditProfile
          closeEdit={setOpenEdit}
          onSaveChanges={handleEditSave}
          initialUsername={username}
          initialBio={bio}
        />
      )}

      <div className="profile">
        <div className="images">
          <img src={coverImage} alt="profile Image" className="cover" />
          <img src={profileImage} alt="profile Image" className="profilePic" />
        </div>
        <div className="profileContainer">
          <div className="uInfo">
            <div className="center">
              <span className="centerTitle">{username}</span>
              <span>{bio}</span>
              <button className="updateProfile" onClick={() => setOpenEdit(true)}>Update my profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
