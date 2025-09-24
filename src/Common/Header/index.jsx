import Image from "next/image";
import Button from "../Button";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setActiveStepNumber } from "@/redux/slices/auth/authSlice";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

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
          {/* {userdetails ? (
            <div className="d-flex align-items-center gap-2" onClick={()=>{router.replace("/register")}}>
              <div className={styles.profileimg}>
                <img src={userdetails?.profile} className="img-fluid" />
              </div>
              <div className={styles.profile}>
                <h4>{userdetails?.name}</h4>
                <h6>{userdetails?.obg_code}</h6>
              </div>
            </div>
          ) : (
            <Button
              title={"Register Now"}
              colors={"#ffff"}
              bgcolor={"#00A0E3"}
              link={"/register"}
            />
          )} */}

          <div
            onClick={() => {
              dispatch(setActiveStepNumber(1));
            }}
          >
            <Button
              title={"Register Now"}
              colors={"#ffff"}
              bgcolor={"#00A0E3"}
              link={"/register"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
