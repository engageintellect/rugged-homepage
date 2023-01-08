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
        <div className="bg-fuchsia-700 text-white">
          <div className="mx-auto flex items-center px-2 sm:px-4 xl:container xl:px-0">
            <div className="md:text-md text-sm">
              {title}
              <span className="pl-2">{msg}</span>
            </div>
            <div className="ml-auto flex items-center uppercase">
              <button
                name="close"
                onClick={() => closeAlert()}
                className="rounded-full hover:bg-fuchsia-500"
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
