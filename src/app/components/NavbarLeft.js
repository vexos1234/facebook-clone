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

export default function NavbarLeft() {
  return (
    <div className="container-left">
      <ButtonGroup orientation="vertical" className="button-group-container">
        <Button
          startIcon={<AccountCircleIcon />}
          variant="text"
          className="button">
          Name
        </Button>
        <Button
          startIcon={<SupervisorAccountIcon />}
          variant="text"
          className="button">
          Friends
        </Button>
        <Button startIcon={<FeedIcon />} variant="text" className="button">
          Feeds
        </Button>
        <Button
          startIcon={<SettingsBackupRestoreIcon />}
          variant="text"
          className="button">
          Memories
        </Button>
        <Button startIcon={<BookmarkIcon />} variant="text" className="button">
          Saved
        </Button>
        <Button startIcon={<GroupIcon />} variant="text" className="button">
          Groups
        </Button>
        <Button
          startIcon={<OndemandVideoIcon />}
          variant="text"
          className="button">
          Video
        </Button>
        <Button
          startIcon={<StorefrontIcon />}
          variant="text"
          className="button">
          Marketplace
        </Button>
        <Button
          startIcon={<LocalActivityIcon />}
          variant="text"
          className="button">
          Events
        </Button>
        <Button
          startIcon={<BarChartIcon />}
          variant="text"
          className="button icon-button">
          Ads Manager
        </Button>
        <Button
          startIcon={<ExpandCircleDownIcon />}
          variant="text"
          className="button">
          See More
        </Button>
        <Divider className="divider" />

        <Typography sx={{ marginTop: "21px", marginLeft: "5px" }}>
          Your Shortcuts
        </Typography>
        <Button
          startIcon={<VideogameAssetIcon />}
          variant="text"
          className="button">
          Game example
        </Button>
      </ButtonGroup>
    </div>
  );
}
