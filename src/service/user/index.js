import { _axios } from "@/helper/axios";

export class AuthApis {
  getConferenceMembershipVerification = async (obgcode) => {
    return await _axios("get", `/conference-member/${obgcode}`);
  };

  getConferenceRegistrationStatus = async (obgcode, conferenceId) => {
    return await _axios(
      "get",
      `/conference-registers/${obgcode}/${conferenceId}`
    );
  };

  conferenceRegister = async (values) => {
    return await _axios("post", `/conference-register`, values);
  };
}
