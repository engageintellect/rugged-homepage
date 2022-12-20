import { type PropsWithChildren } from "react";

type CardProps = {
  title: any;
  msg: any;
  card_class: any;
};

export default function CardStackCard({
  title,
  msg,
  card_class,
}: PropsWithChildren<CardProps>) {
  return (
    <>
      <div className={card_class}>
        <div className="pb-4 text-xl font-semibold text-white md:text-2xl">
          {title}
        </div>
        <div className="overflow-hidden text-white">{msg}</div>
      </div>
    </>
  );
}
