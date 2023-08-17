import React from "react";
import axios from "axios";
import { Button, ButtonGroup, Divider, Typography } from "@mui/material";
import "./styles.css";

async function getUsers() {
  const { data } = await axios.get("https://dummyjson.com/users");
  const res = data.users;
  return res;
}

export default async function ContactList() {
  const users = await getUsers();

  if (!users) {
    return "Loading...";
  }
  return (
    <div className="container2">
      <ButtonGroup
        orientation="vertical"
        sx={{ backgroundColor: "#18191A" }}
        className="button-group-contacts">
        <Typography>Birthday&apos;s:</Typography>
        {/* map users on birthday */}
        <Button variant="text" className="button2">
          Juanito Alimania
        </Button>
        <Divider className="divider2" />
        {/* map users and tell with a green indicator online or not */}
        <Typography>Contacts</Typography>
        {users.map((user) => (
          <Button variant="text" className="button2" key={user.id}>
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              style={{ marginRight: "8px", height: "36px", width: "36px" }}
            />
            {user.firstName} {user.lastName}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
