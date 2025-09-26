import AboutOphthall from "@/Component/Conference/AboutOphthall";
import AssociatePartner from "@/Component/Conference/AssociatePartner";
import ConferenceBanner from "@/Component/Conference/ConferenceBanner";
import ConferenceHightlights from "@/Component/Conference/ConferenceHighlights";
import ForWhom from "@/Component/Conference/ForWhom";
import HandsOnWorkshops from "@/Component/Conference/HandsOnWorkshops";
import JoinOphthall from "@/Component/Conference/JoinOphthall";
import OrganizingChairman from "@/Component/Conference/OrganizingChairman";
import RoundtableSessions from "@/Component/Conference/RoundtableSessions";
import Speakers from "@/Component/Conference/speakers";
import VenueDetails from "@/Component/Conference/VenueDetails";
import WhatYouLearn from "@/Component/Conference/WhatYouLearn";
import { conferenceData } from "@/Constant/Conference/constant";
import { useConferenceQuery } from "@/hooks/useConferenceQuery";
import { getAllEventByConfernceIdQuery } from "@/hooks/useEventQuery";
import { getAllSpeakerByConfernceIdQuery } from "@/hooks/useSpeakerQuery";
import { useEffect, useState } from "react";
const ConferencePageComponent = () => {
  const [session, setsession] = useState();
  const [speakerList, setspeakerList] = useState();

  const { data: conference } = useConferenceQuery();
  const { mutate: eventMutate } = getAllEventByConfernceIdQuery();
  const { mutate: speakerMutate } = getAllSpeakerByConfernceIdQuery();

  const data_workshops = session
    ? session.filter((item) => item.event_type == "workshop")
    : [];
  const data_roundTables = session
    ? session.filter((item) => item.event_type == "roundtable")
    : [];

  useEffect(() => {
    if (conference?.id) {
      eventMutate(
        { value: conference?.id },
        {
          onSuccess: (data) => {
            setsession(data?.data);
          },
        }
      );

      speakerMutate(
        { value: conference?.id },
        {
          onSuccess: (data) => {
            setspeakerList(data?.data);
          },
        }
      );
    }
  }, [conference?.id]);

  console.log("fff" , speakerList)

  return (
    <>
      <ConferenceBanner data={conferenceData?.banner} />
      <AssociatePartner data={conferenceData?.participants} />
      <AboutOphthall data={conferenceData?.aboutOphthall} />
      <ConferenceHightlights data={conferenceData?.conferenceHightlights} />
      {data_workshops?.length > 0 ? (
        <HandsOnWorkshops workshopsData={data_workshops} />
      ) : (
        ""
      )}
      {data_roundTables?.length > 0 ? (
        <RoundtableSessions roundtableData={data_roundTables} />
      ) : (
        ""
      )}
      <ForWhom data={conferenceData?.forwhom} />
      <Speakers data={conferenceData?.speakers} />
      <WhatYouLearn data={conferenceData?.WhatYouLearn} />
      <VenueDetails data={conferenceData?.venueDetails} />
      <OrganizingChairman data={conferenceData?.organizingChairman} />
      <JoinOphthall data={conferenceData?.joinOphthall} />
    </>
  );
};

export default ConferencePageComponent;
