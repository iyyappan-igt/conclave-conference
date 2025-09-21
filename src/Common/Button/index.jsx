import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const Button = ({
  title,
  bgcolor,
  colors,
  link,
  icon,
  target,
  iconname,
  type,
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
      ) : iconname ? (
        <>
          <button
            type={type ? type : "button"}
            onClick={handleTogglecontactForm}
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors }}
          >
            {title} <DynamicIcon name={iconname} color={colors} size={18} />
          </button>
        </>
      ) : (
        <>
          <button
            type={type ? type : "button"}
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
