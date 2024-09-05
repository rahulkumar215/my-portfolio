import React from "react";
import styles from "./Social.module.scss";

const Social = () => {
  return (
    <div className={styles.homeSocial}>
      <a
        href="https://www.linkedin.com/in/rahul-kumar-70841116a/"
        className={styles.homeSocialIcon}
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://twitter.com/Rahul_Kumar010"
        className={styles.homeSocialIcon}
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-twitter"></i>
      </a>
      <a
        href="https://github.com/rahulkumar215"
        className={styles.homeSocialIcon}
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
