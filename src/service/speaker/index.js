import { _axios } from "@/helper/axios";

export class SpeakerApis {
  getAllSpeakers = async (conference_id) => {
    return await _axios("get", `/conference-speakers/${conference_id}`);
  };
}
