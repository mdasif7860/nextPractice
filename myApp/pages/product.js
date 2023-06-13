import Navbar from "@/Components/Navbar";
import React from "react";
import Image from "next/image";
import Head from "next/head";
const product = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Product Page 🛒</title>
      </Head>
      <Navbar />
      <h1 style={{ color: "red", textAlign: "center" }}>
        Welcome to Product Page
      </h1>
      <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" width="400" height="300" alt="aboutImage"></Image>
    </div>
  );
};

export default product;
