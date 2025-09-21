import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";
import ProgrammCard from "@/Common/ProgrammCard";
import Button from "@/Common/Button";
import { useState } from "react";
import RegistrationCard from "@/Common/RegistrationCard";
import { useAuth } from "@/redux/selectors/auth/authSelector";

<<<<<<< Updated upstream
const Payment = () => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  const {conference} = useAuth();
=======
  const { conference } = useAuth();
>>>>>>> Stashed changes
  console.log(conference);
=======
>>>>>>> Stashed changes
=======
const Payment = ({ personalData }) => {
  const { conference } = useAuth();
>>>>>>> Stashed changes
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
    console.log(event.target.value);
    setagree(event.target.value);
  };

  const workshoplist = ProgrammList.filter((data) => data.type == "Workshop");
  const roundtablelist = ProgrammList.filter(
    (data) => data.type == "Round Table"
  );

  const totalWorkshop = workshoplist.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const totalRoundTable = roundtablelist.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <section className={styles.paymentsection}>
      <CommonTitle
        title={"Payment & Summary"}
        subtitle={
          "Review your registration details and complete your payment to secure your spot at Ophthall Conclave 2025."
        }
      />

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
      <div className={`${styles.wrapper} my-5`}>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.pdinfohead}`}
        >
          <h4>Selected Sessions</h4>
        </div>

        <div className={`mt-5 ${styles.sectionlist}`}>
          {ProgrammList?.map((data, i) => (
            <div className="m-3">
              <ProgrammCard
                type={data?.type}
                amount={data?.amount}
                title={data?.title}
                speaker={data?.speaker}
                date={`${data?.date} - ${data?.time}`}
              />
            </div>
          ))}
        </div>
      </div>

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
                <h6>{`Workshop (${workshoplist?.length})`}</h6>
                <h6>{`RoundTable (${roundtablelist?.length})`}</h6>
              </div>
            </div>
            <div className="col-lg-2">
              <div className={styles.rightentry}>
                <h6>4000</h6>
                <h6>{`${totalWorkshop}`}</h6>
                <h6>{`${totalRoundTable}`}</h6>
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
                <h3>18,000</h3>
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

          <div className={`${styles.inputgroup} mt-4`}>
            <Button
              title={"Proceed to secure payment - 18000"}
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
