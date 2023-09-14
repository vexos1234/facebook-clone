import React from "react";
import NavbarTop from "../components/NavbarTop";
import NavbarLeft from "../components/NavbarLeft";
import ContactList from "../components/ContactList";
import "./styles.css";
import InputWithButtonsPost from "../components/InputWithButtonsPost";
import Cards from "../components/Cards";

export default function homepage({ users }) {
  return (
    <>
      {/* top */}
      <NavbarTop />
      <div className="page-container">
        {/* left */}
        <NavbarLeft className="navbar-left" />

        {/* center */}
        <div className="content-mid">
          <div className="column-container">
            <div className="post-container">
              <InputWithButtonsPost />
            </div>
            <Cards />
          </div>
        </div>

        {/* right */}
        <ContactList className="contacts-right" />
      </div>
    </>
  );
}
