import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { FaArrowRight, FaCircleNotch } from "react-icons/fa";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formResponse, setFormResponse] = useState({
    status: "",
    message: "",
  });

  const displayResponse = (status: string, message: string) => {
    setFormResponse({
      status: status,
      message: message,
    });
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First Name Required."),
          lastName: Yup.string().required("Last Name Required."),
          company: Yup.string(),
          email: Yup.string()
            .email("Invalid E-Mail address")
            .required("E-Mail Required"),
          phone: Yup.string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, "Must be exactly 10 digits")
            .max(10, "Must be exactly 10 digits")
            .required("Phone Required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // Submit the form
          setSubmitting(false);
          setFormSubmitted(true);
          // console.log(values);
          resetForm();

          const data = {
            properties: {
              firstname: values.firstName,
              lastname: values.lastName,
              company: values.company,
              email: values.email,
              phone: values.phone,
            },
          };

          const response = await fetch("/api/submitForm", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
            },
            body: JSON.stringify(data),
          });
          const res = await response.json();

          if (res.status === "success") {
            //TODO add form data to database using prisma
          }
          displayResponse(
            res.data.status || "success",
            res.data.message ||
              "Thanks for reaching out, we'll be in touch soon!"
          );
          // console.log(formResponse);
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <div className="flex items-center justify-center">
            <Form className="grid w-full grid-cols-1 gap-2">
              <div className="">
                {(touched.firstName && errors.firstName && (
                  <label className="text-sm text-red-500">
                    {errors.firstName}
                  </label>
                )) || <label className="text-sm">First Name*</label>}
                <Field
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder=""
                  className="w-full rounded-md bg-neutral-700 p-2 text-white placeholder-neutral-700 outline-none transition-colors duration-200 focus:bg-neutral-500"
                />
              </div>

              <div className="">
                {(touched.lastName && errors.lastName && (
                  <label className="text-sm text-red-500">
                    {errors.lastName}
                  </label>
                )) || <label className="text-sm">Last Name*</label>}
                <Field
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder=""
                  className="w-full rounded-md bg-neutral-700 p-2 text-white placeholder-neutral-700 outline-none transition-colors duration-200 focus:bg-neutral-500"
                />
              </div>

              <div className="">
                {(touched.company && errors.company && (
                  <label className="text-sm text-red-500">
                    {errors.company}
                  </label>
                )) || <label className="text-sm">Company</label>}
                <Field
                  label="Company"
                  type="text"
                  name="company"
                  placeholder=""
                  className="w-full rounded-md bg-neutral-700 p-2 text-white placeholder-neutral-700 outline-none transition-colors duration-200 focus:bg-neutral-500"
                />
              </div>

              <div className="">
                {(touched.email && errors.email && (
                  <label className="text-sm text-red-500">{errors.email}</label>
                )) || <label className="text-sm">E-Mail*</label>}
                <Field
                  label="E-Mail"
                  type="email"
                  name="email"
                  placeholder=""
                  className="w-full rounded-md bg-neutral-700 p-2 text-white placeholder-neutral-700 outline-none transition-colors duration-200 focus:bg-neutral-500"
                />
              </div>

              <div className="">
                {(touched.phone && errors.phone && (
                  <label className="text-sm text-red-500">{errors.phone}</label>
                )) || <label className="text-sm">Phone*</label>}
                <Field
                  label="Phone"
                  type="text"
                  name="phone"
                  placeholder=""
                  className="w-full rounded-md bg-neutral-700 p-2 text-white placeholder-neutral-700 outline-none transition-colors duration-200 focus:bg-neutral-500"
                />
              </div>

              <div className="my-4">
                {/* MAKE FORM FEEDBACK RED IF ERROR, ELSE, MAKE GREEN */}

                <div className="pb-3 transition-opacity duration-500">
                  {formSubmitted && formResponse.status == "" && (
                    <div className="flex items-center justify-center gap-2 rounded-md bg-neutral-800 p-2 text-center text-xs">
                      <div>
                        <FaCircleNotch className="h-10 animate-spin text-xl" />
                      </div>
                      <div className="text-lg">Loading...</div>
                    </div>
                  )}
                  {(formResponse.status == "error" && (
                    <div className="flex items-center justify-center gap-2 rounded-md bg-red-600 p-2 text-center text-xs">
                      <div className="pulse animate-pulse">
                        <ExclamationCircleIcon className="w-10 text-white" />
                      </div>
                      <div>
                        <div>{formResponse.message}</div>
                      </div>
                    </div>
                  )) ||
                    (formResponse.status == "success" && (
                      <div className="flex items-center justify-center gap-2 rounded-md bg-green-600 p-2 text-center text-xs">
                        <div className="pulse animate-pulse">
                          <CheckCircleIcon className="w-10 text-white" />
                        </div>
                        <div>
                          <div>{formResponse.message}</div>
                        </div>
                        <a href="/">
                          <div className="underline">Back to Home</div>
                        </a>
                      </div>
                    ))}
                </div>

                <button
                  onClick={() => displayResponse}
                  type="submit"
                  disabled={isSubmitting}
                  className="transition-color group w-full animate-gradient-x rounded-md bg-gradient-to-r from-purple-700 to-blue-500 p-4 text-white shadow-xl outline-none duration-200 hover:from-purple-500 hover:to-blue-500 focus:outline-none active:scale-95"
                >
                  <div className="font-semibold">
                    Submit
                    <FaArrowRight className="ml-2 inline-block -rotate-45 transition-transform duration-200 group-hover:rotate-90" />
                  </div>
                </button>

                <div className="pt-5">
                  <div className="text-center font-bold">
                    Disclaimer:
                    <span className="pl-2 font-thin text-neutral-300">
                      We will never sell or share your information with anyone
                      else.
                    </span>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
