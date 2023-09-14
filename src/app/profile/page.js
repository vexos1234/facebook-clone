import React from "react";
import NavbarTop from "../components/NavbarTop";
import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import InputProfile from "../components/InputProfile";

function page() {
  return (
    <>
      <NavbarTop />
      <Box
        sx={{
          overflow: "visible",
        }}
      >
        <Box
          sx={{
            height: "523.34px",
            backgroundColor: "#242526",
            marginTop: "56px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "1095px",
              height: "405.55px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src="portada.jpg"
              alt="Cover Image"
              style={{
                width: "100%", // Make the image fill the width of the parent
                height: "100%", // Make the image fill the height of the parent
                objectFit: "cover", // Zoom the image to cover the container while maintaining aspect ratio
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              top: "510px",
              left: "50%",
              width: "1031px",
              transform: "translateX(-50%) translateY(-90%)",
              marginBottom: "15px",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Stack direction="row" alignItems="center">
              {/* PROFILE PICTURE */}
              <Avatar
                alt="Profile Picture"
                src="next.svg"
                sx={{
                  width: 168,
                  height: 168,
                  border: "2px solid #fff",
                  borderRadius: "50%",
                }}
              />
              <Stack>
                {/* USERNAME */}
                <Typography
                  sx={{
                    marginLeft: "15px",
                    marginTop: "80px",
                    display: "flex",
                    fontWeight: "bold",
                    fontSize: "26px",
                  }}
                >
                  GUSTAVO DUGARTE
                </Typography>
                {/* NUMBER OF FRIENDS */}
                <Typography
                  sx={{
                    marginLeft: "15px",
                  }}
                >
                  123 friends
                </Typography>
              </Stack>
            </Stack>
            <Box sx={{ marginLeft: "auto", marginBottom: "10px" }}>
              <Button sx={{ marginRight: "10px" }} variant="contained">
                Add to story
              </Button>
              <Button variant="contained">Edit profile</Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "1031px",
            margin: "0 auto",
            border: "1px solid #fff",
            padding: "20px",
          }}
        >
          {/* content */}
          <Stack direction="row">
            {/* left content */}
            <Stack>
              <Box
                sx={{
                  display: "flex",
                  width: "390px",
                  backgroundColor: "#242526",
                  borderRadius: "8px",
                  marginLeft: "-3px",
                  height: "300px",
                  marginBottom: "15px",
                }}
              >
                <Typography>Intro</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "390px",
                  backgroundColor: "#242526",
                  borderRadius: "8px",
                  marginLeft: "-3px",
                  minHeight: "400px",
                }}
              >
                <Typography>Intro</Typography>
              </Box>
            </Stack>

            {/* right content */}
            <Box
              sx={{
                width: "auto",
                marginLeft: "15px",
                backgroundColor: "#242526",
                borderRadius: "8px",
                height: "115px",
              }}
            >
              <InputProfile />
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default page;
