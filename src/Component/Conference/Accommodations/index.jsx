import React from 'react'
import styles from "./styles.module.css"


const Accommodations = ({ data }) => {
    return (
        <section className={`${styles.container} container`}>
            <h4 className={styles.title}>{data?.title}</h4>
            <div className={styles.cardContainer}>
                {data?.hotels?.map((item, index) => (
                    <div className={styles.card}>
                        <div className={styles.imageContainer} style={{ backgroundImage: `url(${item?.image})` }}>
                            <div className={styles.imageContent}>
                                <p className='mb-0 fw-bold'>{item?.distance}</p>
                                <div className='d-flex gap-2 align-items-center'><img width={"45px"} height={"45px"} src={item?.starImage} alt="" /><p className={styles.rating}>{item?.rating}</p></div>
                            </div>
                        </div>
                        <h5 className={styles.hotelName}>{item?.name}</h5>
                        <div className={styles.tagContainer}>
                            {item?.amenities?.map((item, index) => (
                                <div key={index} className={styles.tag}>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Accommodations

