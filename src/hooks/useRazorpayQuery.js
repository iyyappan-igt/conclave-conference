import { RazorpayApis } from "@/service/Razorpay";
import { useSnackbar } from "notistack";
import { useMutation } from "react-query";

const razorpayApiData = new RazorpayApis();

export const RazorpayOrderQuery = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    async ({ values }) => {
      return await razorpayApiData.RazorpayOrderId(values);
    },
    {
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
