import Navbar from "@/Components/Navbar";
import styles from "../styles/about.module.css"
import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>About Page 😁</title>
      </Head>
      <Navbar />
      <h1 className={styles.first_heading}>Welcome to About Page</h1>
      <p className={styles.first_paragraph}>This is a about page paragraphh</p>
    </div>
  );
};

export default about;
