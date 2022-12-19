import Image from "next/image";


import { type PropsWithChildren } from "react";


type IndustryProps = {
  title: string;
	description: string;
	url: string;
	img: any;


};

export default function Indusrty({
	title,
	description,
	url,
	img,
}:PropsWithChildren<IndustryProps>) {
	return(
		<div className="h-40 w-52 md:h-64 md:w-64 xl:h-96 xl:w-96 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg overflow-hidden p-2 shadow-lg transition-color duration-300">

			<div className="flex flex-col justify-center items-center h-full">

				<div>
					<div className="text-xl md:text-2xl font-semibold">
						{title}
					</div>
					<div className="text-sm md:text-md">
						{description}
					</div>
					<div className="text-sm md:text-md">
						{url}
					</div>
					<div className="text-sm md:text-md">
						{img}
					</div>
				</div>
				
			</div>
		</div>
	)
}