// import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";
import styles from "./Works.module.scss";

const Works = () => {
  return (
    <div className={`${styles.workContainer} container grid`}>
      {projectsData.map((item) => {
        return <WorkItems item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Works;
