"use client";
import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Title from "@/Common/Title";

const WhatYouLearn = ({ data }) => {
  return (
    <section className={`${styles.container} container`}>
      <Title title={data?.title} />
      <div className={styles.contentContainer}>
        {data?.contents?.map((item, index) => (
          <div key={index} className={styles.content}>
            <div className={styles.contentCount}>{item.id}</div>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouLearn;
