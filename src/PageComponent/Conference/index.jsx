import AboutOphthall from "@/Conference/AboutOphthall";
import AssociatePartner from "@/Conference/AssociatePartner";
import ConferenceBanner from "@/Conference/ConferenceBanner";
import ConferenceHightlights from "@/Conference/ConferenceHighlights";
import ForWhom from "@/Conference/ForWhom";
import JoinOphthall from "@/Conference/JoinOphthall";
import OrganizingChairman from "@/Conference/OrganizingChairman";
import Speakers from "@/Conference/speakers";
import VenueDetails from "@/Conference/VenueDetails";
import WhatYouLearn from "@/Conference/WhatYouLearn";
import { conferenceData } from "@/Constant/Conference/constant";

const ConferencePageComponent = () => {
  return (
    <>
      <ConferenceBanner data={conferenceData?.banner} />
      <AssociatePartner data={conferenceData?.participants} />
      <AboutOphthall data={conferenceData?.aboutOphthall} />
      <ConferenceHightlights data={conferenceData?.conferenceHightlights} />
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
