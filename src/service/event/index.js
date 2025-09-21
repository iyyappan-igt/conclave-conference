import { _axios } from "@/helper/axios";

export class EventApis {
  getAllEvents = async (conference_id) => {
    return await _axios("get", `/conference-events/${conference_id}`);
  };
}
