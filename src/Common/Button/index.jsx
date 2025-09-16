import styles from "./styles.module.css";

const Button = ({
  title,
  bgcolor,
  colors,
  link,
  icon,
  target,
  handleTogglecontactForm,
}) => {
  return (
    <div className={styles.commonbutton}>
      {link ? (
        <a href={link} target={target}>
          <button
            type="btn"
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors }}
          >
            <img src={icon} alt="" />
            {title}
          </button>
        </a>
      ) : (
        <>
          <button
            type="btn"
            onClick={handleTogglecontactForm}
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors }}
          >
            <img src={icon} alt="" />
            {title}
          </button>
        </>
      )}
    </div>
  );
};

export default Button;
