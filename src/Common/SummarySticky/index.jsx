// components/PriceSummary.js
import styles from "./styles.module.css";

const SummarySticky = ({ membershipPrice, workshopPrice, totalPrice }) => {
  return (
    <aside className={styles.summaryBox}>
      <h4 className={styles.summaryTitle}>Registration Summary</h4>
      <div className={styles.summaryItem}>
        <span>Membership</span>
        <span>₹{membershipPrice}</span>
      </div>
      <div className={styles.summaryItem}>
        <span>Workshop</span>
        <span>₹{workshopPrice}</span>
      </div>
      <hr />
      <div className={styles.summaryTotal}>
        <strong>Total</strong>
        <strong>₹{totalPrice}</strong>
      </div>
    </aside>
  );
};

export default SummarySticky;
