import { useSelector } from "react-redux";

export function useAuth() {
  const conference = useSelector((state) => state.auth.conference);
  const events = useSelector((state) => state.auth.events);
  const userdetails = useSelector((state) => state.auth.userdetails);
  const conferenceDetails = useSelector((state) => state.auth.conferenceDetails)
  return { conference, events, userdetails, conferenceDetails };
}
