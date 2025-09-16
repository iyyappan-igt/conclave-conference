import { useState } from "react";
import styles from "./styles.module.css";
import CommonTitle from "@/Common/CommonTitle";
import Button from "@/Common/Button";

const Membership = () => {
  const [membership, setMembership] = useState(null);

  const handleMembershipChange = (event) => {
    console.log(event.target.value);
    setMembership(event.target.value);
  };

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
          <div>
            <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
              <label>Email</label>
              <input
                type="text"
                className={`form-control `}
                placeholder="Email"
              />
            </div>

            <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
              <label>Mobile Number / Password</label>
              <input
                type="text"
                className={`form-control `}
                placeholder="Mobile Number / Password"
              />
            </div>
            <div className={`${styles.inputgroup}  mb-md-2 mb-2`}>
              <label>OBG Code</label>
              <input
                type="text"
                className={`form-control `}
                placeholder="OBG Code"
              />
            </div>
            <div className={styles.inputgroup}>
              <Button title={"Verify"} bgcolor={"#000"} colors={"#ffff"} />
            </div>
          </div>
        )}
        {membership === "no" && (
          <>
            <div className={styles.memberinfo}>
              <p className="m-0">
                <span> Non-member registration:</span> You'll be charged the
                standard registration fee. Consider joining Ophthall for member
                benefits and discounted conference rates.
              </p>
            </div>
            <div className={styles.inputgroup}>
              <Button
                title={"Become A Member"}
                bgcolor={"#000"}
                colors={"#ffff"}
              />
            </div>
          </>
        )}

        <div className={styles.inputgroup}>
          <Button title={"Next"} bgcolor={"#00A0E3"} colors={"#ffff"} />
        </div>
      </div>
    </section>
  );
};

export default Membership;
