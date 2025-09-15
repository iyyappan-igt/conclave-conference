import React from 'react';
import Slider from "react-slick";

import styles from "./styles.module.css";

const AssociatePartner = ({ data }) => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: false,
        loop: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000, 
        autoplaySpeed:0, 
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 4,
                },
            },

            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    initialSlide: 5,
                },
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    initialSlide: 6,
                },
            },
        ],
    };

    return (
        <section className={`${styles.container} container-fluid`}>
            <div className={styles.patreonslider}>
                <Slider {...settings} className="w-100">
                    {data?.participantList?.map((item, index) => (
                        <div className={styles.patreonsimg} key={index}>
                            <img src={item?.image} className="img-fluid" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default AssociatePartner;