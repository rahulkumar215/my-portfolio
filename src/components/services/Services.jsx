import React, { useState } from "react";
import styles from "./Services.module.scss";
import Service from "./Service";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className={`${styles.servicesContainer} container grid`}>
        <Service />
      </div>
    </section>
  );
};

export default Services;
