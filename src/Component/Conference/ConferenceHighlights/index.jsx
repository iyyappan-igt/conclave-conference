import React from "react";
import styles from "./styles.module.css";
import Title from "@/Common/Title";
const ConferenceHightlights = ({ data }) => {
  return (
    <section className={`${styles.container} container-fluid`}>
      <Title title={data?.title} />
      <div className={styles.aboutCards}>
        {data?.conferenceHighlightsList?.map((item, index) => (
          <div className={styles.cardContent}>
            <img src={item.img} className={styles.cardImage} alt="" />
            <div className={styles.overlay}></div>
            <p className={styles.description}>{item?.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConferenceHightlights;
