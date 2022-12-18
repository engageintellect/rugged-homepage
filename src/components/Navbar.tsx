export default function Navbar () {
  return (
		<>
    	<div className="navbar sticky top-0 z-10 bg-neutral-900 py-2 text-lg text-white">
      	<div className="mx-2 md:mx-10">
        	<div className="grid grid-cols-2 items-center xl:grid-cols-3">
          	<div className="flex justify-start text-md md:text-2xl">
            	<a href="/">
              	Rugged<span className="text-blue-400"> </span>Development
            	</a>
          	</div>

          	<div className="hidden justify-center gap-4 xl:flex">
            	<a href="/about">About</a>
            	<a href="/news">News</a>
            	<a href="/contact">Contact Us</a>
            	<a href="/contribute">Contribute</a>
          	</div>
          	<div className="flex justify-end">
            	<div className="cursor-pointer rounded-full bg-blue-700 px-4 hover:scale-105 hover:bg-blue-600">
              	JC
            	</div>
          	</div>
        	</div>
      	</div>
    	</div>
		</>
  );
};

