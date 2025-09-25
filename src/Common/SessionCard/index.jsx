import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { DynamicIcon } from "lucide-react/dynamic";
import dayjs from "dayjs";

const statusColorMap = {
  upcoming: "#00a0e3",
  ongoing: "#2E8B57", // Sea Green - better green for the theme
  completed: "#3CB371", // Medium Sea Green
  cancelled: "#D32F2F",
  postponed: "#F57C00",
  filled: "#6A1B9A",
};

const selectedStatusColorMap = {
  upcoming: "#00a0e3",
  ongoing: "#4CAF50",
  completed: "#66BB6A",
  cancelled: "#EF5350",
  postponed: "#FF9800",
  filled: "#8E24AA",
};

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
  designation,
  speakerImage = '/assets/images/avatar-placeholder.png',
}) => {
  function getEventInfo(startDateTime, endDateTime) {
    const start = dayjs(startDateTime);
    const end = dayjs(endDateTime);
    const now = dayjs();

    const diffMinutes = end.diff(start, "minute");
    if (diffMinutes < 0) return { duration: "Invalid", daysLeft: null };

    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    const duration = hours
      ? `${hours}h${minutes ? ` ${minutes}m` : ""}`
      : `${minutes}m`;

    const daysLeft = start.diff(now, "day");
    const hoursLeft = start.diff(now, "hour") % 24;

    let daysLeftLabel = "";
    if (daysLeft > 0) {
      daysLeftLabel = `${daysLeft}d ${hoursLeft}h left`;
    } else if (daysLeft === 0 && hoursLeft > 0) {
      daysLeftLabel = `${hoursLeft}h left`;
    } else if (start.isBefore(now) && end.isAfter(now)) {
      daysLeftLabel = "Ongoing";
    } else {
      daysLeftLabel = "Completed";
    }

    return { duration, daysLeft: daysLeftLabel };
  }

  const event = getEventInfo(startdate, enddate);

  return (
    <div
      className={`${isselectbtn ? styles.sessioncardwrapper : styles.sessioncardwrapper2} ${isSelected ? styles.selectedCard : ''}`}
    >
      <div className={`${styles.cardBadge} ${type === "workshop" ? styles.workshopBadge : type === "conference" ? styles.conferenceBadge : styles.roundtableBadge}`}>
        {type}
      </div>

      <div className={`${styles.cardhead} d-flex justify-content-between`}>
        <div className="d-flex gap-3 align-items-center">
          <div className={styles.typeIcon}>
            <DynamicIcon
              name={type === "workshop" ? "briefcase" : type === "conference" ? "mic" : "users"}
              size={18}
              className={isSelected ? styles.iconSelected : styles.iconPrimary}
            />
          </div>
          <h4 className={`m-0 text-capitalize ${isSelected ? styles.textSelected : styles.textPrimary}`}>{type}</h4>
        </div>

        <div className={styles.seatsLeft}>
          <span className={styles.seatsNumber}>{event.daysLeft.split(' ')[0]}</span>
          <span className={styles.daysText}>days left</span>
        </div>
      </div>

      <div className={`${styles.cardbody}`}>
        <h3 className={`${styles.title} ${isSelected ? styles.titleSelected : ""}`}>{title}</h3>

        <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
          {startdate && (
            <div className={`${styles.dateContainer} d-flex gap-2 align-items-center`}>
              <div className={styles.calendarIcon}>
                <DynamicIcon
                  name="calendar"
                  size={18}
                  className={isSelected ? styles.iconSelected : styles.iconSecondary}
                />
              </div>
              <span className={`${styles.dateText} ${isSelected ? styles.textSelected : styles.textSecondary}`}>
                {dayjs(startdate).format("DD MMM, YYYY")}
              </span>
            </div>
          )}

          {status && (
            <span
              className={styles.cardstatus}
              style={{
                backgroundColor: isSelected
                  ? selectedStatusColorMap[status] || "#4db8e8"
                  : statusColorMap[status] || "#00a0e3",
                boxShadow: isSelected ? '0 4px 10px rgba(0, 0, 0, 0.25)' : '0 3px 8px rgba(0, 0, 0, 0.15)'
              }}
            >
              {status}
            </span>
          )}
        </div>
        <div className={styles.cardfooter}>
          <div className="d-flex align-items-center">
            <DynamicIcon
              name="clock"
              size={18.5}
              className={isSelected ? styles.iconSelected : styles.iconPrimary}
            />
            <span className={`${styles.durationText} ms-1 ${isSelected ? styles.textSelected : ''}`}>
              {event.duration}
            </span>
          </div>
          <div className="d-flex align-items-center">
            <span className={`${styles.priceText} ms-2 ${isSelected ? styles.textSelected : ''}`}>
              <span className={styles.currencySymbol}>₹</span>{amount}
            </span>
          </div>
        </div>

        {speaker && (
          <div className={`${styles.speakerContainer} d-flex align-items-center mb-3`}>
            <div className={styles.avatarWrapper}>
              <Image
                src={speakerImage}
                alt={speaker}
                width={48}
                height={48}
                className={styles.speakerAvatar}
              />
            </div>
            <div>
              <p className={`${styles.speakerName} ${isSelected ? styles.textSelected : styles.textSecondary}`}>
                {speaker}
              </p>
              <p className={`${styles.speakerTitle} ${isSelected ? styles.textSelected : styles.textTertiary}`}>
                {designation}
              </p>
            </div>
          </div>
        )}

        <p className={`${styles.overview} ${isSelected ? styles.textSelected : styles.textTertiary}`}>{overview}</p>


        {isselectbtn && (
          <div className={styles.buttonContainer}>
            {isSelected ? (
              <button
                className={`${styles.selectcard} ${styles.removebtn}`}
                onClick={() => removeEvents(id)}
              >
                <DynamicIcon name="minus-circle" size={20} />
                <span>Remove {type}</span>
              </button>
            ) : (
              <button
                className={`${styles.selectcard} ${styles.addbtn}`}
                onClick={() => addEvents(id)}
              >
                <DynamicIcon name="plus-circle" size={20} />
                <span>Select {type}</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionCard;
