import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";

const Payment = () => {
  return (
    <section className={styles.paymentsection}>
      <CommonTitle
        title={"Payment & Summary"}
        subtitle={
          "Review your registration details and complete your payment to secure your spot at Ophthall Conclave 2025."
        }
      />

      <div className={styles.personalwrapper}>
        <div className={`d-flex justify-content-between align-items-center ${styles.pdinfohead}`}>
          <h4>Personal Details</h4>
          <h4>Edit</h4>
        </div>

        <div className="row mt-4" >
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Name</h4>
              <p>Dr. RajeshKumar</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Mobile</h4>
              <p>+91 8939698904</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Email</h4>
              <p>rajeskumar@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>OBG Code</h4>
              <p>OBG23433</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Clinic / Organization Name</h4>
              <p>Clinic Name</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Medical Council Reg No</h4>
              <p>88383839300</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
