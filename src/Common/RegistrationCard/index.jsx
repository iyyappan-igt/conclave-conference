import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./style.module.css";

const RegistrationCard = ({ data, isSelected, onClick,selectable }) => {
  return (
    <div
      className={styles.card}
      onClick={selectable ? onClick : undefined}
      style={
        isSelected
          ? { backgroundColor: "#00a0e3", color: "#fff" }
          : { backgroundColor: "#fff", color: "#000" }
      }
    >
      {data?.recommended && (
        <div className={`position-absolute ${styles.recommendedBadge}`}>
          Recommended
        </div>
      )}
      <div
        className={styles.selectIndicator}
        style={{
          border: isSelected ? "6px solid #fff" : "2px solid #dcdfe4",
          backgroundColor: isSelected ? "#00a0e3" : "transparent",
          display:selectable ? "block" : "none"
        }}
      ></div>
      <div
        className={`${styles.cardHeader} d-flex align-items-start justify-content-start gap-2`}
      >
        <div
          className={styles.cardimg}
          style={
            isSelected
              ? { backgroundColor: "#ffffffff" }
              : { backgroundColor: " background-color: #c8eaf8" }
          }
        >
          <img src={data?.icon} className="img-fluid" />
        </div>
        <div className={styles.lifeMemberContent}>
          <h4>{data?.title}</h4>
          <p>{data?.description1}</p>
          <p>{data?.description2}</p>
        </div>
      </div>
      <div className={styles.price}>
        <p>
          <span className={styles.newPrice}>{data?.newPrice}</span>
          <span
            className={styles.oldPrice}
            style={{ color: isSelected ? "#F5F5F5" : "#6c757d" }}
          >
            {data?.oldPrice}
          </span>
          <span
            className={styles.gst}
            style={{ color: isSelected ? "#F5F5F5" : "#6c757d" }}
          >
            + GST
          </span>
        </p>
        <p
          className={styles.discount}
          style={{ color: isSelected ? "#FFF8C6" : "green" }}
        >
          <span className={styles.discountIcon}>
            <DynamicIcon name="trending-down" size={18} />
          </span>
          {data?.discount}
        </p>
      </div>
      <div className={styles.included}>
        <h6>{data?.includedTitle}</h6>
        <div className={`row ${styles.includedList}`}>
          {data?.includedList.map((item, index) => (
            <p className="col-md-6 d-flex gap-2" key={index}>
              {" "}
              <span
                className={styles.tick}
                style={
                  isSelected
                    ? { backgroundColor: "#ffffffff", color: "#00a0e3" }
                    : { backgroundColor: "#00a0e3", color: "#fff" }
                }
              >
                ✓
              </span>{" "}
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;
