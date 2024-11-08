import React from "react";
import { UserButton } from "@clerk/nextjs";
import Navbar from "./_components/navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <UserButton showName />
    </>
  );
};

export default Homepage;
