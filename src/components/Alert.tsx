import { type PropsWithChildren } from "react";
import  { useState } from "react";


type AlertProps = {
  title: any;
  msg: any;
};

export default function Alert ({ title, msg }: PropsWithChildren<AlertProps>) {
	const [show, setShow] = useState(true)

	const closeAlert = () => {
		setShow(false)
	}

	if (!show) {
		return null
	}

  return (
		<>
			<div>
				<div className="bg-emerald-700 text-white">
  	  		<div className="grid grid-cols-2 pl-2 md:pl-10">
						<div className="text-sm md:text-md">{title}<span className="pl-2">{msg}</span></div>

						<div className="ml-auto uppercase px-2 md:px-10">

						<button 
						onClick={() => closeAlert()}
						className="hover:bg-emerald-500 px-2 uppercase">
							close
						</button>
						</div>
    			</div>
				</div>
			</div>
		</>
  );
};