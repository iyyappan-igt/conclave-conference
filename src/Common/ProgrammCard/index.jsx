import styles from "./styles.module.css";

const ProgrammCard = ({ type, amount, title, speaker, date }) => {
  return (
    <div className={styles.programmcard}>
      <div
        className={`${styles.programmhead} d-flex align-items-center justify-content-between`}
      >
        <h4 style={{ color: type == "Workshop" ? "red" : "blue" }}>{type}</h4>
        <h5>{amount}</h5>
      </div>

      <div className={styles.programminfo}>
        <h4>{title}</h4>
        <h6>{speaker}</h6>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ProgrammCard;
