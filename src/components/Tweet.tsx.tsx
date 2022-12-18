import { type PropsWithChildren } from "react";

import Logo from "../public/favicon.ico";

type CardProps = {
  title: string;
  description: string;
  url: string;
};

export default function Tweet({
  title,
  description,
	url,
}: PropsWithChildren<CardProps>) {
  return (
		<>
   	 <a href={"/"}>
      	<div className="overflow-hidden rounded-xl w-48 md:w-64 h-24 bg-neutral-700 p-1 text-white hover:bg-neutral-600 transition-colors duration-300 shadow-md">
					<div className="flex gap-2 items-center">
						<div className="h-7 w-7 rounded-full bg-blue-500"></div>
        		<div className="text-sm font-semibold md:text-md">{title}</div>
					</div>
        	<div className="text-white text-xs md:text-sm p-2">{description}</div>
      	</div>
    	</a>
		</>
  );
}

