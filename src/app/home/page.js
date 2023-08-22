import React from "react";
import NavbarTop from "../components/NavbarTop";
import NavbarLeft from "../components/NavbarLeft";
import ContactList from "../components/ContactList";
import { Grid, Paper, Stack } from "@mui/material";
import "./styles.css";
import DynamicCards from "../components/DynamicCards";
import InputWithButtonsPost from "../components/InputWithButtonsPost";

export default function homepage({ users }) {
  return (
    <>
      <NavbarTop />
      <div className="page-container">
        <NavbarLeft className="navbar-left" />
        <div className="content-mid">
          <div className="column-container">
            <InputWithButtonsPost
              className='card-container'
            />
            <DynamicCards />
          </div>
        </div>
        <ContactList className="contacts-right" />
      </div>
    </>
  );
}
