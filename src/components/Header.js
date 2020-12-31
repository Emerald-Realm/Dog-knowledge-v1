import React, { useState, useEffect } from "react";
import "./style/main.css";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("allhead").style.top = "0";
    } else {
      document.getElementById("allhead").style.top = "0";
    }
  };

  return (
    <div>
      <header id="allhead">
        <div className="navbar">
          <div className="nav-brand">
            <Link to="/">Dog Knowledge</Link>
          </div>
          <div className="tabs" onClick={handleMenu}>
            <button className="menu">menu</button>
          </div>
        </div>
        <nav className="head-nav">
          <ul className={menu ? "nav-list" : "hide"} id="navli">
            <Link to="/">
              <li className="first">Home</li>
            </Link>
            <Link to="/breeds">
              <li>Breeds</li>
            </Link>
            <Link to="/lists">
              <li>Lists</li>
            </Link>
            <Link to="/talk">
              <li>Communication</li>
            </Link>
            <Link to="/care">
              <li>Care</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="/sign-in">
              <li>Account</li>
            </Link>
          </ul>
        </nav>
        <div className="nav-search">
          <input type="text" className="nav-input" placeholder="search" />
        </div>
      </header>
    </div>
  );
}

export default Header;
