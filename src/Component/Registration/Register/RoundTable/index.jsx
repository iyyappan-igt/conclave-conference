import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";
import SessionCard from "@/Common/SessionCard";
import { useState } from "react";
import Button from "@/Common/Button";
import { useDispatch } from "react-redux";
import { useAuth } from "@/redux/selectors/auth/authSelector";
import { setAuthData } from "@/redux/slices/auth/authSlice";

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

    dispatch(
      setAuthData({
        events: {
          ...eventAuth, // keep existing
          [roundtableId]: roundtable, // add/overwrite selected
        },
      })
    );
  };

  return (
    <section className={styles.roundtabelsec}>
      <CommonTitle
        title={"Round Table Selection"}
        subtitle={"Choose your sessions for Ophthall Conclave 2026"}
      />

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
              isSelected={data?.id == selectedRoundTable}
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
