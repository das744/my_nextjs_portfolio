import React from "react";

import styles from "./Service.module.css";
import { servicesData } from "@/components/Service/serviceData"; // Import service data

const Service = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.heading}>
        <h1>Services</h1>
      </div>
      <div className={styles.serviceBoxContainer}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.serviceBox}>
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
