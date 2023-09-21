"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function AuthButton() {
  const [session, SetSession] = useState(null);
  const [error, SetError] = useState();
  const supabase = createClientComponentClient();

  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      SetError(error);
      SetSession(data.session);
    };

    getSession();
  }, []);

  console.log("error:", error);
  console.log("session:", session);
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
