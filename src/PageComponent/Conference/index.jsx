import AboutOphthall from "@/Component/Conference/AboutOphthall";
import AssociatePartner from "@/Component/Conference/AssociatePartner";
import ConferenceBanner from "@/Component/Conference/ConferenceBanner";
import ConferenceHightlights from "@/Component/Conference/ConferenceHighlights";
import ForWhom from "@/Component/Conference/ForWhom";
import JoinOphthall from "@/Component/Conference/JoinOphthall";
import OrganizingChairman from "@/Component/Conference/OrganizingChairman";
import Speakers from "@/Component/Conference/speakers";
import VenueDetails from "@/Component/Conference/VenueDetails";
import WhatYouLearn from "@/Component/Conference/WhatYouLearn";
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
