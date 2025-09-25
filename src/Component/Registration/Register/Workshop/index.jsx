import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";
import SessionCard from "@/Common/SessionCard";
import { useState } from "react";
import Button from "@/Common/Button";
import { useDispatch } from "react-redux";
import { setAuthData } from "@/redux/slices/auth/authSlice";
import { DynamicIcon } from "lucide-react/dynamic";
import Backward from "@/Common/Backward";

const Workshop = ({ workshoplist, handleNext, personalData, eventAuth }) => {
  const dispatch = useDispatch();

  const handleWorkshopAdd = (workshopId) => {
    const workshop = workshoplist?.find((item) => item.id === workshopId);
    if (!workshop) return;

    const currentSelected = eventAuth || [];

    const updatedEvents = currentSelected.filter((e) => e.id !== workshopId);

    dispatch(
      setAuthData({
        events: [...updatedEvents, workshop],
      })
    );
  };

  const handleWorkshopRemove = (workshopId) => {

    const currentSelected = eventAuth || [];

    const updatedEvents = currentSelected.filter((e) => e.id !== workshopId);
    dispatch(
      setAuthData({
        events: [...updatedEvents],
      })
    );
  };

  return (
    <section className={styles.workshopsec}>
      <div className="position-relative text-center my-4">
        <div onClick={() => handleNext(3)}>
          <Backward />
        </div>

        <CommonTitle
          title={"Worksop Selection"}
          subtitle={"Choose your sessions for Ophthall Conclave 2026"}
        />
      </div>

      <div className="row">
        {workshoplist?.map((data, i) => (
          <div
            className="col-lg-6 mb-4"
            key={i}
          >
            <SessionCard
              id={data?.id}
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
              speakerImage={data?.coordinator_image}
              designation={data?.coordinator_designation}
              status={data?.status}
              addEvents={(id) => handleWorkshopAdd(id)}
              removeEvents={(id) => handleWorkshopRemove(id)}
              isSelected={
                eventAuth?.some((event) => event?.id == data?.id)
              }
              isselectbtn={true}
            />
          </div>
        ))}
      </div>

      <div
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
