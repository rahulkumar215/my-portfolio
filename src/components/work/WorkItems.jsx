import React from "react";
import styles from "./WorkItems.module.scss";
import SheetsIcon from "../../assets/icons/sheets.svg";
import AppScriptIcon from "../../assets/icons/appscript.svg";
import DriveIcon from "../../assets/icons/drive.svg";
import HtmlIcon from "../../assets/icons/html.svg";
import CssIcon from "../../assets/icons/css.svg";
import JavaScriptIcon from "../../assets/icons/javascript.svg";

const WorksItems = ({ item }) => {
  return (
    <div
      className={`${styles.workCard} ${
        item.id % 2 === 0 ? styles.workCardRight : styles.workCardLeft
      }`}
      key={item.id}
    >
      <img src={item.bgImage} alt="" className={styles.workImg} />
      <h1>{item.id}</h1>
      <h3 className={styles.workTitle}>{item.title}</h3>
      <p>{item.description}</p>
      <ul>
        {item.techUsed.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <a href="#home" className={styles.workButton}>
        Demo
        <i className={`bx bx-right-arrow-alt ${styles.workButtonIcon}`}></i>
      </a>
    </div>
  );
};

export default WorksItems;
