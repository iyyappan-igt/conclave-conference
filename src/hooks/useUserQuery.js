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
      console.log("payload", value);
      return await authApiData.getConferenceMembershipVerification(value);
    },
    {
      onSuccess: (data) => {
        enqueueSnackbar(`Membership verified successfully`, {
          variant: "success",
        });

        dispatch(
          setAuthData({
            userdetails: data,
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
