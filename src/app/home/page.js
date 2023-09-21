import React from "react";
import NavbarTop from "../components/NavbarTop";
import NavbarLeft from "../components/NavbarLeft";
import ContactList from "../components/ContactList";
import "./styles.css";
import InputWithButtonsPost from "../components/InputWithButtonsPost";
import Cards from "../components/Cards";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function homepage({ users }) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/");
  }

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
