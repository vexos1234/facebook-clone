import Image from "next/image";
import styles from "./page.module.css";
import { AuthButton } from "./components/auth-button";

export default function Home() {
  return (
    <>
      <h1>Sign In!:</h1>
      <AuthButton />
    </>
  );
}
