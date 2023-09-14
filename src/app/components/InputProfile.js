"use client";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import React, { useEffect, useState } from "react";
import "./styles.css";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import axios from "axios";

const style = {
  position: "absolute",
  borderRadius: "10px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: "auto",
  minHeight: 500,
  maxHeight: 600,
  bgcolor: "#242526",
  border: "2px solid #2F3031",
  boxShadow: 24,
};

function InputProfile() {
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // selecting one user for test
  const selectedPost = user.find((post) => post.id === 1);

  return (
    <>
      <Modal
        sx={{ display: "flex" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              fontWeight: "bold",
              height: "60px",
              borderBottom: "1px solid #2F3031",
              justifyItems: "center",
              marginTop: "2px",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create post
          </Typography>
          <Box display="flex" ml={2}>
            {selectedPost && (
              <Avatar
                sx={{
                  bgcolor: "black",
                  marginTop: "5px",
                  marginRight: "10px",
                  marginBottom: "5px",
                }}
              >
                <img
                  alt="profile-picture"
                  src={selectedPost.image}
                  style={{ height: "36px", width: "36px" }}
                />
              </Avatar>
            )}
            {selectedPost && (
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, color: "#E4E6EB" }}
              >
                {selectedPost.firstName}&nbsp;
                {selectedPost.lastName}
              </Typography>
            )}
          </Box>
          <Box flexGrow={1}>
            <TextField
              multiline
              variant="outlined"
              onClick={handleOpen}
              sx={{
                marginBottom: "10px",
                width: "495px",
                backgroundColor: "#242526",
                border: "none",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "& .MuiInputBase-input": {
                  color: "#E4E6EB",
                  fontSize: "25px",
                },
                "& .MuiInputLabel-root, & .MuiInputLabel-outlined": {
                  color: "#B0B3B",
                },
                "& .MuiInputBase-multiline": {
                  maxHeight: "300px",
                  overflow: "auto",
                },
              }}
              placeholder="What's on your mind?"
            />
          </Box>
          <Box
            sx={{
              border: "1px solid #3E4042",
              display: "flex",
              borderRadius: "10px",
              width: "auto",
              height: "57px",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          >
            <Typography
              sx={{
                alignItems: "center",
                display: "flex",
                marginLeft: "20px",
              }}
            >
              Add to your post
            </Typography>
            {/* icons for gif, photos, emoji, feelings, etc... */}
          </Box>
          <Button
            sx={{
              width: "466.8px",
              borderRadius: "10px",
              height: "36px",
              marginLeft: "15px",
              marginTop: "15px",
              marginBottom: "15px",
              backgroundColor: "#2374E1",
              color: "#fff",

              "&:hover": {
                backgroundColor: "#3982E4",
                transition: "background-color 0.3s ease",
              },
            }}
            variant="outlined"
          >
            Post
          </Button>
        </Box>
      </Modal>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "39px",
          minWidth: "590px",
          /* Adjust the height to accommodate the TextField */
          marginTop: "10px",
          borderRadius: "8px",
        }}
      >
        <div className="avatar-input">
          <Avatar sx={{ bgcolor: "red", marginRight: "5px" }}>A</Avatar>
          <div className="input">
            <div className="input-container">
              <TextField
                fullWidth
                variant="outlined"
                onClick={handleOpen}
                placeholder="What's on your mind?"
                focused={true}
                sx={{
                  display: "flex",
                  width: "520px",
                  height: "40px",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    "& .MuiInputBase-input::placeholder": {
                      color: "#c2c3c4",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    // Adjust label styles
                  },
                }}
              />
            </div>
          </div>
        </div>

        <Divider className="divider-post" />

        <div className="post-buttons-container">
          <IconButton className="iconbutton-post">
            <VideoCameraFrontIcon sx={{ fontSize: "32px", color: "#F23E5C" }} />
            <Typography sx={{ color: "#B8BBBF" }}>Live video</Typography>
          </IconButton>

          <IconButton className="iconbutton-post">
            <PhotoLibraryIcon sx={{ fontSize: "32px", color: "#58C472" }} />
            <Typography sx={{ color: "#B8BBBF" }}>Photo/video</Typography>
          </IconButton>

          <IconButton className="iconbutton-post">
            <TagFacesIcon sx={{ fontSize: "32px", color: "#F7BF3E" }} />
            <Typography sx={{ color: "#B8BBBF" }}>Feeling/activity</Typography>
          </IconButton>
        </div>
      </Box>
    </>
  );
}

export default InputProfile;
