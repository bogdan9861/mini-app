import React, { useEffect, useRef, useState } from "react";

import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelectorAll(".navigation__link").forEach((link) => {
      let img = link.children[0];

      if (link.getAttribute("href") === pathname) {
        link.parentNode.classList.add("active");
        img.src = img.getAttribute("src").split("color=")[0] + "color=000000";
      } else {
        link.parentNode.classList.remove("active");
        img.src = img.getAttribute("src").split("color=")[0] + "color=ffffff";
      }
    });
  }, [pathname]);

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <Link className="navigation__link" to="/">
              <img
                className="navigation__icon"
                src={`https://img.icons8.com/?size=100&id=6RlaHUy2CmGh&format=png&color=ffffff`}
                alt=""
              />
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link className="navigation__link" to="/favorites">
              <img
                className="navigation__icon"
                src={`https://img.icons8.com/?size=100&id=T6lIeZJi54CY&format=png&color=ffffff`}
                alt=""
              />
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link className="navigation__link" to="/notifications">
              <img
                className="navigation__icon"
                src="https://img.icons8.com/?size=100&id=85022&format=png&color=ffffff"
                alt=""
              />
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link className="navigation__link" to="/messages">
              <img
                className="navigation__icon"
                src="https://img.icons8.com/?size=100&id=8h51YOzhBJmT&format=png&color=ffffff"
                alt=""
              />
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link className="navigation__link" to="/user/123">
              <img
                className="navigation__icon"
                src="https://img.icons8.com/?size=100&id=114064&format=png&color=ffffff"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
