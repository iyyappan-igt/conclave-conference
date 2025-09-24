import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import PersonalDetail from "../Register/PersonalDetail";
import Membership from "../Register/Membership";
import Payment from "../Register/Payment";
import ConferenceRegister from "../Register/ConferenceRegister";
import SummarySticky from "@/Common/SummarySticky";
import Workshop from "../Register/Workshop";
import RoundTable from "../Register/RoundTable";
import { useConferenceQuery } from "@/hooks/useConferenceQuery";
import { useAuth } from "@/redux/selectors/auth/authSelector";
import { getAllEventByConfernceIdQuery } from "@/hooks/useEventQuery";
import { setActiveStepNumber } from "@/redux/slices/auth/authSlice";
import { useDispatch } from "react-redux";

const Steps = () => {
  const dispatch = useDispatch();
  const { userdetails, conference, events, activeStepNumber } = useAuth();
  const [stepnumber, setStepnumber] = useState(activeStepNumber || 1);
  const stepWrapperRef = useRef(null);
  const layoutRef = useRef(null);
  const { data: conferenceData } = useConferenceQuery();
  const { mutate: eventMutate } = getAllEventByConfernceIdQuery();
  const [session, setsession] = useState();
  console.log("session", session);
  const data_workshops = session
    ? session.filter((item) => item.event_type == "workshop")
    : [];
  const data_roundTables = session
    ? session.filter((item) => item.event_type == "roundtable")
    : [];

  const handleActiveStepNumber = (id) => {
    setStepnumber(id);
    dispatch(setActiveStepNumber(id));
  };

  useEffect(() => {
    if (conferenceData?.id) {
      eventMutate(
        { value: conferenceData?.id },
        {
          onSuccess: (data) => {
            setsession(data?.data);
          },
        }
      );
    }
  }, [conferenceData?.id]);
  console.log("activeStepNumber", activeStepNumber);

  return (
    <section className={styles.stepsection}>
      <div className="container-fluid p-0">
        <div className={styles.stepwrapperTop} ref={stepWrapperRef}>
          <div
            className={
              stepnumber === 1 ? styles.stepactive : styles.stepinactive
            }
          >
            <span className={styles.stepnumber}>1</span>
            <p className={styles.steptext}>Membership</p>
          </div>
          <div
            className={
              stepnumber === 2 ? styles.stepactive : styles.stepinactive
            }
          >
            <span className={styles.stepnumber}>2</span>
            <p className={styles.steptext}>Personal Details</p>
          </div>
          <div
            className={
              stepnumber === 3 ? styles.stepactive : styles.stepinactive
            }
          >
            <span className={styles.stepnumber}>3</span>
            <p className={styles.steptext}>Conference</p>
          </div>
          <div
            className={
              stepnumber === 4 ? styles.stepactive : styles.stepinactive
            }
          >
            <span className={styles.stepnumber}>4</span>
            <p className={styles.steptext}>Workshop</p>
          </div>
          <div
            className={
              stepnumber === 5 ? styles.stepactive : styles.stepinactive
            }
          >
            <span className={styles.stepnumber}>5</span>
            <p className={styles.steptext}>RoundTable</p>
          </div>
          <div
            className={
              stepnumber === 6 ? styles.stepactive : styles.stepinactive
            }
          >
            <span className={styles.stepnumber}>6</span>
            <p className={styles.steptext}>Payment</p>
          </div>
        </div>

        <div
          className={`${styles.layoutWrapper}  ${stepnumber >= 3 ?  styles.step3above : ""}`}
          ref={layoutRef}
        >
          <div className={styles.formWrapper}>
            <div className={styles.stepcontent}>
              {stepnumber === 1 ? (
                <Membership
                  handleNext={(id) => handleActiveStepNumber(id)}
                  conferenceData={conferenceData}
                />
              ) : stepnumber === 2 ? (
                <PersonalDetail
                  handleNext={(id) => handleActiveStepNumber(id)}
                  personalData={userdetails}
                />
              ) : stepnumber === 3 ? (
                <ConferenceRegister
                  conferenceData={conferenceData}
                  handleNext={(id) => handleActiveStepNumber(id)}
                  eventData={session}
                />
              ) : stepnumber === 4 ? (
                <Workshop
                  personalData={userdetails}
                  conferenceData={conferenceData}
                  workshoplist={data_workshops}
                  handleNext={(id) => handleActiveStepNumber(id)}
                  eventAuth={events}
                />
              ) : stepnumber === 5 ? (
                <RoundTable
                  personalData={userdetails}
                  conferenceData={conferenceData}
                  roundtablelist={data_roundTables}
                  handleNext={(id) => handleActiveStepNumber(id)}
                  eventAuth={events}
                />
              ) : stepnumber === 6 ? (
                <Payment
                  handleNext={(id) => handleActiveStepNumber(id)}
                  personalData={userdetails}
                  conferenceAuth={conference}
                  conferenceData={conferenceData}
                  eventsAuth={events}
                />
              ) : null}
            </div>
          </div>
          {stepnumber >= 3 && (
            <aside className={styles.rightColumn} style={{ top: `60px` }}>
              <SummarySticky
                conferenceData={conferenceData}
                handleNext={(id) => setStepnumber(id)}
              />
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};

export default Steps;
