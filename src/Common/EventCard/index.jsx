import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import dayjs from "dayjs";

const statusColorMap = {
    upcoming: "#00a0e3",
    ongoing: "#2E8B57",
    completed: "#3CB371",
    cancelled: "#D32F2F",
    postponed: "#F57C00",
    filled: "#6A1B9A",
};

const EventCard = ({
    id,
    type,
    title,
    speaker,
    overview,
    startdate,
    enddate,
    non_member_amount,
    amount,
    status,
    onClick,
    designation,
    speakerImage = "/assets/images/avatar-placeholder.png",
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
            daysLeftLabel = "Ended";
        }

        return { duration, daysLeft: daysLeftLabel };
    }

    const event = getEventInfo(startdate, enddate);

    return (
        <div className={styles.eventCardWrapper} onClick={onClick}>
            <div
                className={`${styles.cardBadge} ${type === "workshop"
                    ? styles.workshopBadge
                    : type === "conference"
                        ? styles.conferenceBadge
                        : styles.roundtableBadge
                    }`}
            >
                {type}
            </div>

            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    {/* <div className="d-flex align-items-center">
                        <div className={styles.typeIcon}>
                            <DynamicIcon
                                name={
                                    type === "workshop"
                                        ? "briefcase"
                                        : type === "conference"
                                            ? "mic"
                                            : "users"
                                }
                                size={18}
                                className={styles.iconSelected}
                            />
                        </div>
                        <h4 className={`m-0 text-capitalize ${styles.textSelected}`}>
                            {type}
                        </h4>
                    </div> */}
                    <div>
                        <h3 className={styles.title}>{title}</h3>
                        <div className="d-flex flex-wrap justify-content-start align-items-start gap-3 mb-4">
                            {startdate && (
                                <div className={styles.dateContainer}>
                                    <div className={styles.calendarIcon}>
                                        <DynamicIcon
                                            name="calendar"
                                            size={18}
                                            className={styles.iconSelected}
                                        />
                                    </div>
                                    <span className={styles.dateText}>
                                        {dayjs(startdate).format("DD MMM, YYYY")}
                                    </span>
                                </div>
                            )}
                            <div className={`${styles.dateContainer} d-flex align-items-center`}>
                                <DynamicIcon
                                    name="clock"
                                    size={18}
                                    className={styles.iconSelected}
                                />
                                <span className={styles.durationText}>{event.duration}</span>
                            </div>
                            <div className={`d-flex align-items-center ${styles.dateContainer}`}>
                                <span className={styles.priceText}>
                                    <span className={`${styles.currencySymbol} ${styles.currencySymbolLarge}`}>₹</span>
                                    {amount}
                                </span>
                                {non_member_amount && (
                                    <span className={styles.strikeThroughPrice}>
                                        <span className={styles.currencySymbol}>₹</span>
                                        {non_member_amount}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <div className={styles.daysLeftBadge}>
                            <span className={styles.daysNumber}>
                                {event.daysLeft.split(" ")[0]}
                            </span>
                            <span className={styles.daysText}>{event.daysLeft !== "Ended" ? "days left" : ""}</span>
                        </div>
                        {status && (
                            <span
                                className={styles.cardStatus}
                                style={{
                                    backgroundColor: statusColorMap[status] || "#00a0e3",
                                }}
                            >
                                {status}
                            </span>
                        )}
                    </div>
                </div>
                <div className={styles.cardBody}>
                    {speaker && (
                        <div className={styles.speakerContainer}>
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
                                <p className={styles.speakerName}>{speaker}</p>
                                <p className={styles.speakerTitle}>{designation}</p>
                            </div>
                        </div>
                    )}

                    <p className={styles.overview}>{overview}</p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
