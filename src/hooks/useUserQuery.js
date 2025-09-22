import { setAuthData } from "@/redux/slices/auth/authSlice";
import { AuthApis } from "@/service/user";
import { useSnackbar } from "notistack";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";

const authApiData = new AuthApis();

export const membershipVeroficationQuery = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  return useMutation(
    async ({ value }) => {
      return await authApiData.getConferenceMembershipVerification(value);
    },
    {
      onSuccess: (data) => {
        enqueueSnackbar(`Membership verified successfully`, {
          variant: "success",
        });

        dispatch(
          setAuthData({
            userdetails: data?.data,
          })
        );
        queryClient.invalidateQueries(["membership"]);
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

export const useConferenceRegistrationStatus = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  return useMutation(
    async ({ obgcode, conferenceId }) => {
      return await authApiData.getConferenceRegistrationStatus(
        obgcode,
        conferenceId
      );
    },
    {
      onSuccess: (data) => {
        dispatch(
          setAuthData({
            events: data?.data?.conference_events,
            conference: {
              conference_amount_type: data?.data?.conference_amount_type,
              conference_amount: data?.data?.conference_amount,
            },
          })
        );

        queryClient.invalidateQueries(["conference-registration"]);
      },
      onError: (error) => {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Unable to verify registration status";
        console.error(message);
      },
    }
  );
};
