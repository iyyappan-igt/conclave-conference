// components/PriceSummary.js
import { useAuth } from "@/redux/selectors/auth/authSelector";
import Button from "../Button";
import styles from "./styles.module.css";

const SummarySticky = ({ handleNext, conferenceData }) => {
<<<<<<< Updated upstream
  const { conference, events } = useAuth();

<<<<<<< Updated upstream
    const conferenceRegistrationAmount = conference?.conference_amount
        ? Number(String(conference.conference_amount).replace(/[^\d.-]/g, "")) || 0
        : 0;
=======
  const { conference, events, userdetails } = useAuth();

  // convert object → array
  const eventsArray = events ? Object.values(events) : [];
>>>>>>> Stashed changes

  // ✅ Safely parse conference price
  const conferenceRegistrationAmount = conference?.conference_amount
    ? Number(String(conference.conference_amount).replace(/[^\d.-]/g, "")) || 0
    : 0;

<<<<<<< Updated upstream
    const roundTablePrice = events
        ? events.reduce((total, event) => {
            return event?.event_type === "roundtable"
                ? total + (event?.event_amount ?? 0)
                : total;
        }, 0)
        : 0;
=======
  // convert object → array
  const eventsArray = events ? Object.values(events) : [];

  // ✅ Safely parse conference price
  const conferenceRegistrationAmount = conference?.conference_amount
    ? Number(String(conference.conference_amount).replace(/[^\d.-]/g, "")) || 0
    : 0;

  // ✅ Safely calculate workshop price
  const workShopsPrice = eventsArray.reduce((total, event) => {
    return event?.event_type === "workshop"
      ? total + (event?.event_amount ?? 0)
      : total;
  }, 0);
>>>>>>> Stashed changes

  // ✅ Safely calculate round table price
  const roundTablePrice = eventsArray.reduce((total, event) => {
    return event?.event_type === "roundtable"
      ? total + (event?.event_amount ?? 0)
      : total;
  }, 0);

  // ✅ Count workshops
  const totalWorkShopsSelected = eventsArray.reduce((total, event) => {
    return event?.event_type === "workshop" ? total + 1 : total;
  }, 0);

<<<<<<< Updated upstream
    const totalPrice = conferenceRegistrationAmount + workShopsPrice + roundTablePrice;
=======
=======
  // ✅ Safely calculate workshop price
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

  // ✅ Safely calculate round table price
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

  // ✅ Count workshops
  const totalWorkShopsSelected = eventsArray.reduce((total, event) => {
    return event?.event_type === "workshop" ? total + 1 : total;
  }, 0);

>>>>>>> Stashed changes
  // ✅ Count round tables
  const totalRoundTableSelected = eventsArray.reduce((total, event) => {
    return event?.event_type === "roundtable" ? total + 1 : total;
  }, 0);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

  // ✅ Final price
  const totalPrice =
    conferenceRegistrationAmount + workShopsPrice + roundTablePrice;

<<<<<<< Updated upstream

    console.log('check' , conference , events)



=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        {/* {conference?.conference_amount_type === "standard" && (
=======
        {conference?.conference_amount_type === "standard" && (
>>>>>>> Stashed changes
          <>
            <div className={styles.summaryItem}>
              <span>Workshop ({totalWorkShopsSelected}x)</span>
              <span>₹{workShopsPrice}</span>
            </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream

            <div className={`${styles.summaryBox} d-block d-lg-none`}>
                <h4 className={styles.summaryTitle}>Registration Summary</h4>
                <p>{conferenceData?.title || "Ophthall Conference"}</p>
                <hr />
                <div className={styles.summaryItem}>
                    <span>Conference Registration</span>
                    <span>₹{conferenceRegistrationAmount}</span>
                </div>
                {conference?.conference_amount_type === "standard" && <>
                    <div className={styles.summaryItem}>
                        <span>Workshop ({totalWorkShopsSelected}x)</span>
                        <span>₹{workShopsPrice}</span>
                    </div>
                    <div className={styles.summaryItem}>
                        <span>Round Table ({totalRoundTableSelected}x)</span>
                        <span>₹{roundTablePrice}</span>
                    </div>
                </>}
                <hr />
                <div className={styles.summaryTotal}>
                    <div className={styles.total}>
                        <strong>Total Amount</strong>
                        <p>Inclusive of all taxes</p>
                    </div>
                    <strong>₹{totalPrice}</strong>
                </div>
                <div className={`my-3 d-flex flex-column ${styles.button}`}>
                    {conference?.conference_amount_type === "standard" && <Button
                        title="Select Workshops"
                        iconname="arrow-right"
                        bgcolor="#fff"
                        border={"1px solid #00a0e3"}
                        colors="#00a0e3"
                        onClick={() => handleNext(4)}
                    />}
                    <Button
                        title="Proceed to Payment"
                        iconname="arrow-right"
                        bgcolor="#00a0e3"
                        colors="#fff"
                        onClick={() => handleNext(6)}
                    />
                </div>
=======
            <div className={styles.summaryItem}>
              <span>Round Table ({totalRoundTableSelected}x)</span>
              <span>₹{roundTablePrice}</span>
>>>>>>> Stashed changes
            </div>
          </>
        )} */}
=======
            <div className={styles.summaryItem}>
              <span>Round Table ({totalRoundTableSelected}x)</span>
              <span>₹{roundTablePrice}</span>
            </div>
          </>
        )}
>>>>>>> Stashed changes
        <hr />
        <div className={styles.summaryTotal}>
          <div className={styles.total}>
            <strong>Total Amount</strong>
            <p>Inclusive of all taxes</p>
          </div>
          <strong>₹{totalPrice}</strong>
        </div>
        <div className={`my-3 d-flex flex-column ${styles.button}`}>
          {conference?.conference_amount_type === "standard" && (
            <Button
              title="Select Workshops"
              iconname="arrow-right"
              bgcolor="#fff"
              border={"1.5px solid #00a0e3"}
              colors="#00a0e3"
              handleTogglecontactForm={() => handleNext(4)}
            />
          )}
          <Button
            title="Proceed to Payment"
            iconname="arrow-right"
            bgcolor="#00a0e3"
            colors="#fff"
            handleTogglecontactForm={() => handleNext(6)}
          />
        </div>
      </div>

      {/* ✅ Mobile version stays the same but uses parsed values */}
      <div className={`${styles.summaryBox} d-block d-lg-none`}>
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
        <div className={`my-3 d-flex flex-column ${styles.button}`}>
          {conference?.conference_amount_type === "standard" && (
            <Button
              title="Select Workshops"
              iconname="arrow-right"
              bgcolor="#fff"
              border={"1px solid #00a0e3"}
              colors="#00a0e3"
              onClick={() => handleNext(4)}
            />
          )}
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
