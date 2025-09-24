import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";
import dayjs from "dayjs";

const SessionCard = ({
  id,
  type,
  title,
  speaker,
  overview,
  startdate,
  enddate,
  amount,
  status,
  addEvents,
  removeEvents,
  isSelected,
  isselectbtn,
}) => {
  function getEventInfo(startDateTime, endDateTime) {
    const start = dayjs(startDateTime);
    const end = dayjs(endDateTime);
    const now = dayjs();

    const diffMinutes = end.diff(start, "minute");
    if (diffMinutes < 0) return { duration: "Invalid", daysLeft: null };

    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    let duration;
    if (hours && minutes) duration = `${hours}hrs ${minutes}mins`;
    else if (hours) duration = `${hours}hrs`;
    else duration = `${minutes}mins`;

    const daysLeft = start.diff(now, "day");
    const daysLeftLabel =
      daysLeft > 0 ? `${daysLeft} day(s) left` : "Started / Past";

    return { duration, daysLeft: daysLeftLabel };
  }

  const event = getEventInfo(startdate, enddate);

  return (
    <div
      className={
        isselectbtn ? styles.sessioncardwrapper : styles.sessioncardwrapper2
      }
    >
      <div className={`${styles.cardhead} d-flex justify-content-between `}>
        <div className="d-flex gap-2 align-items-center">
          <DynamicIcon
            name={type == "workshop" ? "calendar" : "users"}
            size={15}
          />
          <h4 className="m-0">{type}</h4>
        </div>

        <h6 className="m-0">{`₹ ${amount}`}</h6>
      </div>

      <div className={`${styles.cardbody} mt-4`}>
        <h4>{title}</h4>
        <h6 className="mt-3">{`by ${speaker}`}</h6>
        <p className="mt-4">{overview}</p>

        {startdate ? (
          <div className="d-flex gap-2 align-items-center">
            <DynamicIcon name="calendar" size={15} color="#9d9d9d" />
            <h6>{dayjs(startdate).format("YYYY-MMMM-DD")}</h6>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        {startdate || enddate ? (
          <div
            className={`${styles.cardfooter}  d-flex align-items-center gap-3`}
          >
            <div className="d-flex gap-1">
              <DynamicIcon name="hourglass" size={15} color="#9d9d9d" />
              <h6>{event?.duration}</h6>
            </div>

            <div className="d-flex gap-2">
              <DynamicIcon name="clock" size={15} color="#9d9d9d" />
              <h6>{event?.daysLeft}</h6>
            </div>
          </div>
        ) : (
          "---"
        )}

        {status ? (
          <div className={styles.cardstatus}>
            <h6
              style={{
                backgroundColor:
                  status == "upcoming"
                    ? "#00a0e3"
                    : status == "ongoing"
                    ? "#2E7D32"
                    : status == "completed"
                    ? "#388E3C"
                    : status == "cancelled"
                    ? "#D32F2F"
                    : status == "postponed"
                    ? "#F57C00"
                    : status == "filled"
                    ? "#6A1B9A"
                    : "#00a0e3",
              }}
            >
              {status}
            </h6>
          </div>
        ) : (
          ""
        )}
      </div>

      {isselectbtn ? (
        <div className="mt-5">
          {isSelected ? (
            <>
              <div
                className={`${styles.selectcard} d-flex justify-content-center gap-2 align-items-center`}
                style={{
                  backgroundColor: "#ffff",
                  color: "#00a0e3",
                  border: "2px solid #00a0e3",
                }}
                onClick={() => {
                  removeEvents(id);
                }}
              >
                <DynamicIcon name="x" size={18} color="#00a0e3" />
                <h6 className="m-0">{`Remove ${type}`}</h6>
              </div>
            </>
          ) : (
            <div
              className={`${styles.selectcard} d-flex justify-content-center gap-2 align-items-center`}
              style={{ backgroundColor: "#00a0e3", color: "#fff" }}
              onClick={()=>addEvents(id)}
            >
              <DynamicIcon name="plus" size={18} color="#fff" />
              <h6 className="m-0">{`Select ${type}`}</h6>
            </div>
          )}

          {isSelected ? (
            <div
              className={`${styles.selectcard} d-flex justify-content-center gap-2 align-items-center`}
              style={{ backgroundColor: "#00a0e3", color: "#fff" }}
            >
              <DynamicIcon name="circle-check-big" size={18} color="#fff" />
              <h6 className="m-0">Added to your registration</h6>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SessionCard;
