import Link from "next/link";

export default function Footer () {
  return (
		<>
  	  <div className="navbar sticky top-0 z-10 bg-neutral-900 py-2 text-lg text-white">
      	<div className="mx-2 md:mx-10">
        	<div className="grid grid-cols-2 items-center">
          	<div className="flex justify-start text-md md:text-2xl">
            	<Link href="/">
              	{/* Ne<span className="text-blue-500">x</span>um */}
              	Rugged Development
            	</Link>
          	</div>

          	<div className="flex justify-end">
            	<Link href="/">
              	<div className="cursor-pointer rounded-full bg-blue-700 px-2 hover:scale-105 hover:bg-blue-600">
                	v0.0.1
              	</div>
            	</Link>
          	</div>
        	</div>
      	</div>
    	</div>
		</>
  );
};

