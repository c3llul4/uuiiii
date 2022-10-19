import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <header className="pb-5">
        <div className=" header">
          <a href="/">
            <img
              src="./img/logo.png"
              alt="Correio Elegante"
              className="logo-topo"
            />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
