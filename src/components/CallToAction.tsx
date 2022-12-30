import Form from "./Form";

export default function CallToAction() {
  return (
    <>
      <div
        id="form"
        className="flex min-h-screen items-center justify-center bg-neutral-800 p-5 py-20 text-white md:p-20"
      >
        <div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="text-5xl font-semibold sm:text-6xl md:text-7xl">
              Let's
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Do
              </span>{" "}
              This!
            </div>

            {/* <div>
              <a target="_blank" href="mailto:info@ruggeddevelopment.com">
                <button className="rounded-lg bg-blue-800 p-4 text-sm text-white shadow-lg hover:bg-blue-700">
                  Email Us
                </button>
              </a>
            </div> */}
          </div>

          {/* //! TODO: Make this dynamic/interactive */}

          <div className="text-center">
            <div className="w-full py-5 text-lg md:max-w-xl md:text-xl">
              "Every organization is unique. Our experts are committed to
              helping you select a solution that matches your specific needs."
            </div>
          </div>
          <Form />
        </div>
      </div>
    </>
  );
}
