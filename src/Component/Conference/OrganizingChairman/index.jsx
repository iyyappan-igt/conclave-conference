import React from 'react'
import styles from "./styles.module.css"

const OrganizingChairman = ({ data }) => {

    return (
        <section className={`${styles.container} container-fluid`}>
            <h4 className={styles.title}>{data?.title}</h4>
            <div className={styles.containerContent}>
                <div className={styles.welcomeCards}>
                    <div className={styles.cardImageContainer}>
                        <div className={styles.overlay}></div>
                        <img src="assets/Conference/organisingChairman.jpg" className={styles.cardImage} alt="" />
                    </div>
                    <div className={styles.cardContent}>
                        <img src="assets/Conference/quotationFilled.png" className={styles.quotationImage} alt="" />
                        <p>{data?.cardDescription1}</p>
                        <p>{data?.cardDescription2}</p>
                        <div className={styles.profile}>
                            <div>
                                <h5 className={styles.name}>{data?.profile?.profileName}</h5>
                                <p className={styles.destination}>{data?.profile?.destination}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.keynote}>
                    <h4>{data?.keyNotes.title}</h4>
                    <div>
                        {data?.keyNotes?.keyNotesList?.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <img src="assets/SkyRocket/success.png" className={styles.contentimg} alt="" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrganizingChairman

