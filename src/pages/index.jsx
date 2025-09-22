import ConferencePageComponent from "@/PageComponent/Conference";
import { clearAuthData } from "@/redux/slices/auth/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Conference = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAuthData());
  }, [dispatch]);
  return <ConferencePageComponent />;
};
export default Conference;
