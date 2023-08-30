import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import axios from "axios";
import { styled } from "@mui/system";

const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled("div")`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  padding: 20px;
  border-radius: 20px;
  outline: none;
  width: 50%;
  backdrop-filter: 200px;
`;

function UpdateProfileModal({ isOpen, onClose }) {
  const [newUsername, setNewUsername] = useState("");
  const [newBio, setNewBio] = useState("");

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setNewBio(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedData = {
        username: newUsername,
        bio: newBio,
      };

      const response = await axios.put(
        `http://[::1]:8080/users`,
        updatedData
      );

      console.log("Profile updated :", response.data);
      onClose();
    } catch (error) {
      console.error("Error while updating the user :", error);
    }
  };

  return (
    <ModalContainer
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
    >
      <Fade in={isOpen}>
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="New username"
              value={newUsername}
              onChange={handleUsernameChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="New biographie"
              value={newBio}
              onChange={handleBioChange}
              rowsMin={4}
              style={{ width: "100%", marginTop: "8px" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={{ marginTop: "16px", borderRadius: "10px", textTransform: "capitalize", fontWeight: "bold" }}
            >
              Update profile
            </Button>
          </form>
        </ModalContent>
      </Fade>
    </ModalContainer>
  );
}

export default UpdateProfileModal;
