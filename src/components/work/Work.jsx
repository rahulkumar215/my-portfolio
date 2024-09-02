import React from "react";
import "./Work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">My Work</h2>
      <span className="section__subtitle">Check out a few of my works!</span>

      <Works />
    </section>
  );
};

export default Work;
