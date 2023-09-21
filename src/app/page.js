import Image from "next/image";
import styles from "./page.module.css";
import { AuthButtonServer } from "./components/auth-button-server";

export default function Home() {
  return (
    <>
      <h1>Sign In!:</h1>
      <AuthButtonServer />
    </>
  );
}
