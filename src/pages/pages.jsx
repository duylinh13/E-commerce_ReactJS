import React from "react";
import Home from "../components/MainPage/Home";

const Pages = ({ CartItem, s }) => {
  return (
    <>
      <Home CartItem={CartItem} />
    </>
  );
};

export default Pages;
