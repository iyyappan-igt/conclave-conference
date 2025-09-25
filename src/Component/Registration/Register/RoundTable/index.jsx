import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";
import SessionCard from "@/Common/SessionCard";
import Button from "@/Common/Button";
import { useDispatch } from "react-redux";
import { setAuthData } from "@/redux/slices/auth/authSlice";
import Backward from "@/Common/Backward";

const RoundTable = ({
  roundtablelist,
  handleNext,
  personalData,
  eventAuth,
}) => {

  const dispatch = useDispatch();

  const handleRountableAdd = (roundtableId) => {
    console.log(roundtableId)
    const roundtable = roundtablelist?.find((item) => item.id === roundtableId);
    if (!roundtable) return;
    console.log(roundtable)
    const currentSelected = eventAuth || [];
    const updatedEvents = currentSelected?.filter((e) => e.id !== roundtableId);
    console.log("roundtable",roundtable);
    dispatch(
      setAuthData({
        events: [...updatedEvents, roundtable],
      })
    );
  };

  const handleRoundtableRemove = (roundtableId) => {
    const currentSelected = eventAuth || [];
   console.log(currentSelected);
    const updatedEvents = currentSelected?.filter((e)=> e.id !== roundtableId);
    console.log(updatedEvents)
    dispatch(setAuthData({events:[...updatedEvents]}))
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
            className="col-lg-6  mb-4"
            key={i}
          >
            <SessionCard
            id={data?.id}
              type={data?.event_type}
               non_member_amount={
                personalData?.current_membership == "Life" ? data?.price : ""
              }
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
              speakerImage={data?.coordinator_image}
              designation={data?.coordinator_designation}
              status={data?.status}
              addEvents={(id)=>handleRountableAdd(id)}
              removeEvents={(id) => handleRoundtableRemove(id)}
              isSelected={
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
