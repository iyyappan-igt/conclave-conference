import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";
import Button from "@/Common/Button";

const PersonalDetail = ({ handleNext, personalData }) => {
  return (
    <section className={`${styles.personaldetailsection}`}>
      <CommonTitle
        title={"Personal Details"}
        subtitle={
          "Please share your basic information. This helps us register you smoothly."
        }
      />
      <div className={styles.formwrapper}>
        <form>
          <div className={`${styles.inputgroup} mb-2 position-relative`}>
            <label>Name</label>
            <input
              type="text"
              className={`${styles.inputarea} form-control `}
              placeholder="Name"
              value={personalData?.name}
              readOnly
            />
            <select
              className={`form-select position-absolute ${styles.formselect}`}
              aria-label="Default select example"
            >
              <option value={personalData?.title}>{personalData?.title}</option>
            </select>
          </div>

          <div
            className={`${styles.inputgroup}  mb-md-2 mb-2 position-relative`}
          >
            <label>Mobile</label>
            <input
              type="text"
              className={`${styles.inputarea} form-control `}
              placeholder="Mobile"
              value={personalData?.mobile}
              readOnly
            />
            <select
              className={`form-select position-absolute ${styles.formselect}`}
              aria-label="Default select example"
            >
              <option value={personalData?.country_code}>
                {personalData?.country_code}
              </option>
            </select>
          </div>

          <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              value={personalData?.email}
              readOnly
            />
          </div>

          <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
            <label>OBG Code</label>
            <input
              type="text"
              class="form-control"
              placeholder="OBG Code"
              value={personalData?.obg_code}
              readOnly
            />
          </div>

          <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
            <label>Clinic / Organization Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Council name"
              value={personalData?.clinic_name}
              readOnly
            />
          </div>

          <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
            <label>Medical Council Reg No</label>
            <input
              type="text"
              class="form-control"
              placeholder="Council No"
              value={personalData?.medical_council_regno}
              readOnly
            />
          </div>

          <div
            onClick={() => {
              handleNext(3);
            }}
          >
            <Button title={"Next"} bgcolor={"#00A0E3"} colors={"#ffff"} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default PersonalDetail;
