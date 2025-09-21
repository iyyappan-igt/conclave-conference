// components/PriceSummary.js
import { useAuth } from "@/redux/selectors/auth/authSelector";
import Button from "../Button";
import styles from "./styles.module.css";

const SummarySticky = ({ handleNext, conferenceData }) => {
    const { conference, events } = useAuth();

    const conferenceRegistrationAmount = conference?.conference_amount
        ? Number(String(conference.conference_amount).replace(/[^\d.-]/g, "")) || 0
        : 0;

    const workShopsPrice = events
        ? events.reduce((total, event) => {
            return event?.event_type === "workshop"
                ? total + (event?.event_amount ?? 0)
                : total;
        }, 0)
        : 0;

    const roundTablePrice = events
        ? events.reduce((total, event) => {
            return event?.event_type === "roundtable"
                ? total + (event?.event_amount ?? 0)
                : total;
        }, 0)
        : 0;

    const totalWorkShopsSelected = events
        ? events.reduce((total, event) => {
            return event.event_type === "workshop" ? total + 1 : total;
        }, 0)
        : 0;

    const totalRoundTableSelected = events
        ? events.reduce((total, event) => {
            return event.event_type === "roundtable" ? total + 1 : total;
        }, 0)
        : 0;

    const totalPrice = conferenceRegistrationAmount + workShopsPrice + roundTablePrice;

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
                        border={"1.5px solid #00a0e3"}
                        colors="#00a0e3"
                        handleTogglecontactForm={() => handleNext(4)}
                    />}
                    <Button
                        title="Proceed to Payment"
                        iconname="arrow-right"
                        bgcolor="#00a0e3"
                        colors="#fff"
                        handleTogglecontactForm={() => handleNext(6)}
                    />
                </div>
            </div>

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
            </div>
        </aside>
    );
};

export default SummarySticky;
