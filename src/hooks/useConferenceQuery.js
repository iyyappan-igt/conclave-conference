import { ConferenceApis } from "@/service/conference";
import { useQuery, useQueryClient } from "react-query";

const conferenceApiData = new ConferenceApis();

export const useConferenceQuery = () => {
  const queryClient = useQueryClient();
  const { data: ConferencesAllData, isLoading } = useQuery(
    ["Conference"],
    () => conferenceApiData.getAllConferences(),
    { staleTime: 1000 * 60 * 3 }
  );
  queryClient.invalidateQueries(["conference"]);
  const conferenceData =
    ConferencesAllData?.data?.find(
      (conference) => conference.status === "ongoing"
    ) || [];

  return { data: conferenceData, isLoading };
};
