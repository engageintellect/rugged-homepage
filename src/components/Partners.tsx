
import Image from 'next/image'

import panasonic from '/public/images/partners/panasonic.png'
import v5 from '/public/images/partners/v5.png'
import zebra from '/public/images/partners/zebra.png'
import getac from '/public/images/partners/getac.png'
import proclip from '/public/images/partners/procliplogo.png'
import ruggon from '/public/images/partners/ruggon.png'







export default function Parnters(){
	return(
		<>
      <div
        className="py-10 bg-blue-900 xl:bg-gradient-to-r xl:from-blue-500 xl:to-orange-500 xl:via-blue-500 xl:animate-gradient-x xl:bg-cover xl:bg-center xl:shadow-lg"
        id="getting_started"
      >
        <div className="h-96 flex flex-col xl:flex-row gap-2 xl:gap-20 items-center justify-center">
          <div className="pb-5 text-5xl sm:text-6xl md:text-7xl font-semibold text-white flex justify-center" id="about">
            <a href="/">
              Our<span className="text-blue-400"> Partners</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="h-40 w-40 relative">
              <Image
                src={zebra}
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-full bg-white" // just an example
              />
            </div>

            <div className="h-40 w-40 relative">
              <Image
                src={panasonic}
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-full bg-white" // just an example
              />
            </div>

            <div className="h-40 w-40 relative">
              <Image
                src={getac}
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-full" // just an example
              />
            </div>

            <div className="h-40 w-40 relative">
              <Image
                src={v5}
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-full" // just an example
              />
            </div>

            <div className="h-40 w-40 relative">
              <Image
                src={proclip}
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-full" // just an example
              />
            </div>

            <div className="h-40 w-40 relative">
              <Image
                src={ruggon}
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-full" // just an example
              />
            </div>


          </div>
       </div>
      </div>
		</>
	)
}