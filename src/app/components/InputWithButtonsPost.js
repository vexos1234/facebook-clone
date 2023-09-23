"use client";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import "./styles.css";
import { Divider, IconButton, Typography } from "@mui/material";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ComposePost } from "./compose-post";

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

function InputWithButtonsPost() {
  const [posts, SetPosts] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const supabase = createClientComponentClient();

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase
        .from("posts")
        .select("*, user:users(name, avatar_url, user_name)")
        .order("created_at", { ascending: false });
      SetPosts(data);
    };

    getSession();
  }, [supabase.auth]);

  // if (!user) {
  //   return "Loading...";
  // }

  return (
    <>
      {/* post modal */}

      {/* {
      posts?.map(post => {
          const {
            id,
            user,
            content
          } = post

          const {
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl
          } = user */}

      <Modal
        sx={{ display: "flex" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
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
            component="h2">
            Create post
          </Typography>
          <Box display="flex" ml={2}>
            {posts && (
              <Avatar
                sx={{
                  bgcolor: "black",
                  marginTop: "5px",
                  marginRight: "10px",
                  marginBottom: "5px",
                }}>
                <img
                  alt="profile-picture"
                  src={posts.avatar_url}
                  style={{ height: "36px", width: "36px" }}
                />
              </Avatar>
            )}

            {/* USER NAME */}
            {posts && (
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, color: "#E4E6EB" }}>
                {posts.name}&nbsp;
                {/* {selectedPost.lastName} */}
              </Typography>
            )}
          </Box>
          <Box flexGrow={1}>
            <ComposePost />
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
            }}>
            <Typography
              sx={{
                alignItems: "center",
                display: "flex",
                marginLeft: "20px",
              }}>
              Add to your post
            </Typography>
            {/* icons for gif, photos, emoji, feelings, etc... */}
          </Box>
        </Box>
      </Modal>

      <div className="input-with-buttons2">
        <div className="avatar-input">
          <Avatar sx={{ bgcolor: "red", marginRight: "5px" }}>A</Avatar>
          <div className="input">
            <div className="input-container">
              <TextField
                fullWidth
                variant="outlined"
                placeholder="What's on your mind?"
                focused={true}
                onClick={handleOpen}
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
      </div>
    </>
  );
}

export default InputWithButtonsPost;
