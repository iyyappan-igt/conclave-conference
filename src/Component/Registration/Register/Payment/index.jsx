import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";
import Button from "@/Common/Button";
import { useState } from "react";
import RegistrationCard from "@/Common/RegistrationCard";
import { conferenceRegistrationQuery } from "@/hooks/useUserQuery";
import SessionCard from "@/Common/SessionCard";
import Backward from "@/Common/Backward";
import { useRouter } from "next/router";
import { RazorpayOrderQuery } from "@/hooks/useRazorpayQuery";

const Payment = ({
  personalData,
  conferenceData,
  conferenceAuth,
  eventsAuth,
  handleNext,
}) => {
  const [error, setError] = useState("");
  const {
    mutate: conferenceRegisterMutate,
    isLoading: conferenceRegisterLoading,
  } = conferenceRegistrationQuery();

  const { mutate: razorpayOrderMutation } = RazorpayOrderQuery();

  const router = useRouter();

  const [agree, setagree] = useState(null);

  const handleMembershipChange = (event) => {
    setagree(event.target.checked);
  };

  const conferenceRegistrationAmount = conferenceAuth?.conference_amount
    ? Number(
        String(conferenceAuth.conference_amount).replace(/[^\d.-]/g, "")
      ) || 0
    : 0;

  const workShopsPrice =
    eventsAuth !== null
      ? eventsAuth.reduce((total, event) => {
          return event?.event_type === "workshop"
            ? total +
                (Number(
                  personalData?.current_membership == "Life"
                    ? event?.life_member_price
                    : event?.price
                ) ?? 0)
            : total;
        }, 0)
      : 0;

  const roundTablePrice =
    eventsAuth !== null
      ? eventsAuth.reduce((total, event) => {
          return event?.event_type === "roundtable"
            ? total +
                (Number(
                  personalData?.current_membership == "Life"
                    ? event?.life_member_price
                    : event?.price
                ) ?? 0)
            : total;
        }, 0)
      : 0;

  const totalWorkShopsSelected =
    eventsAuth !== null
      ? eventsAuth.reduce((total, event) => {
          return event?.event_type === "workshop" ? total + 1 : total;
        }, 0)
      : 0;

  const totalRoundTableSelected =
    eventsAuth !== null
      ? eventsAuth.reduce((total, event) => {
          return event?.event_type === "roundtable" ? total + 1 : total;
        }, 0)
      : 0;

  const totalPrice =
    conferenceAuth?.conference_amount_type == "standard"
      ? conferenceRegistrationAmount + workShopsPrice + roundTablePrice
      : conferenceRegistrationAmount;

  const handleSubmit = () => {
    if (!agree) {
      setError("Please agree to the Terms & Conditions to continue.");
      return;
    }
    console.log("submited");
    try {
      const sendata = {
        amount: 1,
      };

      razorpayOrderMutation(
        { values: sendata },
        {
          onSuccess: (data) => {
            const orderId = data?.data?.id;

            if (!orderId) {
              enqueueSnackbar("Failed to create Razorpay Order", {
                variant: "error",
              });
            } else {
              const options = {
                key: process.env.RAZORPAY_KEY_ID,
                amount: 1 * 100,
                currency: "INR",
                name: personalData?.name,
                order_id: orderId,
                description: "Conference Registration",
                handler: function (response) {
                  const razorpayDetails = {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                    captured: response.captured,
                  };

                  const payload = {
                    user_id: personalData?.id,
                    conference_id: conferenceData?.id,
                    title: personalData?.title,
                    name: personalData?.name,
                    country_code: personalData?.country_code,
                    mobile: personalData?.mobile,
                    email: personalData?.email,
                    obg_code: personalData?.obg_code,
                    clinic: personalData?.clinic_name,
                    medical_council_no: personalData?.medical_council_regno,
                    conference_amount_type:
                      conferenceAuth?.conference_amount_type,
                    conference_amount: conferenceAuth?.conference_amount,
                    razorpay_order_id: razorpayDetails?.razorpay_order_id,
                    razorpay_payment_id: razorpayDetails?.razorpay_payment_id,
                    razorpay_signature: razorpayDetails?.razorpay_signature,
                    payment_status: "paid",
                    capture: razorpayDetails?.captured,
                    membership: personalData?.current_membership,
                    conference_title: conferenceData?.title,
                    total_amount: totalPrice,
                    conference_events: eventsAuth?.map((event) => ({
                      event_id: event?.id,
                      event_type: event?.event_type,
                      event_title: event?.title,
                      event_amount:
                        personalData?.current_membership == "Life"
                          ? event?.life_member_price
                          : event?.price,
                      event_status: "confirmed",
                    })),
                  };

                  conferenceRegisterMutate(
                    { values: payload },
                    {
                      onSuccess: () => {
                        handleNext(1);
                      },
                    }
                  );
                },
                prefill: {
                  name: personalData?.name,
                  email: personalData?.email,
                  contact: personalData?.mobile,
                },
                theme: {
                  color: "#3399cc",
                },
              };

              const razor = new window.Razorpay(options);
              razor.open();
            }
          },
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setError("");
    }
  };

  return (
    <section className={styles.paymentsection}>
      <div className="position-relative text-center my-4">
        <div
          onClick={() =>
            handleNext(
              conferenceAuth?.conference_amount_type == "all-access" ? 3 : 5
            )
          }
        >
          <Backward />
        </div>
        <CommonTitle
          title={"Payment & Summary"}
          subtitle={
            "Review your registration details and complete your payment to secure your spot at Ophthall Conclave 2025."
          }
        />
      </div>

      <div className={styles.wrapper}>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.pdinfohead}`}
        >
          <h4>Personal Details</h4>
        </div>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Name</h4>
              <p>{`${personalData?.title ? personalData?.title : "Mr"} ${
                personalData?.name ? personalData?.name : "---"
              }`}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Mobile</h4>
              <p>{`${
                personalData?.country_code ? personalData?.country_code : "--"
              } ${personalData?.mobile ? personalData?.mobile : "---"}`}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Email</h4>
              <p>{personalData?.email ? personalData?.email : "---"}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>OBG Code</h4>
              <p>{personalData?.obg_code ? personalData?.obg_code : "----"}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Clinic / Organization Name</h4>
              <p>
                {personalData?.clinic_name ? personalData?.clinic_name : "---"}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Medical Council Reg No</h4>
              <p>
                {personalData?.medical_council_regno
                  ? personalData?.medical_council_regno
                  : "----"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.wrapper} my-5`}>
        <RegistrationCard
          isSelected={true}
          data={conferenceAuth?.selectedRegistration}
        />
      </div>

      {!eventsAuth || eventsAuth.length == 0 ? (
        ""
      ) : (
        <div className={`${styles.wrapper} my-5`}>
          <div
            className={`d-flex justify-content-between align-items-center ${styles.pdinfohead}`}
          >
            <h4>Selected Sessions</h4>
          </div>

          <div className={`my-4 ${styles.sectionlist}`}>
            {eventsAuth?.map((data, i) => (
              <div className="m-3">
                <SessionCard
                  id={data?.id}
                  type={data?.event_type}
                  non_member_amount={
                    personalData?.current_membership == "Life"
                      ? data?.price
                      : ""
                  }
                  amount={
                    personalData?.current_membership == "Life"
                      ? data?.life_member_price
                      : data?.price
                  }
                  title={data?.title}
                  overview={data?.description}
                  startdate={data?.start_date_time}
                  enddate={data?.end_date_time}
                  speaker={data?.coordinator_name}
                  speakerImage={data?.coordinator_image}
                  designation={data?.coordinator_designation}
                  status={data?.status}
                  isselectbtn={false}
                  isSelected={true}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={`${styles.wrapper}`}>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.pdinfohead}`}
        >
          <h4>Price BreakDown</h4>
        </div>

        <div className={`${styles.pricelist} mt-4`}>
          <div className="row">
            <div className="col-8 col-lg-10">
              <div className={styles.leftentry}>
                <h6>
                  {" "}
                  {`Conference (${conferenceAuth?.conference_amount_type
                    ?.split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")})`}
                </h6>
                {conferenceAuth?.conference_amount_type == "standard" && (
                  <>
                    <h6>{`Workshop (${totalWorkShopsSelected})`}</h6>
                    <h6>{`RoundTable (${totalRoundTableSelected})`}</h6>
                  </>
                )}
              </div>
            </div>
            <div className="col-4 col-lg-2">
              <div className={styles.rightentry}>
                <h6>₹{conferenceRegistrationAmount}</h6>
                {conferenceAuth?.conference_amount_type == "standard" && (
                  <>
                    <h6>₹{workShopsPrice}</h6>
                    <h6>₹{roundTablePrice}</h6>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.subtotallist} border-top mt-4 `}>
          <div className="row pt-4 ">
            <div className="col-8 col-lg-10">
              <div className={styles.leftentry}>
                <h3>Total</h3>
                <p>Inclusive of all taxes</p>
              </div>
            </div>
            <div className="col-4 col-lg-2">
              <div className={styles.rightentry}>
                <h3>₹{totalPrice}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapper} my-5`}>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.pdinfohead}`}
        >
          <h4>Payment Summary</h4>
        </div>

        <div className={`${styles.summary} my-4`}>
          <h6>• Instant confirmation via email & SMS</h6>
          <h6>• 100% secure payment processing</h6>

          <div className={styles.radiotbn}>
            <input
              type="Checkbox"
              id="yes"
              name="member"
              value="yes"
              onChange={handleMembershipChange}
            />
            <label for="yes" className="m-0">
              I agree to the Terms & Conditions and Privacy Policy*
            </label>
          </div>
          {error && !agree && <p className="text-danger small mt-2">{error}</p>}
          <div className={`${styles.inputgroup} mt-4`}>
            <Button
              handleTogglecontactForm={handleSubmit}
              disabled={conferenceRegisterLoading}
              title={
                conferenceRegisterLoading
                  ? "Processing..."
                  : `Proceed to secure payment - ₹${totalPrice}`
              }
              bgcolor={"#00A0E3"}
              colors={"#ffff"}
            />
            <p className="mt-3">
              By clicking "Proceed to Payment", you agree to our terms and
              conditions. Your payment information is secure and encrypted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
