import { EventApis } from "@/service/event";
import { useSnackbar } from "notistack";
import { useMutation, useQuery, useQueryClient } from "react-query";

const EventApiData = new EventApis();

export const getAllEventByConfernceIdQuery = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    async ({ value }) => {
      console.log("cfid", value);

      return await EventApiData.getAllEvents(value);
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["events"]);
        return data?.data;
      },
      onError: (error) => {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong";
        enqueueSnackbar(message, { variant: "error" });
      },
    }
  );
};
