import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import PersonalDetail from "../Register/PersonalDetail";
import Membership from "../Register/Membership";
import Payment from "../Register/Payment";
import ConferenceRegister from "../Register/ConferenceRegister";
import SummarySticky from "@/Common/SummarySticky";
import Workshop from "../Register/Workshop";
import RoundTable from "../Register/RoundTable";
import { Session } from "@/Constant/Session";
import { useConferenceQuery } from "@/hooks/useConferenceQuery";
import { Loader } from "lucide-react";

const Steps = () => {
  const [stepnumber, setStepnumber] = useState(1);
  const stepWrapperRef = useRef(null);
  const layoutRef = useRef(null);
  const { isLoading } = useConferenceQuery();

  const data_workshops = Session.filter((item) => item.type == "Workshop");
  const data_roundTables = Session.filter((item) => item.type == "Round Table");

  useEffect(() => {
    setStepnumber(1);
  }, []);
  if (isLoading) return <Loader />;
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
          className={styles.layoutWrapper}
          ref={layoutRef}
          style={{
            gridTemplateColumns: stepnumber >= 3 ? "1fr 350px" : "1fr",
          }}
        >
          <div className={styles.formWrapper}>
            <div className={styles.stepcontent}>
              {stepnumber === 1 ? (
                <Membership handleNext={(id) => setStepnumber(id)} />
              ) : stepnumber === 2 ? (
                <PersonalDetail handleNext={(id) => setStepnumber(id)} />
              ) : stepnumber === 3 ? (
                <ConferenceRegister handleNext={(id) => setStepnumber(id)} />
              ) : stepnumber === 4 ? (
                <Workshop
                  workshoplist={data_workshops}
                  handleNext={(id) => setStepnumber(id)}
                />
              ) : stepnumber === 5 ? (
                <RoundTable
                  roundtablelist={data_roundTables}
                  handleNext={(id) => setStepnumber(id)}
                />
              ) : stepnumber === 6 ? (
                <Payment />
              ) : null}
            </div>
          </div>
          {stepnumber >= 3 && (
            <aside className={styles.rightColumn} style={{ top: `60px` }}>
              <SummarySticky
                membershipPrice={2000}
                workshopPrice={1500}
                totalPrice={3500}
              />
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};

export default Steps;
