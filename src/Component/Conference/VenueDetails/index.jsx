import React from "react";
import styles from "./styles.module.css";
import Title from "@/Common/Title";

const VenueDetails = ({ data }) => {
  return (
    <section className={`${styles.mainContainer} container-fluid`}>
      <Title title={data?.title} />
      <div className={`${styles.container}`}>
        <img
          className={styles.bgImage}
          src="/assets/Conference/cidco.jpg"
          alt=""
        />
        <div className={styles.overlay}></div>
        <div className={`${styles.contentContainer} row`}>
          <div
            className="col-md-12 col-lg-6 d-flex justify-content-center justify-content-md-start
"
          >
            <div className={styles.ctdetail}>
              <h3>{data?.venue}</h3>
              <p>
                <span className="" style={{ marginRight: "8px" }}>
                  <img src={data?.icon} width="23px" height="22px" alt="" />
                </span>
                {data?.location}
              </p>
              <p className={styles.description}>{data?.description}</p>
              <div className={styles.tagContainer}>
                {data?.tagList?.map((item, index) => (
                  <div className={styles.tag}>
                    <img src={item?.icon} className={styles.image} alt="" />
                    <p>{item?.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`${styles.mapContainer} col-md-12 col-lg-6 mt-4 mt-md-0`}
          >
            <div className={styles.ctmap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.68197781886252!2d72.9894255657695!3d19.06762193649559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1854ae98517%3A0x68f18a54075c03c1!2sCIDCO%20Exhibition%20Centre!5e0!3m2!1sen!2sin!4v1755791952907!5m2!1sen!2sin"
                className={styles.iframeTag}
                style={{ border: "0", borderRadius: "20px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueDetails;
