import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { footer } from "@/Constant/Footer/footer";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className="container mb-5">
        <div className="top-footer pt-5 pb-0">
          <div className="row  px-3 px-md-0">
            <div className="row ">
              <div className="col-xl-4 col-lg-5 col-md-6 col-12 d-flex justify-content-md-center justify-content-start ">
                <div className={`${styles.footerlogo}`}>
                  <Image
                    width={175}
                    height={55}
                    src={"/assets/Footer/ophthall-logo.jpg"}
                    style={{ marginBottom: "10px" }}
                    onClick={() => {
                      router.replace("/");
                    }}
                  />
                  <p>
                    Empowering ophthalmic practices through expert consulting,
                    management tools, and educational programs. With over 25
                    years of experience, 40+ industry specialists, and more than
                    6,000 beneficiaries across India and beyond.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-7 col-md-6 col-12 d-flex justify-content-md-center justify-content-start mt-4 mt-md-0 ">
                <div className={styles.footerpage}>
                  <h5 className="fw-bold">Our Services</h5>
                  {footer?.top_footer?.services?.map((data, i) => (
                    <a
                      key={i}
                      href={data?.link}
                      target={
                        data?.link?.startsWith("https://")
                          ? "_blank"
                          : undefined
                      }
                      style={{ letterSpacing: "0.5px" }}
                    >
                      {data?.service}
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-12 d-flex  justify-content-xl-center justify-content-start mb-3 mb-md-0 mt-xl-0">
                <div className={styles.footerpage}>
                  <h5 className="fw-bold">Quick Links</h5>
                  {footer?.top_footer?.page?.map((data, i) => (
                    <a
                      href={data?.link}
                      key={i}
                      style={{ letterSpacing: "0.5px" }}
                    >
                      {data?.pagename}
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-12 d-flex justify-content-xl-center justify-content-start mb-3  mb-md-0 mt-xl-0">
                <div className={styles.footersocialpage}>
                  <h5 className="fw-bold">Social Pages</h5>
                  {footer?.top_footer?.socialPage?.map((data) => (
                    <a
                      href={data?.link}
                      target="_blank"
                      style={{ textDecoration: "none", letterSpacing: "0.5px" }}
                      className="text-light"
                    >
                      <div className="d-flex gap-4">
                        <Image
                          src={data?.icon}
                          width={15}
                          height={15}
                          objectFit="cover"
                        />
                        <h6>{data?.pagename}</h6>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-5 pe-5 d-flex justify-content-between align-items-center flex-wrap border-top pt-4 pb-3 text-center">
        <p style={{ color: "#dfdada", fontSize: "14px", marginBottom: 0 }}>
          {footer?.bottom_footer?.rights}
        </p>
        <div className="mt-md-0 mt-3 d-flex align-items-center justify-content-md-start justify-content-center flex-wrap gap-md-4 gap-2 text-center">
          {footer?.bottom_footer?.policies?.map((i) => (
            <a
              href={i?.link}
              style={{
                textDecoration: "none",
                color: "#dfdada",
                fontSize: "14px",
                letterSpacing: "0.6px",
              }}
              className="text-light"
            >
              {i?.pagename}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
