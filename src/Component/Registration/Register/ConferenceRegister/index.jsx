import Button from "@/Common/Button";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import RegistrationCard from "@/Common/RegistrationCard";
import { useState } from "react";
import CommonTitle from "@/Common/CommonTitle";
import { useAuth } from "@/redux/selectors/auth/authSelector";

const ConferenceRegister = ({handleNext}) => {
  const {conferenceDetails} = useAuth();
  console.log(conferenceDetails)
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const conferenceRegistrationData = [
    {
      id: 1,
      icon: "/assets/free.png",
      title: "Standard Conference Registration",
      description1: "Access to main conference sessions",
      description2:
        "Join us for the main conference sessions featuring keynote speakers, panel discussions, and networking opportunities.",
      newPrice: "₹3999",
      oldPrice: "₹4999",
      discount: "Save ₹1,000 with this option",
      includedTitle: "What's included:",
      includedList: [
        "All main conference sessions (Jan 9-12)",
        "Panel discussions and Q&A sessions",
        "Conference materials and welcome kit",
        "Access to conference app",
        "Keynote presentations by industry leaders",
        "Networking breaks and lunch",
        "Certificate of attendance",
      ],
      recommended: false,
    },
    {
      id: 2,
      icon: "/assets/life.png",
      title: "All-Access Conclave Pass",
      description1: "Complete conference experience",
      description2:
        "Get unlimited access to all conference sessions, workshops, round tables, and exclusive networking events.",
      newPrice: "₹14999",
      oldPrice: "₹18999",
      discount: "Save ₹4,000 with this option",
      includedTitle: "What's included:",
      includedList: [
        "All Standard Conference benefits",
        "All round table discussions",
        "Premium conference materials",
        "Access to speaker meet & greet",
        "Digital recordings of select sessions",
        "Unlimited workshop access (worth ₹15,000+)",
        "Exclusive VIP networking events",
        "Priority seating at all sessions",
        "Complimentary conference merchandise",
      ],
      recommended: true,
    },
  ];

  const handleSelectRegistration = (id) => {
    setSelectedRegistration(id);
  };

  return (
    <section className={styles.conferencesec}>
      <div className="container mt-3">
        <CommonTitle
          title={"Conference Registration"}
          subtitle={"Select your conference access level"}
        />

        <div className={styles.registerContainer}>
          <div
            className={`${styles.lifeMember} d-flex align-items-start justify-content-start gap-3`}
          >
            <div className={styles.iconlife}>
              <DynamicIcon name="crown" color="#fff" />
            </div>
            <div className={styles.lifeMemberContent}>
              <h6>Life Member Pricing</h6>
              <p>✓ Enjoying member discounts on all options</p>
            </div>
          </div>
          <div
            className={`${styles.cardContainer} my-3 w-100 d-flex flex-column align-items-start justify-content-start gap-5`}
          >
            {conferenceRegistrationData.map((item) => (
              <RegistrationCard
                data={item}
                isSelected={selectedRegistration == item?.id}
                onClick={() => handleSelectRegistration(item?.id)}
              />
            ))}
          </div>
          <div className={styles.ExceptionValue}>
            <div
              className={`${styles.cardHeader} d-flex align-items-start justify-content-start gap-3`}
            >
              <div className={styles.exceptionIcon}>
                <DynamicIcon name="calculator" color="green" size={28} />
              </div>
              <div className={styles.lifeMemberContent}>
                <h4>Exceptional Value</h4>
                <p>
                  The All-Access Conclave Pass includes workshops and round
                  tables that would cost over ₹20,000 if booked separately.
                </p>
              </div>
            </div>
            <div
              className={`${styles.valueNote} d-flex flex-column flex-md-row align-items-center align-items-md-start`}
            >
              <div className={`${styles.exceptionContent} text-center`}>
                <h6>₹15,000+</h6>
                <p>Workshop Value</p>
              </div>
              <div className={`${styles.exceptionContent} text-center`}>
                <h6>₹8,000+</h6>
                <p>Round Table Value</p>
              </div>
              <div className={`${styles.exceptionContent} text-center`}>
                <h6>₹3,000+</h6>
                <p>VIP Events Value</p>
              </div>
            </div>
          </div>
          <div className={styles.conferenceOverview}>
            <div
              className={`${styles.cardHeader} d-flex align-items-start justify-content-start gap-3`}
            >
              <div className={styles.lifeMemberContent}>
                <h4>Conference Schedule Overview</h4>
              </div>
            </div>
            <div
              className={`${styles.overviewContainer} d-flex flex-column flex-md-row align-items-center align-items-md-start`}
            >
              <div className={`${styles.overviewContent} text-center`}>
                <h6>Jan 9</h6>
                <p>Opening & Keynotes</p>
              </div>
              <div className={`${styles.overviewContent} text-center`}>
                <h6>Jan 10</h6>
                <p>Workshops & Sessions</p>
              </div>
              <div className={`${styles.overviewContent} text-center`}>
                <h6>Jan 11</h6>
                <p>Round Tables & Panels</p>
              </div>
              <div className={`${styles.overviewContent} text-center`}>
                <h6>Jan 12</h6>
                <p>Closing & Networking</p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.buttonGroup} d-flex my-3 justify-content-end gap-3`}
          >
            <div onClick={()=>{handleNext(2)}}>
              <Button title="Back" bgcolor={"#000"} colors={"#fff"} />
            </div>
            <div onClick={()=>{handleNext(6)}}>
              <Button
                title="Complete Registration"
                iconname={"arrow-right"}
                bgcolor={"#00a0e3"}
                colors={"#fff"}
              />
            </div>
            <div onClick={()=>{handleNext(4)}}>
              <Button
                title="Next"
                iconname={"arrow-right"}
                bgcolor={"#00a0e3"}
                colors={"#fff"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceRegister;
