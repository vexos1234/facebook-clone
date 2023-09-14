import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  // very important to learn
  const requestURL = new URL(request.url);
  const code = requestURL.searchParams.get("code"); // getting the code from the params

  if (code !== null) {
    const supabase = createRouteHandlerClient({ cookies });
    // using the code that we passed supabase send us the session
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect("http://localhost:3000/home");
}
