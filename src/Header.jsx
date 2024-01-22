import Logo from "./assets/logo.svg";

import { useState } from "react";

export default function Header() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(true);
    if (click === true) {
      setClick(false);
    }
  }
  const condition = click === true;

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="nav">
        <ul className="nav__list">
          <a href="#" className="nav__link">
            <li className="nav__item">Home</li>
          </a>
          <a href="#" className="nav__link">
            <li className="nav__item">New</li>
          </a>
          <a href="#" className="nav__link">
            <li className="nav__item">Popular</li>
          </a>
          <a href="#" className="nav__link">
            <li className="nav__item">Trending</li>
          </a>
          <a href="#" className="nav__link">
            <li className="nav__item">Categories</li>
          </a>
        </ul>

        <div className="menu" onClick={handleClick}>
          <span
            className={`menu__bar ${condition ? "rotate__first" : ""}`}
          ></span>
          <span
            className={`menu__bar ${condition ? "rotate__second" : ""}`}
          ></span>
          <span
            className={`menu__bar ${condition ? "rotate__third" : ""}`}
          ></span>
        </div>
      </div>

      <div className={`mobile__menu ${click === true ? "show" : ""}`}>
        <ul className="mobile__menu-list">
          <a href="#" className="mobile__menu-link">
            <li className="mobile__menu-item">Home</li>
          </a>
          <a href="#" className="mobile__menu-link">
            <li className="mobile__menu-item">New</li>
          </a>
          <a href="#" className="mobile__menu-link">
            <li className="mobile__menu-item">Popular</li>
          </a>
          <a href="#" className="mobile__menu-link">
            <li className="mobile__menu-item">Trending</li>
          </a>
          <a href="#" className="mobile__menu-link">
            <li className="mobile__menu-item">Categories</li>
          </a>
        </ul>
      </div>
    </header>
  );
}
