"use client";

import React from "react";
import ShadcnImg from "./components/ShadcnImg";
import Product from "./components/Product";

const ShadcnPage = () => {
  return (
    <>
      <ShadcnImg />
      <div className="w-full h-full">
        <div className="w-full h-full bg-fixed bg-[url('/img/miles.jpg')] bg-no-repeat bg-cover ">
          <Product />
        </div>
        <div className="w-full h-full bg-fixed bg-[url('/img/venom.png')] bg-no-repeat bg-cover"></div>
      </div>
    </>
  );
};

export default ShadcnPage;
