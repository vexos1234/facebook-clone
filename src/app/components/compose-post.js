"use client";

import { Button, TextField } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs/dist";
import { useState, useEffect } from "react";

export function ComposePost() {
  const [postContent, setPostContent] = useState("");
  const [session, setSession] = useState(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };

    getSession();
  }, []);

  console.log(session);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("posts").insert([
        {
          content: postContent,
          user_id: session.user.id,
        },
      ]);

      if (error) {
        throw error;
      }

      window.location.reload();
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        onChange={(e) => setPostContent(e.target.value)}
        value={postContent}
        multiline
        variant="outlined"
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
      <Button
        type="submit"
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
        variant="outlined">
        Post
      </Button>
    </form>
  );
}
