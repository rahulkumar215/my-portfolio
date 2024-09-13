import React from "react";
// import styles from "./NavItem.module.scss";

function NavItem({ children, navName, activeNav, onClick, icon }) {
  return (
    <li className="nav__item">
      <a
        href={navName}
        onClick={() => onClick(navName)}
        className={
          activeNav === navName ? "nav__link active-link" : "nav__link"
        }
      >
        <i className={`uil ${icon} nav__icon`}></i> {children}
      </a>
    </li>
  );
}

export default NavItem;
