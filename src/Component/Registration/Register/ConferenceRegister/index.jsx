import Button from "@/Common/Button";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import RegistrationCard from "@/Common/RegistrationCard";
import { useEffect, useState } from "react";
import CommonTitle from "@/Common/CommonTitle";
import { useAuth } from "@/redux/selectors/auth/authSelector";
import { useDispatch } from "react-redux";
import { setAuthData } from "@/redux/slices/auth/authSlice";

const ConferenceRegister = ({ handleNext, conferenceData }) => {
  const { userDetails, conference } = useAuth();
  const dispatch = useDispatch();
  const initialRegistrationType = conference?.conference_amount_type == "standard" ? 1 : conference?.conference_amount_type == "all-access" ? 2 : 1;
  const [selectedRegistration, setSelectedRegistration] = useState(initialRegistrationType);
  const conferenceRegistrationData = [
    {
      id: 1,
      icon: "/assets/free.png",
      title: "Standard Conference Registration",
      description1: "Access to main conference sessions",
      description2:
        "Join us for the main conference sessions featuring keynote speakers, panel discussions, and networking opportunities.",
      newPrice: `₹${userDetails?.current_membership === "Life"
        ? conferenceData?.standard_life_price ?? 0
        : conferenceData?.standard_price ?? 0}`,
      oldPrice: userDetails?.current_membership === "Life"
        ? `₹${conferenceData?.standard_price ?? 0}`
        : "",
      discount: `Save ₹${(conferenceData?.standard_price ?? 0) - (conferenceData?.standard_life_price ?? 0)} with this option`,
      includedTitle: "What's included:",
      includedList: (userDetails?.current_membership === "Life"
        ? conferenceData?.standard_life_price_desc
        : conferenceData?.standard_price_desc
      )?.replace(/\u200B/g, '') // Remove zero-width spaces
        .split(/\r\n|\r|\n/) // Split on any line break
        .map(item => item.trim()) // Trim whitespace
        .filter(Boolean) ?? [], // Remove empty strings
      recommended: false,
    },
    {
      id: 2,
      icon: "/assets/life.png",
      title: "All-Access Conclave Pass",
      description1: "Complete conference experience",
      description2:
        "Get unlimited access to all conference sessions, workshops, round tables, and exclusive networking events.",
      newPrice: `₹${userDetails?.current_membership === "Life"
        ? conferenceData?.all_access_life_price ?? 0
        : conferenceData?.all_access_price ?? 0}`,
      oldPrice: userDetails?.current_membership === "Life"
        ? `₹${conferenceData?.all_access_price ?? 0}`
        : "",
      discount: `Save ₹${(conferenceData?.all_access_price ?? 0) - (conferenceData?.all_access_life_price ?? 0)} with this option`,
      includedTitle: "What's included:",
      includedList: (userDetails?.current_membership === "Life"
        ? conferenceData?.all_access_life_price_desc
        : conferenceData?.all_access_price_desc
      )?.replace(/\u200B/g, '') // Remove zero-width spaces
        .split(/\r\n|\r|\n/) // Split on any line break
        .map(item => item.trim()) // Trim whitespace
        .filter(Boolean) ?? [],  // Remove empty strings
      recommended: true,
    },
  ];

  console.log(conferenceRegistrationData)
  const handleSelectRegistration = (id, item) => {
    console.log(item)
    const selectData = conferenceRegistrationData?.find((item) => (item?.id == id));
    dispatch(setAuthData({ conference: { conference_amount_type: id == 1 ? "standard" : "all-access", conference_amount: selectData?.newPrice, selectedRegistration: item ?? {} } }))
    setSelectedRegistration(id);
  };

  useEffect(() => {
    if (!conference?.conference_amount_type) {
      const defaultSelection = {
        id: 1,
        conference_amount_type: "standard",
        conference_amount:
          userDetails?.current_membership === "Life"
            ? conferenceData?.standard_life_price ?? 0
            : conferenceData?.standard_price ?? 0,
      };

      dispatch(
        setAuthData({
          conference: {
            conference_amount_type: defaultSelection.conference_amount_type,
            conference_amount: defaultSelection.conference_amount,
            selectedRegistration: defaultSelection,
          },
        })
      );

      setSelectedRegistration(1);
    }
  }, [conference?.conference_amount_type, dispatch, conferenceData, userDetails]);

  return (
    <section className={styles.conferencesec}>
      <div className="container mt-3">
        <CommonTitle
          title={"Conference Registration"}
          subtitle={"Select your conference access level"}
        />

        <div className={styles.registerContainer}>
          {userDetails?.current_membership === "Life" ? (
            // Show this if user is already a life member
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
          ) : (
            // Show this if user is NOT a life member
            <div
              className={`${styles.lifeMember} d-flex align-items-start justify-content-start gap-3`}
            >
              <div className={styles.iconlife}>
                <DynamicIcon name="badge-percent" color="#fff" />
              </div>
              <div className={styles.lifeMemberContent}>
                <h6>Become a Life Member</h6>
                <p>Unlock exclusive discounts on all conference registrations!</p>
              </div>
            </div>
          )}
          <div
            className={`${styles.cardContainer} my-3 w-100 d-flex flex-column align-items-start justify-content-start gap-5`}
          >
            {conferenceRegistrationData.map((item) => (
              <RegistrationCard
                data={item}
                isSelected={selectedRegistration == item?.id}
                selectable={true}
                onClick={() => handleSelectRegistration(item?.id, item)}
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
            <div onClick={() => { handleNext(2) }}>
              <Button title="Back" bgcolor={"#000"} colors={"#fff"} />
            </div>
            <div onClick={() => { selectedRegistration == 1 || selectedRegistration == null ? undefined : handleNext(6) }}>
              <Button
                title="Complete Registration"
                iconname={"arrow-right"}
                bgcolor={"#00a0e3"}
                colors={"#fff"}
              />
            </div>
            <div onClick={() => { selectedRegistration == 2 || selectedRegistration == null ? undefined : handleNext(4) }}>
              <Button
                disabled={selectedRegistration == 2 || selectedRegistration == null}
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
