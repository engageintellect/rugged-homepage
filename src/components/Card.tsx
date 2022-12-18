import { type PropsWithChildren } from "react";

type CardProps = {
  title: string;
  description: string;
  url: string;
};

export default function Card({
  title,
  description,
  url,
}: PropsWithChildren<CardProps>) {
  return (
		<>
   	 <a href={url}>
      	<div className="overflow-hidden rounded-lg h-24 lg:h-32 xl:h-24 bg-neutral-700 p-4 text-white hover:bg-neutral-600 transition-colors duration-300 hover:shadow-md">
        	<div className="text-xl font-semibold md:text-2xl">{title}</div>
        	<div className="text-neutral-400">{description}</div>
      	</div>
    	</a>
		</>
  );
}
