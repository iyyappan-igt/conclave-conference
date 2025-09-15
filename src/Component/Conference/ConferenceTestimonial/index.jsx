import Title from "@/Common/Title";
import styles from "./styles.module.css";
import Slider from "react-slick";

const ConferenceTestimonal = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    loop: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container">
        <div className={styles.testimonal}>
          <Title title={"What Our Attendees Say"} />

          <div className="my-5 py-2">
            <Slider className={styles.slick} {...settings}>
              {data?.map((data, i) => (
                <div className={styles.patreonbox} key={i}>
                  <p>{data?.review}</p>

                  <div className="d-flex justify-content-between pt-3">
                    <div>
                      <div className="d-flex gap-md-4 gap-3 align-items-center justify-content-start">
                        <div className={styles.ppimg}>
                          <img src={data?.profile} className="img-fluid" />
                        </div>
                        <div className={styles.ppcontent}>
                          <h3>{data?.name}</h3>
                          <h5>{data?.designation}</h5>
                        </div>
                      </div>
                    </div>

                    <div className={styles.colon}>
                      <img
                        src="assets\BuyingGroup\colon.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTestimonal;
