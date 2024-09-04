import React from "react";
import styles from "./WorkItems.module.scss";
import { ReactComponent as SheetsIcon } from "../../assets/icons/sheets.svg";
import { ReactComponent as AppScriptIcon } from "../../assets/icons/appsscript.svg";
import { ReactComponent as DriveIcon } from "../../assets/icons/drive.svg";
import { ReactComponent as HtmlIcon } from "../../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/css.svg";
import { ReactComponent as JavaScriptIcon } from "../../assets/icons/javascript.svg";

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
          <li>
            <span>
              {item.name === "Google Sheets" && (
                <SheetsIcon className={styles.workIcon} />
              )}
              {item.name === "Google Drive" && (
                <DriveIcon className={styles.workIcon} />
              )}
              {item.name === "Apps Script" && (
                <AppScriptIcon className={styles.workIcon} />
              )}
              {item.name === "HTML" && <HtmlIcon className={styles.workIcon} />}
              {item.name === "CSS" && <CssIcon className={styles.workIcon} />}
              {item.name === "JavaScript" && (
                <JavaScriptIcon className={styles.workIcon} />
              )}
            </span>
            {item.name}
          </li>
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
