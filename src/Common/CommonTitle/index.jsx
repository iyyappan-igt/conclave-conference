import styles from "./styles.module.css"


const CommonTitle = ({ title, subtitle }) => {
  return (
    <div className={styles.membershipwrapper}>
      <h2 className={`${styles.membertitle} text-center `}>{title}</h2>
      <p className={`${styles.memberdesc} text-center `}> {subtitle} </p>
    </div>
  );
};

export default CommonTitle;