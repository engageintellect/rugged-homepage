
import Image from 'next/image'

import panasonic from '/public/images/partners/panasonic.png'
import v5 from '/public/images/partners/v5.png'
import zebra from '/public/images/partners/zebra.png'
import getac from '/public/images/partners/getac.png'
import proclip from '/public/images/partners/procliplogo.png'
import ruggon from '/public/images/partners/ruggon.png'


import Partner from './Partner'







export default function Parnters(){
	return(
		<>
      <div
        className="py-10 md:py-40 xl:py-10 bg-blue-900 xl:bg-gradient-to-r xl:from-blue-500 xl:to-orange-500 xl:via-blue-500 xl:animate-gradient-x xl:bg-cover xl:bg-center xl:shadow-lg"
        id="getting_started"
      >
        <div className="h-96 flex flex-col xl:flex-row gap-2 xl:gap-20 items-center justify-center">
          <div className="pb-5 text-5xl sm:text-6xl md:text-7xl font-semibold text-white flex justify-center" id="about">
            <a href="/">
              Our<span className="text-blue-400"> Partners</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4">

            <div>
              <Partner title="Zebra" description="cool man" url="https://www.zebra.com/us/en.html" img={zebra} />
            </div>

            <div>
              <Partner title="Panasonic" description="cool man" url="https://www.na.panasonic.com/" img={panasonic} />
            </div>

            <div>
              <Partner title="Getac" description="cool man" url="https://www.getac.com/" img={getac} />
            </div>

            <div>
              <Partner title="V5" description="cool man" url="https://v5systems.us/" img={v5} />
            </div>

            <div>
              <Partner title="Proclip" description="cool man" url="https://proclipusa.com" img={proclip} />
            </div>

            <div>
              <Partner title="Ruggon" description="cool man" url="https://ruggon.com" img={ruggon} />
            </div>


          </div>
       </div>
      </div>
		</>
	)
}