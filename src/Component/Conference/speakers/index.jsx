"use client";
import Title from "@/Common/Title";
import styles from "./styles.module.css";

const Speakers = ({ data }) => {
  return (
    <section className={styles.speakersec}>
      <div className="container-fluid">
        <Title title={"Our Speakers"} />

        <div className={styles.speakerList}>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {data?.map((data, i) => (
               <div
                  className={`d-flex align-items-center gap-3 ${styles.speakerCard}`}
                >
                  <div className={styles.speakerimg}>
                    <img
                      src={data?.img}
                      className={`${styles.image} img-fluid`}
                    />
                  </div>

                  <div className={styles.speakerDetail}>
                    <h4>{data?.name}</h4>
                    <h6>{data?.designation}</h6>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
