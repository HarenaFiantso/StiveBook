import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { styled } from "@mui/system";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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

function UpdateProfileModal({ isOpen, onClose, user }) {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newBio, setNewBio] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  useEffect(() => {
    if (user) {
      setNewEmail(user.email);
      setNewPassword(user.password);
      setNewUsername(user.username);
      setNewBio(user.bio);
    }
  }, [user]);

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setNewBio(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedData = {
        email: newEmail,
        password: newPassword,
        username: newUsername,
        bio: newBio,
      };

      const response = await axios.put(`http://[::1]:8080/users`, updatedData);

      console.log("Profile updated :", response.data);
      onClose();
    } catch (error) {
      console.error("Error while updating the user :", error);
    }
  };

  return (
    <ModalContainer open={isOpen} onClose={onClose} closeAfterTransition>
      <Fade in={isOpen}>
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="New email"
              value={newEmail}
              onChange={handleEmailChange}
              fullWidth
              margin="normal"
            />
            <FormControl
              fullWidth
              variant="filled"
              onChange={handlePasswordChange}
              value={newPassword}
            >
              <InputLabel htmlFor="filled-adornment-password">
                New Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
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
              style={{
                marginTop: "16px",
                borderRadius: "10px",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
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
