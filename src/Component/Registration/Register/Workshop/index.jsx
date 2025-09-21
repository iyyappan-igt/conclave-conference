import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";
import SessionCard from "@/Common/SessionCard";
import { useState } from "react";
import Button from "@/Common/Button";
import { useDispatch } from "react-redux";
import { setAuthData } from "@/redux/slices/auth/authSlice";
import { useAuth } from "@/redux/selectors/auth/authSelector";

const Workshop = ({ workshoplist, handleNext, personalData }) => {
  const [selectedworkshop, setselectedworkshop] = useState(0);
  const { events } = useAuth();

  const dispatch = useDispatch();

  const handleWorkshopAdd = (workshopId) => {
    const workshop = workshoplist?.find((item) => item.id === workshopId);
    if (!workshop) return;

    dispatch(
      setAuthData({
        events: {
          ...events, // keep existing
          [workshopId]: workshop, // add/overwrite selected
        },
      })
    );
  };

  console.log("workshop", events);

  return (
    <section className={styles.workshopsec}>
      <CommonTitle
        title={"Worksop Selection"}
        subtitle={"Choose your sessions for Ophthall Conclave 2026"}
      />

      <div className="row">
        {workshoplist?.map((data, i) => (
          <div
            className="col-lg-6 mb-4"
            key={i}
            onClick={() => {
              setselectedworkshop(data?.id);
              handleWorkshopAdd(data?.id);
            }}
          >
            <SessionCard
              type={data?.event_type}
              amount={
                personalData?.current_membership == "Life"
                  ? data?.life_member_price
                  : data?.price
              }
              title={data?.title}
              overview={data?.description}
              startdate={data?.start_date_time}
              enddate={data?.end_date_time}
              speaker={data?.coordinator_name}
              status={data?.status}
              isSelected={data?.id == selectedworkshop}
            />
          </div>
        ))}
      </div>

      <div
        className={`${styles.inputgroup} mt-4`}
        onClick={() => {
          handleNext(5);
        }}
      >
        <Button title={"Next"} bgcolor={"#00A0E3"} colors={"#ffff"} />
      </div>
    </section>
  );
};

export default Workshop;
