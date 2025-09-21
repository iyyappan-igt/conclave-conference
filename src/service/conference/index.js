import { _axios } from "@/helper/axios";

export class ConferenceApis {
  getAllConferences = async () => {
    return await _axios("get", `/conferences`);
  };
}
