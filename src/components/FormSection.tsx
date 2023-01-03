import FormikForm from "./FormikForm";

export default function FormSection() {
  return (
    <>
      <div
        id="form"
        className="flex min-h-screen items-center justify-center bg-neutral-900 p-5 py-20 text-white md:p-20"
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
          </div>

          <div className="text-center">
            <div className="w-full py-5 text-lg md:max-w-xl md:text-xl">
              Let's work together to develop a solution that fits your budget,
              timeline and objectives. Our experts are committed to helping you
              select a solution that matches your specific needs."
            </div>
          </div>
          <FormikForm />
        </div>
      </div>
    </>
  );
}
