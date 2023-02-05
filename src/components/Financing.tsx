import { type PropsWithChildren } from "react";
import WideCard from "./WideCard";
import { FaMoneyBill } from "react-icons/fa";

type CardProps = {
  title?: string;
  url?: string;
};

export default function Financing({
  title,
  url,
}: PropsWithChildren<CardProps>) {
  return (
    <>
      <div className="bg-gradient-to-r from-emerald-500/50 to-emerald-700/50">
        <div
          id="financing"
          className="mx-auto flex h-96 items-center justify-center px-2"
        >
          <WideCard
            title="Financing"
            description="Get your equipment today and make no payments for up to 6 months."
            url="/#form"
            icon={<FaMoneyBill />}
          />
        </div>
      </div>
    </>
  );
}
