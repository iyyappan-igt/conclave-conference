import React from "react";
import styles from "./styles.module.css";
import EventCard from "@/Common/EventCard";
import Title from "@/Common/Title";

const RoundtableSessions = ({ data, roundtableData }) => {
  // const workshopsData = [
  //   {
  //     id: 1,
  //     type: "workshop",
  //     title: "Advances in Cataract Surgery",
  //     speaker: "Dr. Ananya Mehta",
  //     overview:
  //       "Learn the latest techniques and innovations in cataract surgery for improved patient outcomes.",
  //     startdate: "2025-10-05T10:00:00",
  //     enddate: "2025-10-05T13:00:00",
  //     non_member_amount: 3000,
  //     amount: 2000,
  //     status: "upcoming",
  //     designation: "Senior Ophthalmic Surgeon, VisionCare Hospital",
  //     speakerImage: "/assets/SkyRocket/Dr. T. Senthil.png",
  //   },
  //   {
  //     id: 2,
  //     type: "workshop",
  //     title: "Retina Imaging & Diagnostics",
  //     speaker: "Dr. Ravi Sharma",
  //     overview:
  //       "Explore cutting-edge retinal imaging techniques and their role in early detection of eye diseases.",
  //     startdate: "2025-10-08T09:00:00",
  //     enddate: "2025-10-08T17:00:00",
  //     non_member_amount: 4000,
  //     amount: 2800,
  //     status: "upcoming",
  //     designation: "Retina Specialist, EyeCare Institute",
  //     speakerImage: "/assets/SkyRocket/Dr Sanjay Kulkarni.png",
  //   },
  //   {
  //     id: 3,
  //     type: "workshop",
  //     title: "Pediatric Ophthalmology Updates",
  //     speaker: "Dr. Emily Carter",
  //     overview:
  //       "A workshop focused on diagnosing and managing common eye conditions in children.",
  //     startdate: "2025-12-20T15:00:00",
  //     enddate: "2025-12-20T17:00:00",
  //     non_member_amount: 2500,
  //     amount: 1800,
  //     status: "upcoming",
  //     designation: "Pediatric Ophthalmologist, KidsEye Center",
  //     speakerImage: "/assets/SkyRocket/Mr Abdul Lathif.png",
  //   },
  //   {
  //     id: 4,
  //     type: "workshop",
  //     title: "Glaucoma Management Strategies",
  //     speaker: "Dr. Michael Johnson",
  //     overview:
  //       "Discuss advanced treatment approaches and surgical techniques in glaucoma management.",
  //     startdate: "2025-11-01T11:00:00",
  //     enddate: "2025-11-01T16:00:00",
  //     non_member_amount: 3500,
  //     amount: 2500,
  //     status: "upcoming",
  //     designation: "Glaucoma Specialist, VisionPro Clinic",
  //     speakerImage: "/assets/SkyRocket/Mr Abdul Lathif.png",
  //   },
  // ];

  return (
    <section className={`${styles.container} container-fluid`}>
      <div className={`${styles.contentContainer} container`}>
        <Title title={data?.title || "Round Table Sessions"} />
        <div className={styles.workshopContainer}>
          {roundtableData.map((roundtable) => (
            <EventCard
              id={roundtable?.id}
              type={roundtable?.event_type}
              title={roundtable?.title}
              speaker={roundtable?.coordinator_name}
              overview={roundtable?.description}
              startdate={roundtable?.start_date_time}
              enddate={roundtable?.end_date_time}
              non_member_amount={roundtable?.price}
              amount={roundtable?.life_member_price}
              status={roundtable?.status}
              designation={roundtable?.coordinator_designation}
              speakerImage={roundtable?.coordinator_image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoundtableSessions;
