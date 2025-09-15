import styles from "./styles.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles.titles}>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
