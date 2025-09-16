import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";
import Button from "@/Common/Button";

const PersonalDetail = () => {
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
            />
            <select
              className={`form-select position-absolute ${styles.formselect}`}
              aria-label="Default select example"
            >
              <option value="Dr">Dr</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
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
            />
            <select
              className={`form-select position-absolute ${styles.formselect}`}
              aria-label="Default select example"
            >
              <option value="+91">+ 91</option>
              <option value="+1">+ 1</option>
              <option value="+01">+ 01</option>
            </select>
          </div>

          <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
            <label>Email</label>
            <input type="text" class="form-control" placeholder="Email" />
          </div>

          <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
            <label>OBG Code</label>
            <input type="text" class="form-control" placeholder="OBG Code" />
          </div>

          <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
            <label>Clinic / Organization Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Council name"
            />
          </div>

          <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
            <label>Medical Council Reg No</label>
            <input
              type="text"
              class="form-control"
              placeholder="Council No"
            />
          </div>

          <div className={styles.inputgroup}>
            <Button title={"Next"} bgcolor={"#00A0E3"} colors={"#ffff"} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default PersonalDetail;
