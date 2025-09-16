// components/PriceSummary.js
import Button from "../Button";
import styles from "./styles.module.css";

const SummarySticky = ({ membershipPrice, workshopPrice, totalPrice }) => {
    return (
        <aside >
            <div className={`${styles.summaryBox} d-none d-lg-block`}>
            <h4 className={styles.summaryTitle}>Registration Summary</h4>
            <p>Ophthall Conclave 2026</p>
            <hr />
            <div className={styles.summaryItem}>
                <span>Conference Registration</span>
                <span>₹{membershipPrice}</span>
            </div>
            <div className={styles.summaryItem}>
                <span>Workshop ( 2x )</span>
                <span>₹{workshopPrice}</span>
            </div>
            <div className={styles.summaryItem}>
                <span>Round Table ( 3x )</span>
                <span>₹{membershipPrice}</span>
            </div>
            <hr />
            <div className={styles.subTotal}>
                <span>Sub Total</span>
                <span>₹{totalPrice}</span>
            </div>
            <div className={styles.subTotal}>
                <span>GST (18%)</span>
                <span>₹{totalPrice}</span>
            </div>
            <hr />
            <div className={styles.summaryTotal}>
                <div className={styles.total}>
                    <strong>Total Amount</strong>
                    <p>Inclusive of all taxes</p>
                </div>
                <strong>₹{totalPrice}</strong>
            </div>
            <div className={`my-3 ${styles.button}`}>
                <Button title="Proceed to Payment" iconname={"arrow-right"} bgcolor={"#00a0e3"} colors={"#fff"} />
            </div>
            </div>
              <div className={`${styles.summaryBox} d-block d-lg-none`}>
            <h4 className={styles.summaryTitle}>Registration Summary</h4>
            <p>Ophthall Conclave 2026</p>
            <hr />
            <div className={styles.summaryItem}>
                <span>Conference Registration</span>
                <span>₹{membershipPrice}</span>
            </div>
            <div className={styles.summaryItem}>
                <span>Workshop ( 2x )</span>
                <span>₹{workshopPrice}</span>
            </div>
            <div className={styles.summaryItem}>
                <span>Round Table ( 3x )</span>
                <span>₹{membershipPrice}</span>
            </div>
            <hr />
            <div className={styles.subTotal}>
                <span>Sub Total</span>
                <span>₹{totalPrice}</span>
            </div>
            <div className={styles.subTotal}>
                <span>GST (18%)</span>
                <span>₹{totalPrice}</span>
            </div>
            <hr />
            <div className={styles.summaryTotal}>
                <div className={styles.total}>
                    <strong>Total Amount</strong>
                    <p>Inclusive of all taxes</p>
                </div>
                <strong>₹{totalPrice}</strong>
            </div>
            <div className={`my-3 ${styles.button}`}>
                <Button title="Proceed to Payment" iconname={"arrow-right"} bgcolor={"#00a0e3"} colors={"#fff"} />
            </div>
            </div>
        </aside>
    );
};

export default SummarySticky;
