import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/AuthContext.jsx";
import { useContext } from "react";
import "./editProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { put } from "../../utils/api";

function EditProfile({ closeEdit, onSaveChanges, initialUsername, initialBio }) {
  const [editingField, setEditingField] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailPasswordFields, setShowEmailPasswordFields] = useState(false);
  const [emptyFieldError, setEmptyFieldError] = useState("");
  const [emailPassWordError, setEmailPassWordError] = useState("");

  const [username, setUsername] = useState(initialUsername);
  const [bio, setBio] = useState(initialBio);


  useEffect(() => {
    setUsername(initialUsername);
    setBio(initialBio);
  }, [initialUsername, initialBio]);


  const handleEdit = (field) => {
    setEditingField(field);
  };


  const handleConfirmChanges = (field) => {
    if (field === "username") {

      setUsername(username);
    } else if (field === "bio") {

      setBio(bio);
    }
    setEditingField(null);
  };

  const handleSaveChanges = async () => {
    if (!showEmailPasswordFields) {

      setShowEmailPasswordFields(true);
    } else {

      if (!email || !password) {
        setEmptyFieldError("Email and password are required");
        return;
      }

      // Clear any previous error messages
      setEmptyFieldError("");
      setEmailPassWordError("");


      try {
        const response = await put(`users`, {
          username,
          bio,
          email,
          password,
        });
        console.log("User data updated:", response);
        closeEdit(false);
        onSaveChanges({
          updatedUsername: username,
          updatedBio: bio,
        });
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setEmailPassWordError("Email or password is incorrect");
        } 
        else {
          console.error("Error updating user data:", error);
        }
      }
    }
  };

  return (
    <div className="editBg">
      <div className="editContainer">
        <div className="editTitleContainer">
          <div className="editTitle">
            <h2>Edit your information</h2>
          </div>
          <FontAwesomeIcon
            className="close"
            icon={faXmark}
            onClick={() => closeEdit(false)}
          />
        </div>
        <Box>
          <div className="editUserName">
            <div className="containEdit">
              <Typography variant="h6">Username</Typography>
            </div>

            {editingField === "username" ? (
              <div className="editForm">
                <input
                  type="text"
                  value={username}
                  className="inputEdit"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button
                  className="confirmBtn"
                  onClick={() => handleConfirmChanges("username")}
                >
                  Confirm
                </button>
              </div>
            ) : (
              <>
                <Typography variant="body2" className="infoProfil">
                  {username}
                </Typography>
                <button
                  className="editUsernameBtn"
                  onClick={() => handleEdit("username")}
                >
                  Edit
                </button>
              </>
            )}
          </div>
          <div className="editBio">
            <div className="containEdit">
              <Typography variant="h6">Bio</Typography>
            </div>

            {editingField === "bio" ? (
              <div className="editForm">
                <input
                  type="text"
                  value={bio}
                  className="inputEdit"
                  onChange={(e) => setBio(e.target.value)}
                />
                <button
                  className="confirmBtn"
                  onClick={() => handleConfirmChanges("bio")}
                >
                  Confirm
                </button>
              </div>
            ) : (
              <>
                <Typography variant="body2" className="infoProfil">
                  {bio}
                </Typography>
                <button
                  className="editBioBtn"
                  onClick={() => handleEdit("bio")}
                >
                  Edit
                </button>
              </>
            )}
          </div>
          {showEmailPasswordFields && (
            <div className="EmailPasswordContainer">
              <Typography variant="body">Enter your email and password to confirm change</Typography>
              <input
                type="email"
                value={email}
                className="inputCredentials"
                placeholder="Your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmptyFieldError("");}}
              />
              <input
                type="password"
                value={password}
                className="inputCredentials"
                placeholder="Your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setEmptyFieldError("");
                }}
              />
            </div>
          )}
          {emptyFieldError && <div className="error">{emptyFieldError}</div>}
          {emailPassWordError && <div className="error">{emailPassWordError}</div>}

          <button
            className="saveBtn"
            onClick={(e) => {
              e.preventDefault();
              handleSaveChanges();
            }}
          >
            {showEmailPasswordFields ? "Confirm" : "Save"}
          </button>
        </Box>
      </div>
    </div>
  );
}

export default EditProfile;
