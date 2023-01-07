import { trpc } from "../utils/trpc";
import { BeakerIcon } from "@heroicons/react/24/solid";

import Modal from "./Modal";

export default function Testing(props) {
  const response = trpc.people.getPeople.useQuery();
  let a = response.data;

  return (
    <>
      <div className="min-h-64 break-words bg-red-400">
        <div className="bg-red-500 font-bold text-white shadow-lg">
          <h1 className="p-2 uppercase">
            testing
            <span>
              <BeakerIcon className="h-12 w-12 text-white" />
            </span>
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <Modal
            title="hello world"
            description="this is a modal"
            showModal={false}
          />
        </div>

        <div className="p-2 text-white">
          {a?.map((item) => {
            return (
              <div className="p-2 text-white" key={item.id}>
                <div>
                  <strong>First: </strong>
                  {item.firstName}
                </div>
                <div>
                  <strong>Last: </strong>
                  {item.lastName}
                </div>
                <div>
                  <strong>Company: </strong>
                  {item.company}
                </div>
                <div>
                  <strong>Email: </strong>
                  {item.email}
                </div>
                <div>
                  <strong>Phone: </strong>
                  {item.phone}
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-5 bg-red-500"></div>
      </div>
    </>
  );
}
