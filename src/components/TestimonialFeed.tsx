import Testimonial from "./Testimonial";

import JohnManning from "/public/images/avatars/john_manning.jpg";
import KevinKelly from "/public/images/avatars/kevin_kelly.jpg";
import NolanSpringer from "/public/images/avatars/nolan_springer.jpg";
import Default from "/public/images/avatars/default.jpg";

export default function TestimonialFeed() {
  return (
    <div className="h-1/2 bg-neutral-900">
      <div className="scroll-hide mx-auto flex h-1/2 gap-2 overflow-x-auto p-2 xl:container xl:gap-4 xl:p-4">
        <Testimonial
          avatar={JohnManning}
          title="John Manning"
          position=""
          description="Thank you again for your recent assessment of our multifamily mid to high rise construction field operations. The rugged computing products specified along with the training and integration of this equipment with our field and office personal has proven invaluable. Your teams focus on our needs for systems integration, real time computing and communications was appreciated."
          url="https://airtable.com"
        />
        <Testimonial
          avatar=""
          title="Sean."
          position="Operations Manager"
          description=" Thank you for our radio and hardware needs. Process was handled professionally and with quick deployment. We will be using Rugged Development for future needs."
          url="https://algolia.com"
        />
        <Testimonial
          avatar={KevinKelly}
          title="Kevin Kelly"
          position="CIO, Worldwide."
          description=" Great product at a great price! Thank you Rugged Development for assisting us with all of our hardware office needs."
          url="https://airtable.com"
        />
        <Testimonial
          avatar=""
          title="Chris"
          position="IT Director, EMS."
          description="Thank you again for getting us our rugged tablets to help our air flight medical team...And helping us work through our new Android software issues. Rugged Development went above and beyond for us."
          url="https://airtable.com"
        />
        <Testimonial
          avatar={NolanSpringer}
          title="Nolan Springer"
          position="Business Owner"
          description=" I needed a new laptop for my company so that I could be more mobile, after scouring the internet I'm glad I stumbled upon Rugged. I got a re-certified mac air at a fraction of the cost compared to other places. When it comes to future IT purchases ill be going back here for sure!"
          url="https://algolia.com"
        />

        <Testimonial
          avatar={Default}
          title="@twitterhandle"
          position=""
          description="Airtable is a spreadsheet-database hybrid that lets you organize anything."
          url="https://airtable.com"
        />
        <Testimonial
          avatar=""
          title="@twitterhandle"
          position=""
          description="Algolia is a hosted search API for web and mobile applications."
          url="https://algolia.com"
        />
        <Testimonial
          avatar=""
          title="@twitterhandle"
          position=""
          description="Airtable is a spreadsheet-database hybrid that lets you organize anything."
          url="https://airtable.com"
        />
        <Testimonial
          avatar=""
          title="@twitterhandle"
          position=""
          description="Algolia is a hosted search API for web and mobile applications."
          url="https://algolia.com"
        />
        <Testimonial
          avatar=""
          title="@twitterhandle"
          position=""
          description="Algolia is a hosted search API for web and mobile applications."
          url="https://algolia.com"
        />
        <Testimonial
          avatar=""
          title="@twitterhandle"
          position=""
          description="Airtable is a spreadsheet-database hybrid that lets you organize anything."
          url="https://airtable.com"
        />
        <Testimonial
          avatar=""
          title="@twitterhandle"
          position=""
          description="Algolia is a hosted search API for web and mobile applications."
          url="https://algolia.com"
        />
      </div>
    </div>
  );
}
