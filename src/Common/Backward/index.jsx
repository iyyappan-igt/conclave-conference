import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const Backward = () => {
  return (
    <button type="button" className={styles.backButton}>
      <DynamicIcon name="arrow-left" size={30} />
    </button>
  );
};

export default Backward;
