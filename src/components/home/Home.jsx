import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={`${styles.home} section`} id="home">
      <div className={`${styles.homeContainer} container grid`}>
        <div className={`${styles.homeContent} grid`}>
          <Social />

          <div className={styles.homeImg}></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
