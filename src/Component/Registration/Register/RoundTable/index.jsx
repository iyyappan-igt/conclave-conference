import CommonTitle from "@/Common/CommonTitle";
import styles from "./styles.module.css";
import SessionCard from "@/Common/SessionCard";
import { useState } from "react";
import Button from "@/Common/Button";

const RoundTable = ({ roundtablelist, handleNext }) => {
  const [selectedRoundTable, setselectedRoundTable] = useState(0);

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
            }}
          >
            <SessionCard
              type={data?.type}
              amount={data?.amount}
              title={data?.title}
              overview={data?.overview}
              date={data?.date}
              time={data?.time}
              speaker={data?.speaker}
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
