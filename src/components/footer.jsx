import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark d-flex justify-content-center align-items-center">
      <p
        className="m-0 text-white d-flex"
        style={{ fontFamily: "Raleway", fontSize: 12 }}
      >
        by: InMind
        <Link href="/login">
          <a className="link-login d-flex justify-content-center align-items-center ms-2">
            Login <img src="./img/login.png" alt="Login" />
          </a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
