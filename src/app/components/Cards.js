import axios from "axios";
import "./styles.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dynamic from "next/dynamic";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import InputWithButtons from "./InputWithButtons";
import InputWithButtonsPost from "./InputWithButtonsPost";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Divider } from "@mui/material";

function formatDate(inputDate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObj = new Date(inputDate);
  const day = dateObj.getUTCDate();
  const month = months[dateObj.getUTCMonth()];
  const year = dateObj.getUTCFullYear();
  const hours = dateObj.getUTCHours().toString().padStart(2, "0");
  const minutes = dateObj.getUTCMinutes().toString().padStart(2, "0");

  const formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;
  return formattedDate;
}

const DynamicExpandMore = dynamic(() =>
  import("@mui/material/IconButton").then((module) => {
    const { default: IconButton } = module;
    const { styled } = require("@mui/material/styles"); // Import styled conditionally
    return styled(IconButton)(({ theme, expand }) => ({
      transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    }));
  })
);

export default async function Cards() {
  const supabase = createServerComponentClient({ cookies });
  const data = await supabase.from("posts").select();
  const posts = data.data;

  console.log(posts);

  return Array.isArray(posts) && posts.length > 0 ? (
    <div className="card-container">
      {posts.map((post) => (
        <Card
          sx={{
            marginBottom: "16px",
            background: "#242526",
            color: "#fefefe",
          }}
          key={post.id}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
                aria-label="settings"
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={<span style={{ fontWeight: "bold" }}>{post.name}</span>}
            subheader={
              <span style={{ color: "white" }}>
                {formatDate(post.created_at)}
              </span>
            }
          />
          <Typography
            variant="body2"
            color="white"
            sx={{ marginBottom: "5px", marginLeft: "15px" }}
          >
            {post.content}
          </Typography>
          {post.image ? (
            <CardMedia
              component="img"
              height="194"
              image={post.image}
              alt="Paella dish"
            />
          ) : null}
          <CardActions className="card-buttons-container">
            <IconButton aria-label="Like" className="card-buttons">
              <ThumbUpIcon
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
              />
              <Typography sx={{ marginLeft: "5px" }}>Like</Typography>
            </IconButton>
            <IconButton aria-label="Comments" className="card-buttons">
              <ChatBubbleOutlineIcon />
              <Typography sx={{ marginLeft: "5px" }}>Comment</Typography>
            </IconButton>
            <IconButton aria-label="Share" className="card-buttons">
              <ShortcutIcon />
              <Typography sx={{ marginLeft: "5px" }}>Share</Typography>
            </IconButton>
          </CardActions>
          <InputWithButtons className="input-component-container" />
          <Typography sx={{ color: "#B0B3B8", marginLeft: "10px" }}>
            View more comments
          </Typography>

          <CardContent>
            <Typography paragraph>comments:</Typography>
            <Typography paragraph>comment 1</Typography>
            <Typography paragraph>comment 2</Typography>
            <Typography paragraph>comment 3</Typography>
            <Typography>comment 4</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  ) : (
    <h1>Loading</h1>
  );
}
