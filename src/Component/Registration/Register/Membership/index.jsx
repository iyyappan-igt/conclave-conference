import { useState } from "react";
import styles from "./styles.module.css";
import CommonTitle from "@/Common/CommonTitle";
import Button from "@/Common/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { membershipVeroficationQuery } from "@/hooks/useUserQuery";

const Membership = ({ handleNext }) => {
  const [membership, setMembership] = useState(null);
  const { mutate: membershipVerify, isLoading: membershiploading } =
    membershipVeroficationQuery();
  const handleMembershipChange = (event) => {
    console.log(event.target.value);
    setMembership(event.target.value);
  };

  const Formik = useFormik({
    initialValues: {
      obg_code: "",
    },
    validationSchema: Yup.object().shape({
      obg_code: Yup.string().required("Enter OBG Code"),
    }),
    onSubmit: (values) => {
      membershipVerify({ value: values.obg_code });
    },
  });
  

  return (
    <section className={`${styles.membershipsection}`}>
      <CommonTitle
        title={"Membership Verification"}
        subtitle={
          "Confirm whether you’re an existing member. We’ll guide you to sign in or register accordingly."
        }
      />

      <div className={`${styles.formwrapper}`}>
        <h4>Are you an Ophthall Member?</h4>

        <div className={styles.radiotbn}>
          <input
            type="radio"
            id="yes"
            name="member"
            value="yes"
            onChange={handleMembershipChange}
          />
          <label for="yes">Yes, I am a member</label>
        </div>

        <div className={styles.radiotbn}>
          <input
            type="radio"
            id="no"
            name="member"
            value="no"
            onChange={handleMembershipChange}
          />
          <label for="no">No, I am not a member</label>
        </div>

        {membership === "yes" && (
          <form onSubmit={Formik.handleSubmit}>
            <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
              <label>OBG Code</label>
              <input
                type="text"
                className={`form-control `}
                placeholder="Enter OBG Code"
                {...Formik.getFieldProps("obg_code")}
              />
              {Formik.touched.obg_code && Formik.errors.obg_code ? (
                <small className="text-danger">{Formik.errors.obg_code}</small>
              ) : (
                ""
              )}
            </div>

            <div className={styles.inputgroup}>
              <Button
                title={membershiploading ? "Verify...." : "Verify"}
                bgcolor={"#000"}
                colors={"#ffff"}
                type={"submit"}
              />
            </div>
            <div className={styles.inputgroup} onClick={() => handleNext(2)}>
              <Button title={"Next"} bgcolor={"#00A0E3"} colors={"#ffff"} />
            </div>
          </form>
        )}
        {membership === "no" && (
          <>
            <div className={styles.memberinfo}>
              <p className="m-0">
                • Life Members receive discounted fees and exclusive benefits.
              </p>

              <p className="m-0">
                • Other Members (non-life) may register at the standard fee.
              </p>
              <p className="m-0">
                • Non-members must first become a member of Ophthall before
                proceeding with registration.
              </p>
            </div>
            <div className={styles.inputgroup}>
              <Button
                title={"Become A Member"}
                bgcolor={"#000"}
                colors={"#ffff"}
                link={"https://www.ophthall.in/register"}
                target={"blank"}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Membership;
