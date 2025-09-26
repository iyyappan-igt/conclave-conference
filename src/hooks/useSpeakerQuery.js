import { SpeakerApis } from "@/service/speaker";
import { useSnackbar } from "notistack";
import { useMutation, useQuery, useQueryClient } from "react-query";

const SpeakerApiData = new SpeakerApis();

export const getAllSpeakerByConfernceIdQuery = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    async ({ value }) => {
      return await SpeakerApiData.getAllSpeakers(value);
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["speaker"]);
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
