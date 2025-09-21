import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const Button = ({
  title,
  bgcolor,
  colors,
  link,
  icon,
  target,
  border,
  iconname,
  type,
  disabled,
  handleTogglecontactForm,
}) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (handleTogglecontactForm) handleTogglecontactForm();
  };
  return (
    <div className={styles.commonbutton}>
      {link ? (
        <a href={!disabled ? link : undefined} target={target}>
          <button
            disabled={disabled}
            type="btn"
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors, border:border }}
          >
            <img src={icon} alt="" />
            {title}
          </button>
        </a>
      ) : iconname ? (
        <>
          <button
            disabled={disabled}
            type={type ? type : "button"}
            onClick={handleClick}
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors,border:border }}
          >
            {title} <DynamicIcon name={iconname} color={colors} size={18} />
          </button>
        </>
      ) : (
        <>
          <button
            disabled={disabled}
            type={type ? type : "button"}
            onClick={handleClick}
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors, border:border }}
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
