import React from "react";
import NavbarTop from "../components/NavbarTop";
import NavbarLeft from "../components/NavbarLeft";
import ContactList from "../components/ContactList";
import { Grid, Paper, Stack } from "@mui/material";
import "./styles.css";
import DynamicCards from "../components/DynamicCards";

export default function homepage({ users }) {
  return (
    <>
      <NavbarTop />
      <div className="page-container">
        <NavbarLeft className="navbar-left" />
        <div className="content-mid">
          <DynamicCards />
        </div>

        <ContactList className="contacts-right" />
      </div>
    </>
  );
}
