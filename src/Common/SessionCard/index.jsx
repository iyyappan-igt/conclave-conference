import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const SessionCard = ({
  type,
  title,
  speaker,
  overview,
  date,
  amount,
  time,
  isSelected,
}) => {
  return (
    <div className={styles.sessioncardwrapper}>
      <div className={`${styles.cardhead} d-flex justify-content-between `}>
        <div className="d-flex gap-2 align-items-center">
          <DynamicIcon
            name={type == "Workshop" ? "calendar" : "users"}
            size={15}
          />
          <h4 className="m-0">{type}</h4>
        </div>

        <h6 className="m-0">{amount}</h6>
      </div>

      <div className={`${styles.cardbody} mt-4`}>
        <h4>{title}</h4>
        <h6>{`by ${speaker}`}</h6>
        <p>{overview}</p>
      </div>

      <div className={`${styles.cardfooter} mt-4`}>
        <h6>{`${date} (${time})`}</h6>
      </div>

      <div className="mt-5">
        <div
          className={`${styles.selectcard} d-flex justify-content-center gap-2 align-items-center`}
          style={{ backgroundColor: "#00a0e3", color: "#fff" }}
        >
          <DynamicIcon name={isSelected ? "check" : "plus"} size={18} />
          <h6 className="m-0">
            {isSelected ? `Selected ${type}` : `Select ${type}`}
          </h6>
        </div>

        {isSelected ? (
          <div
            className={`${styles.selectcard} d-flex justify-content-center gap-2 align-items-center`}
            style={{ backgroundColor: "#3de300ff", color: "#fff" }}
          >
            <DynamicIcon name="circle-check-big" size={18} />
            <h6 className="m-0">Added to your registration</h6>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SessionCard;
