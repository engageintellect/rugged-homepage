import { type PropsWithChildren } from "react";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

type AlertProps = {
  title: any;
  msg: any;
};

export default function Alert({ title, msg }: PropsWithChildren<AlertProps>) {
  const [show, setShow] = useState(true);

  const closeAlert = () => {
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <div>
        <div className="bg-emerald-700 text-white">
          <div className="flex items-center px-2 md:px-10">
            <div className="md:text-md text-sm">
              {title}
              <span className="pl-2">{msg}</span>
            </div>
            <div className="ml-auto flex items-center uppercase">
              <button
                onClick={() => closeAlert()}
                className="rounded-full bg-emerald-700 hover:bg-emerald-500"
              >
                <XCircleIcon className="w-7 text-white transition-transform duration-200 hover:scale-105" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
