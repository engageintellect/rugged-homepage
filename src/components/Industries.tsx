// import WideCard from "./WideCard"

import Indusrty from "./Industry"
import Image from "next/image"




export default function Industries(){
	return (
		<>
        <div className=" bg-neutral-800" id="learn_more">
					
					
					<div className="py-20 p-2 lx:px-10">
						<div className="text-white text-5xl sm:text-6xl md:text-7xl font-semibold text-center pb-2">Industries</div>
        		<div className="text-neutral-400 md:text-xl text-center">"hello there world, how are you doing today?"</div>


					</div>


          <div className="flex h-1/2 p-2 gap-2 md:gap-4 md:p-4 overflow-x-auto scroll-hide">
						<div>
							<Indusrty title="Cannabis" description="Description" url="https://www.google.com" img="/images/industries/1.png"/>
						</div>
          
						<div>
							<Indusrty title="Racing" description="Description" url="https://www.google.com" img="/images/industries/1.png"/>
						</div>
 				
						<div>
							<Indusrty title="Aerospace" description="Description" url="https://www.google.com" img="/images/industries/1.png"/>
						</div>
 			
						<div>
							<Indusrty title="Title" description="Description" url="https://www.google.com" img="/images/industries/1.png"/>
						</div>
 		
						<div>
							<Indusrty title="Title" description="Description" url="https://www.google.com" img="/images/industries/1.png"/>
						</div>
 
						<div>
							<Indusrty title="Title" description="Description" url="https://www.google.com" img="/images/industries/1.png"/>
						</div>

						<div>
							<Indusrty title="Title" description="Description" url="https://www.google.com" img="/images/industries/1.png"/>
						</div>
					</div>
        </div>
		</>
	)
}