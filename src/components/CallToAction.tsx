
import Form from "./Form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";



export default function CallToAction(){
	return(
		<>
      <div
        className="bg-neutral-800 p-5 md:p-10 py-20 text-white"
        id="contribute"
      >
        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="text-5xl font-semibold sm:text-6xl md:text-7xl">
              Let's<span className="text-blue-400"> Do</span> This!
            </div>

            <div>
              <a
                target="_blank"
                href="mailto:info@ruggeddevelopment.com"
              >
                <button className="text-xs rounded-lg bg-blue-800 p-4 text-white shadow-lg hover:bg-blue-700">
									<span className="pr-2">
      							<FontAwesomeIcon
        							icon={faEnvelope}
      							/>
									</span>
                  Email Us
                </button>
              </a>
            </div>
          </div>

          {/* //! TODO: Make this dynamic/interactive */}

          <div className="flex justify-center">
            <div className="w-full py-5 md:max-w-xl lg:w-1/2">
              <p>
                "Every organization is unique. Our experts are committed to helping you select a solution that matches your specific needs – from warehouse equipment to rugged computing and scanning."
              </p>
            </div>
          </div>

          {/* //!--------------------------------------------- */}
        	<Form />

      	</div>
  		</div>
		</>
	)
}