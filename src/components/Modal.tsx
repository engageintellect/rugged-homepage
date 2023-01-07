import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { PropsWithChildren } from "react";
import FormikForm from "./FormikForm";

type ModalProps = {
  title: string;
  description: string;
  showModal: boolean;
};

export default function Modal({
  title,
  description,
  showModal,
}: PropsWithChildren<ModalProps>) {
  const [modalShow, setModalShow] = useState(showModal);

  if (!modalShow) {
    return (
      <button
        className="bg-neutral-900 px-4 py-2 text-white"
        onClick={() => setModalShow(true)}
      >
        Open Modal
      </button>
    );
  } else {
    return (
      <>
        <button
          className="bg-green-700 px-4 py-2 text-white"
          onClick={() => setModalShow(true)}
        >
          Modal is Open
        </button>
        <div className="fixed top-[15%] z-50 w-full max-w-[700px] items-center justify-center rounded-lg border-2 border-neutral-700 bg-neutral-900 p-5 shadow-md transition-transform duration-200 hover:shadow-lg md:w-[66vw] xl:w-1/2">
          <div className="flex justify-end">
            <button onClick={() => setModalShow(false)}>
              <XCircleIcon className="w-7 rounded-full text-white hover:scale-105 hover:bg-neutral-900" />
            </button>
          </div>
          <div className="">
            <div className="pb-10">
              <div className="text-center text-6xl text-white">
                {title || "Let's do this!"}
              </div>
              <div className="text-center text-xl text-white">
                {description || "hello world"}
              </div>
            </div>

            <div className=" text-white">
              <FormikForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}
