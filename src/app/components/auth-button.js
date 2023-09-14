"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export function AuthButton() {
  const [session, SetSession] = useState(null);
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut({});
    window.location.reload();
  };

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      SetSession(data.session);
    };

    getSession();
  }, []);

  return (
    <header>
      {session === null ? (
        <button onClick={handleSignIn}>Sign In With GitHub</button>
      ) : (
        <button onClick={handleSignOut}>Sign Out</button>
      )}
    </header>
  );
}
