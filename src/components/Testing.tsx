import Image from "next/image";

import zebra from "/public/images/partners/v5.png";

export default function Testing() {
  return (
    <div className="relative h-16 w-16">
      <Image
        src={zebra}
        alt="Picture of the author"
        layout="fill" // required
        objectFit="cover" // change to suit your needs
        // className="rounded-full" // just an example
      />
    </div>
  );
}
