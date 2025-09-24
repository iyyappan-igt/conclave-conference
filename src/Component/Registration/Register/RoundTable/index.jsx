import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";
import SessionCard from "@/Common/SessionCard";
import { useState } from "react";
import Button from "@/Common/Button";
import { useDispatch } from "react-redux";
import { useAuth } from "@/redux/selectors/auth/authSelector";
import { setAuthData } from "@/redux/slices/auth/authSlice";
import { DynamicIcon } from "lucide-react/dynamic";
import Backward from "@/Common/Backward";

const RoundTable = ({
  roundtablelist,
  handleNext,
  personalData,
  eventAuth,
}) => {
  const [selectedRoundTable, setselectedRoundTable] = useState(0);

  const dispatch = useDispatch();

  const handleRountableAdd = (roundtableId) => {
    const roundtable = roundtablelist?.find((item) => item.id === roundtableId);
    if (!roundtable) return;

    const currentSelected = eventAuth || [];

    const updatedEvents = currentSelected.filter((e) => e.id !== roundtableId);

    dispatch(
      setAuthData({
        events: [...updatedEvents, roundtable],
      })
    );
  };

  const handleRoundtableRemove = (roundtableId) => {
    console.log(roundtableId);
  };

  return (
    <section className={styles.roundtabelsec}>
      <div className="position-relative text-center my-4">
        <div onClick={() => handleNext(4)}>
          <Backward/>
        </div>

        <CommonTitle
          title={"Round Table Selection"}
          subtitle={"Choose your sessions for Ophthall Conclave 2026"}
        />
      </div>

      <div className="row">
        {roundtablelist?.map((data, i) => (
          <div
            className="col-lg-6 mb-4"
            key={i}
            onClick={() => {
              setselectedRoundTable(data?.id);
              handleRountableAdd(data?.id);
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
              time={data?.time}
              speaker={data?.coordinator_name}
              status={data?.status}
              removeEvents={(id) => handleRoundtableRemove(id)}
              isSelected={
                data?.id == selectedRoundTable ||
                eventAuth?.some((event) => event?.id == data?.id)
              }
              isselectbtn={true}
            />
          </div>
        ))}
      </div>

      <div
        className={`${styles.inputgroup} mt-4`}
        onClick={() => {
          handleNext(6);
        }}
      >
        <Button title={"Next"} bgcolor={"#00A0E3"} colors={"#ffff"} />
      </div>
    </section>
  );
};

export default RoundTable;
