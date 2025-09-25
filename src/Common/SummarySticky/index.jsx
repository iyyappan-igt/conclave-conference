// components/PriceSummary.js
import { useAuth } from "@/redux/selectors/auth/authSelector";
import Button from "../Button";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import { useState } from "react";

const SummarySticky = ({ handleNext, conferenceData }) => {
  const { conference, events, userdetails } = useAuth();
  const eventsArray = events ? Object.values(events) : [];
  const [arrowToggle, setarrowToggle] = useState(false);

  const conferenceRegistrationAmount = conference?.conference_amount
    ? Number(String(conference.conference_amount).replace(/[^\d.-]/g, "")) || 0
    : 0;

  const workShopsPrice = eventsArray.reduce((total, event) => {
    return event?.event_type === "workshop"
      ? total +
          (Number(
            userdetails?.current_membership == "Life"
              ? event?.life_member_price
              : event?.price
          ) ?? 0)
      : total;
  }, 0);

  const roundTablePrice = eventsArray.reduce((total, event) => {
    return event?.event_type === "roundtable"
      ? total +
          (Number(
            userdetails?.current_membership == "Life"
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
    conference?.conference_amount_type === "standard"
      ? conferenceRegistrationAmount + workShopsPrice + roundTablePrice
      : conferenceRegistrationAmount;

  return (
    <aside>
      <div className={`${styles.summaryBox} d-none d-lg-block`}>
        <h4 className={styles.summaryTitle}>Registration Summary</h4>
        <p>{conferenceData?.title || "Ophthall Conference"}</p>
        <hr />
        <div className={styles.summaryItem}>
          <span>Conference Registration</span>
          <span>₹{conferenceRegistrationAmount}</span>
        </div>
        {conference?.conference_amount_type === "standard" && (
          <>
            <div className={styles.summaryItem}>
              <span>Workshop ({totalWorkShopsSelected}x)</span>
              <span>₹{workShopsPrice}</span>
            </div>

            <div className={styles.summaryItem}>
              <span>Round Table ({totalRoundTableSelected}x)</span>
              <span>₹{roundTablePrice}</span>
            </div>
          </>
        )}
        <hr />
        <div className={styles.summaryTotal}>
          <div className={styles.total}>
            <strong>Total Amount</strong>
            <p>Inclusive of all taxes</p>
          </div>
          <strong>₹{totalPrice}</strong>
        </div>

        <Button
          title="Proceed to Payment"
          iconname="arrow-right"
          bgcolor="#00a0e3"
          colors="#fff"
          handleTogglecontactForm={() => handleNext(6)}
        />
      </div>

      {/* ✅ Mobile version stays the same but uses parsed values */}
      <div
        className={`${
          arrowToggle ? styles.summaryBox : styles.summaryBox2
        } d-block d-lg-none`}
      >
        <div className="d-flex justify-content-between">
          <div>
            <h4 className={styles.summaryTitle}>Registration Summary</h4>
            <p>{conferenceData?.title || "Ophthall Conference"}</p>
          </div>
          <div
            className={styles.arrowicon}
            onClick={() => {
              setarrowToggle(!arrowToggle);
            }}
          >
            {arrowToggle ? (
              <DynamicIcon name="chevron-down" size={30} />
            ) : (
              <DynamicIcon name="chevron-up" size={30} />
            )}
          </div>
        </div>

        <hr />
        <div className={styles.summaryItem}>
          <span>Conference Registration</span>
          <span>₹{conferenceRegistrationAmount}</span>
        </div>
        {conference?.conference_amount_type === "standard" && (
          <>
            <div className={styles.summaryItem}>
              <span>Workshop ({totalWorkShopsSelected}x)</span>
              <span>₹{workShopsPrice}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Round Table ({totalRoundTableSelected}x)</span>
              <span>₹{roundTablePrice}</span>
            </div>
          </>
        )}
        <hr />
        <div className={styles.summaryTotal}>
          <div className={styles.total}>
            <strong>Total Amount</strong>
            <p>Inclusive of all taxes</p>
          </div>
          <strong>₹{totalPrice}</strong>
        </div>
        <div className={`my-3 d-flex flex-column ${styles.button}`}>
          <Button
            title="Proceed to Payment"
            iconname="arrow-right"
            bgcolor="#00a0e3"
            colors="#fff"
            onClick={() => handleNext(6)}
          />
        </div>
      </div>
    </aside>
  );
};

export default SummarySticky;
