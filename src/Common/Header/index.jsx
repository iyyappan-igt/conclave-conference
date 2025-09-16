import Image from "next/image";
import Button from "../Button";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-2">
          <div className={styles.brandlogo}>
            <Image
              width={175}
              height={55}
              src={"/assets/Opthall_Logo.png"}
              onClick={() => {
                router.replace("/");
              }}
            />
          </div>
          <Button
            title={"Register Now"}
            colors={"#ffff"}
            bgcolor={"#00A0E3"}
            link={"/register"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
