import {
  ButtonGroup,
  Button,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import FeedIcon from "@mui/icons-material/Feed";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import BarChartIcon from "@mui/icons-material/BarChart";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import "./styles.css";

export default function NavbarLeft() {
  return (
    <div className="container-left">
      <ButtonGroup orientation="vertical" className="button-group-container">
        <Button
          startIcon={<AccountCircleIcon sx={{ fontSize: "24px" }} />} // Adjust the icon size as needed
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          Name
        </Button>
        <Button
          startIcon={<SupervisorAccountIcon />}
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          Friends
        </Button>
        <Button
          startIcon={<FeedIcon />}
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          Feeds
        </Button>
        <Button
          startIcon={<SettingsBackupRestoreIcon />}
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          Memories
        </Button>
        <Button
          startIcon={<BookmarkIcon />}
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          Saved
        </Button>
        <Button
          startIcon={<GroupIcon />}
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          Groups
        </Button>
        <Button
          startIcon={<OndemandVideoIcon />}
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          Video
        </Button>
        <Button
          startIcon={<StorefrontIcon />}
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          Marketplace
        </Button>
        <Button
          startIcon={<LocalActivityIcon />}
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          Events
        </Button>
        <Button
          startIcon={<BarChartIcon sx={{ fontSize: 30 }} />}
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          Ads Manager
        </Button>
        <Button
          startIcon={<ExpandCircleDownIcon />}
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          See More
        </Button>
        <Divider className="divider" />

        <Typography sx={{ marginTop: "21px", marginLeft: "5px" }}>
          Your Shortcuts
        </Typography>
        <Button
          startIcon={<VideogameAssetIcon />}
          variant="text"
          sx={{
            borderRadius: "10px",
            marginBottom: "5px",
            transition: "background-color 0.1s, border-radius 0.3s",
            height: "52px",
            width: "360px",
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            justifyContent: "start",
            color: "#fefefe",
            "&:hover": {
              backgroundColor: "#303031",
              borderRadius: "10px",
            },
          }}
        >
          Game example
        </Button>
      </ButtonGroup>
    </div>
  );
}
