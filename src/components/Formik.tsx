import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        company: Yup.string(),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.string()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(10, "Must be exactly 10 digits")
          .max(10, "Must be exactly 10 digits")
          .required("Required"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        // Submit the form
        setSubmitting(false);
        console.log(values);
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
        console.log("Form Response");
        console.log(res);
      }}
    >
      {({ isSubmitting, touched, errors }) => (
        <div className="flex items-center justify-center">
          <Form className="grid w-full grid-cols-1 gap-3 md:max-w-xl">
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
            />
            {touched.firstName && errors.firstName && (
              <div className="text-red-500">{errors.firstName}</div>
            )}

            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
            />
            {touched.lastName && errors.lastName && (
              <div className="text-red-500">{errors.lastName}</div>
            )}

            <Field
              type="text"
              name="company"
              placeholder="Company"
              className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
            />
            {touched.company && errors.company && (
              <div className="text-red-500">{errors.company}</div>
            )}

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
            />
            {touched.email && errors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}

            <Field
              type="text"
              name="phone"
              placeholder="Phone"
              className="rounded-md p-2 text-neutral-900 placeholder-neutral-700 outline-none focus:outline-blue-700"
            />
            {touched.phone && errors.phone && (
              <div className="text-red-500">{errors.phone}</div>
            )}
            <a id="#contribute">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full rounded-lg bg-blue-800 p-4 text-white shadow-lg transition-transform duration-200 hover:bg-blue-700 active:scale-95"
              >
                Submit
              </button>
            </a>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
