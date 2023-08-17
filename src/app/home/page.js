import React from "react";
import NavbarTop from "../components/NavbarTop";
import NavbarLeft from "../components/NavbarLeft";
import ContactList from "../components/ContactList";
import { Grid, Paper, Stack } from "@mui/material";
import "./styles.css";

export default function homepage({ users }) {
  return (
    <>
      <NavbarTop />
      <div className="page-container">
        <NavbarLeft className="navbar-left" />

        <Paper className="content-mid">HOLA</Paper>

        <ContactList className="contacts-right" />
      </div>
    </>
  );
}
