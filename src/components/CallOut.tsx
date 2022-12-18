export default function CallOut(){
	return(
		<>
      <div
        className="bg-blue-900 xl:bg-gradient-to-r xl:from-blue-500 xl:to-orange-500 xl:via-blue-500 xl:animate-gradient-x xl:bg-cover xl:bg-center xl:shadow-lg"
        id="getting_started"
      >
        <div className="h-96 flex flex-col xl:flex-row gap-2 xl:gap-20 items-center justify-center">
          <div className="pb-5 md:pb-0 text-5xl sm:text-6xl md:text-7xl font-semibold text-white flex justify-center" id="about">
            <a href="/">
              Our<span className="text-blue-400"> Partners</span>
            </a>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="w-16 h-16 md:w-32 md:h-32 bg-blue-400 rounded-full"></div>
            <div className="w-16 h-16 md:w-32 md:h-32 bg-blue-400 rounded-full"></div>
            <div className="w-16 h-16 md:w-32 md:h-32 bg-blue-400 rounded-full"></div>
            <div className="w-16 h-16 md:w-32 md:h-32 bg-blue-400 rounded-full"></div>
            <div className="w-16 h-16 md:w-32 md:h-32 bg-blue-400 rounded-full"></div>
            <div className="w-16 h-16 md:w-32 md:h-32 bg-blue-400 rounded-full"></div>
            <div className="w-16 h-16 md:w-32 md:h-32 bg-blue-400 rounded-full"></div>
            <div className="w-16 h-16 md:w-32 md:h-32 bg-blue-400 rounded-full"></div>
          </div>
       </div>
      </div>
		</>
	)
}