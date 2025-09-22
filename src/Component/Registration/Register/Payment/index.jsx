import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";
import ProgrammCard from "@/Common/ProgrammCard";
import Button from "@/Common/Button";
import { useState } from "react";
import RegistrationCard from "@/Common/RegistrationCard";
import { conferenceRegistrationQuery } from "@/hooks/useUserQuery";
import { DynamicIcon } from "lucide-react/dynamic";
import { useAuth } from "@/redux/selectors/auth/authSelector";

const Payment = ({ personalData, conference, events, handleNext }) => {
  const [error, setError] = useState("");
  const { mutate: conferenceRegisterMutate, isLoading: conferenceRegisterLoading } = conferenceRegistrationQuery();
  const ProgrammList = [
    {
      id: 1,
      type: "Workshop",
      title: "Advanced Cataract Surgery Techniques",
      speaker: "Dr. Priya Sharma",
      date: "2024-04-23",
      time: "10.00 am - 1.00 pm",
      amount: 2000,
    },
    {
      id: 2,
      type: "Workshop",
      title: "Advanced Cataract Surgery Techniques",
      speaker: "Dr. Priya Sharma",
      date: "2024-04-23",
      time: "10.00 am - 1.00 pm",
      amount: 2000,
    },
    {
      id: 3,
      type: "Round Table",
      title: "Advanced Cataract Surgery Techniques",
      speaker: "Dr. Priya Sharma",
      date: "2024-04-23",
      time: "10.00 am - 1.00 pm",
      amount: 2000,
    },
    {
      id: 4,
      type: "Round Table",
      title: "Advanced Cataract Surgery Techniques",
      speaker: "Dr. Priya Sharma",
      date: "2024-04-23",
      time: "10.00 am - 1.00 pm",
      amount: 2000,
    },
    {
      id: 5,
      type: "Workshop",
      title: "Advanced Cataract Surgery Techniques",
      speaker: "Dr. Priya Sharma",
      date: "2024-04-23",
      time: "10.00 am - 1.00 pm",
      amount: 2000,
    },

    {
      id: 6,
      type: "Workshop",
      title: "Advanced Cataract Surgery Techniques",
      speaker: "Dr. Priya Sharma",
      date: "2024-04-23",
      time: "10.00 am - 1.00 pm",
      amount: 2000,
    },

    {
      id: 7,
      type: "Workshop",
      title: "Advanced Cataract Surgery Techniques",
      speaker: "Dr. Priya Sharma",
      date: "2024-04-23",
      time: "10.00 am - 1.00 pm",
      amount: 2000,
    },
  ];

  const [agree, setagree] = useState(null);

  const handleMembershipChange = (event) => {
    setagree(event.target.checked);
  };

  const eventsArray = events ? Object.values(events) : [];
  const conferenceRegistrationAmount = conference?.conference_amount
    ? Number(String(conference.conference_amount).replace(/[^\d.-]/g, "")) || 0
    : 0;

  const workShopsPrice = eventsArray.reduce((total, event) => {
    return event?.event_type === "workshop"
      ? total +
      (Number(
        personalData?.current_membership == "Life"
          ? event?.life_member_price
          : event?.price
      ) ?? 0)
      : total;
  }, 0);

  const roundTablePrice = eventsArray.reduce((total, event) => {
    return event?.event_type === "roundtable"
      ? total +
      (Number(
        personalData?.current_membership == "Life"
          ? event?.life_member_price
          : event?.price
      ) ?? 0)
      : total;
  }, 0);

  const totalWorkShopsSelected = eventsArray.reduce((total, event) => {
    return event?.event_type === "workshop" ? total + 1 : total;
  }, 0);

  const totalRoundTableSelected = eventsArray.reduce((total, event) => {
    return event?.event_type === "roundtable" ? total + 1 : total;
  }, 0);

  const totalPrice =
    conferenceRegistrationAmount + workShopsPrice + roundTablePrice;

  const EventArrays = Object.values(events);

  console.log("dvd", EventArrays);

  const handleSubmit = () => {
    if (!agree) {
      setError("Please agree to the Terms & Conditions to continue.");
      return;
    }
    console.log("submited")
    try {
      const payload = {
        user_id: personalData?.id,
        conference_id: "1",
        title: personalData?.title,
        name: personalData?.name,
        country_code: personalData?.country_code,
        mobile: personalData?.mobile,
        email: personalData?.email,
        obg_code: personalData?.obg_code,
        clinic: personalData?.clinic_name,
        medical_council_no: personalData?.medical_council_regno,
        conference_amount_type: conference?.conference_amount_type,
        conference_amount: conference?.conference_amount,
        conference_events: EventArrays?.map((event) => (
          {
            event_id: event?.event_id,
            event_type: event?.event_type,
            event_title: event?.event_title,
            event_amount: event?.event_amount,
            event_status: event?.event_status
          }
        ))
      }
      conferenceRegisterMutate({
        values: payload
      }, {
        onSuccess: () => {

        }
      })
    } catch (error) {
      console.log(error);
    } finally {
      setError("");
    }
  }
  return (
    <section className={styles.paymentsection}>
      <div className="position-relative text-center my-4">
        {/* Back button */}
        <button
          type="button"
          className={styles.backButton}
          onClick={()=>handleNext(5)}
        >
          <DynamicIcon name="arrow-left" size={42} />
        </button>

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
              <p>{`${personalData?.title} ${personalData?.name}`}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Mobile</h4>
              <p>{`${personalData?.country_code} ${personalData?.mobile}`}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Email</h4>
              <p>{personalData?.email}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>OBG Code</h4>
              <p>{personalData?.obg_code}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Clinic / Organization Name</h4>
              <p>{personalData?.clinic_name}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.pdinfo}>
              <h4>Medical Council Reg No</h4>
              <p>{personalData?.medical_council_regno}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.wrapper} my-5`}>
        <RegistrationCard
          isSelected={true}
          data={conference?.selectedRegistration}
        />
      </div>
     {events.length>0 && <div className={`${styles.wrapper} my-5`}>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.pdinfohead}`}
        >
          <h4>Selected Sessions</h4>
        </div>

        <div className={`mt-5 ${styles.sectionlist}`}>
          {EventArrays?.map((data, i) => (
            <div className="m-3">
              <ProgrammCard
                type={data?.event_type}
                amount={
                  personalData?.current_membership == "Life"
                    ? data?.life_member_price
                    : data?.price
                }
                title={data?.title}
                speaker={data?.coordinator_name}
                date={data?.startdatetime}
              />
            </div>
          ))}
        </div>
      </div>}

      <div className={`${styles.wrapper}`}>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.pdinfohead}`}
        >
          <h4>Price BreakDown</h4>
        </div>

        <div className={`${styles.pricelist} mt-4`}>
          <div className="row">
            <div className="col-lg-10">
              <div className={styles.leftentry}>
                <h6>All Conclave Pass</h6>
                {conference?.conference_amount_type == "standard" && (
                  <>
                    <h6>{`Workshop (${totalWorkShopsSelected})`}</h6>
                    <h6>{`RoundTable (${totalRoundTableSelected})`}</h6>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-2">
              <div className={styles.rightentry}>
                <h6>₹{conferenceRegistrationAmount}</h6>
                {conference?.conference_amount_type == "standard" && (
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
            <div className="col-lg-10">
              <div className={styles.leftentry}>
                <h3>Total</h3>
                <p>Inclusive of all taxes</p>
              </div>
            </div>
            <div className="col-lg-2">
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
          {(error && !agree) && <p className="text-danger small mt-2">{error}</p>}
          <div className={`${styles.inputgroup} mt-4`}>
            <Button
              handleTogglecontactForm={handleSubmit}
              disabled={conferenceRegisterLoading}
              title={conferenceRegisterLoading ? "Processing..." : `Proceed to secure payment - ₹${totalPrice}`}
              bgcolor={"#00A0E3"}
              colors={"#ffff"}
            />
            <p className="mt-2">
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