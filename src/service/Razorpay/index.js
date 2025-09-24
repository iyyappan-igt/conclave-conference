import { _axios } from "@/helper/axios";

export class RazorpayApis {
  RazorpayOrderId = async (data) => {
    return await _axios("post", "/create-order", data);
  };
}
