import React from "react";
import styles from "./Skill.module.scss";

function Skill({ icon, name }) {
  return (
    <div className={styles.skill}>
      {icon}
      <p>{name}</p>
    </div>
  );
}

export default Skill;
