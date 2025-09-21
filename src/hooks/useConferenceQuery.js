import { setConferenceData, setConferenceDetails } from "@/redux/slices/auth/authSlice";
import { ConferenceApis } from "@/service/conference";
import { useQuery } from "react-query";

const conferenceApiData = new ConferenceApis();

export const useConferenceQuery = () => {

  const { data: ConferencesAllData, isLoading } = useQuery(
    ["Conference"],
    () => conferenceApiData.getAllConferences(),
    { staleTime: 1000 * 60 * 3 }
  );

  const conferenceData =
    ConferencesAllData?.data?.filter((conference) => conference.status === "ongoing") || [];

  return { data: conferenceData, isLoading };
};