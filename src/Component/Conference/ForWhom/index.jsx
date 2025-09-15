import Title from "@/Common/Title";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ForWhom = ({ data }) => {
  return (
    <section className={styles.forwhomsec}>
      <div className="container">
        <Title title={"Who Can Attend"} />

        <div className={styles.forwhom}>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 ">
              <div className={styles.attendimg}>
                <img
                  src="assets/Conference/forWhom.jpg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div
              className={`${styles.swiperContent} col-lg-6 col-md-12 col-12`}
            >
              <div className={styles.forwhoslider}>
                <Swiper
                  direction="vertical"
                  modules={[Autoplay]}
                  loop={true}
                  allowTouchMove={false}
                  slidesPerView={4}
                  spaceBetween={0}
                  freeMode={true}
                  speed={2000}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  style={{ height: "450px" }}
                >
                  {data.map((data, i) => (
                    <SwiperSlide>
                      <div
                        className={`d-flex align-items-center gap-2 gap-md-3 my-3 ${styles.forwhomlist}`}
                      >
                        <div className={styles.fwicon}>
                          <img src={data?.icon} className="img-fluid" />
                        </div>
                        <h4>{data?.attend}</h4>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
