import { setConferenceData, setConferenceDetails } from "@/redux/slices/auth/authSlice";
import { ConferenceApis } from "@/service/conference";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";


const conferenceApiData = new ConferenceApis();

export const useConferenceQuery = () => {
  const dispatch = useDispatch();

  const { data: ConferencesAllData, isLoading } = useQuery(
    ["Conference"],
    () => conferenceApiData.getAllConferences(),
    { staleTime: 1000 * 60 * 3 }
  );

  const conferenceData =
    ConferencesAllData?.data?.filter((conference) => conference.status === "ongoing") || [];

  useEffect(() => {
    if (conferenceData.length > 0) {
      dispatch(setConferenceDetails(conferenceData));
    }
  }, [conferenceData, dispatch]);

  return { data: conferenceData, isLoading };
};