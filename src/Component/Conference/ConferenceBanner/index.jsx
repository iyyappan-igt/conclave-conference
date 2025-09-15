import React, { useEffect, useRef } from 'react'
import styles from "./styles.module.css"
const ConferenceBanner = ({ data }) => {

    return (
        <section className={`${styles.container} container-fluid`}>
            <video className={styles.videoBackground} autoPlay
                muted
                loop
                playsInline>
                <source src="https://res.cloudinary.com/ophthall/video/upload/v1756184541/Ophthall_Conference_wlojb7.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
            <div className={styles.bannerContent}>
                <div className={styles.content}>
                    <h4 className={styles.title}>{data?.title}</h4>
                    <p className={styles.description1}>{data?.description}</p>
                    <a href='/register' ><button style={{ backgroundColor: "#00a0e3"}} className={`btn fw-bold  text-white ${styles.button}`}>{data?.buttonText}</button></a>
                </div>
            </div>
            {/* <div className={styles.bannerImage}>
                <img src={data?.image} alt="" />
            </div> */}
        </section>
    )
}

export default ConferenceBanner

