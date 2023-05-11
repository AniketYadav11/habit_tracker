// importing required libraries
import React from "react";
import { Link } from "react-router-dom";

// importing css files
import Class from "./Navbar.module.css";

// creating a Navbar component
const Navbar = () => {
  return (
    <div className={Class.nav}>
      <h1>Track All Your Habits In One Go</h1>
      <div>
        <Link className={Class.link} to={"/"}>
          Home
        </Link>
        <Link className={Class.link} to={"/dashboard"}>
          Dashboard
        </Link>
      </div>
    </div>
  );
};

// exporiting Navbar component
export default Navbar;