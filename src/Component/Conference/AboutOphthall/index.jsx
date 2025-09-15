"use client";
import React from 'react'
import styles from "./styles.module.css"

const AboutOphthall = ({ data }) => {
    return (
        <section className={`${styles.container} container-fluid`}>
            <div className={styles.aboutContent}>
                <h4 className={styles.title}>{data?.title}</h4>
                <div className={styles.contentContainer}>
                    <p className={styles.content}>{data?.description1}</p>
                    <p className={styles.content}>{data?.description2}</p>
                    <p className={styles.content}>{data?.description3}</p>
                </div>
            </div>
            <div className={styles.aboutCards}>
                {data?.cardList?.map((item) => (
                    <div className={styles.cardContent}>
                        <img src={item.image} className={styles.cardImage} alt="" />
                        <div className={styles.overlay}></div>
                        <p className={styles.description}>{item?.description}</p>
                    </div>
                ))
                }
            </div>
        </section>
    )
}

export default AboutOphthall

