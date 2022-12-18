import { type PropsWithChildren } from "react";

type CardProps = {
  title: any;
  msg: any;
	card_class: any;
};

export default function CardStackCard({title, msg, card_class}:PropsWithChildren<CardProps>) {
	return(
		<>
			<div className={card_class}>
				<div className="text-xl font-semibold md:text-2xl text-white pb-4">
					{title}
				</div>
				<div className="text-white overflow-hidden">
					{msg}
				</div>
			</div>
		</>
	)
}
