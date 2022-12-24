import { type PropsWithChildren } from "react";
import { useState } from "react";

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
        <div className="bg-emerald-700 py-2 text-white">
          <div className="flex items-center px-2 md:px-10">
            <div className="md:text-md text-sm">
              {title}
              <span className="pl-2">{msg}</span>
            </div>
            <div className="ml-auto uppercase">
              <button
                onClick={() => closeAlert()}
                className="rounded-full bg-emerald-600 px-2 uppercase hover:bg-emerald-500"
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
