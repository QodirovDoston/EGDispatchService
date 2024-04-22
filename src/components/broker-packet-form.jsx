"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from 'sonner';

const BrokerPacketForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const apiToken = "6402787332:AAGe48en3Glu2axj5LIw8mfoJjOpahpZrDc";
      const chatId = "879345313";
    const  message = `
          New message from Broker Packet Form:
          🧑 First Name: ${values.firstName}
          🧑 Last Name: ${values.lastName}
          🏢 Company Name: ${values.companyName}
          🏠 Address: ${values.address}
          🛣 Street Address: ${values.streetAddress}
          🏙 Address Line 2: ${values.addressLine2}
          🌐 State: ${values.state}
          📮 ZIP: ${values.zip}
          ✉️ Email: ${values.email}
          📝 Message: ${values.message}
        `;
        const response = await fetch(
          `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
            message
          )}`,
          {method:"GET"}
        );
  
        if (response.status === 200) {
          toast.success("Message sent successfully! 🎉");
          resetForm();
        } else {
          toast.error("Error sending message.");
        }
      } catch (error) {
        console.log("Error sending message.");
      } finally {
        setSubmitting(false);
      }
  };
  return (
    <div>
      <div className="px-7 bg-white shadow-xl hover:shadow-2xl pt-10 duration-500 gap-9">
        <h1 className="text-text-color text-4xl font-bold text-center ">
          Broker Packet Form
        </h1>
        <p className="text-text-color text-2xl text-center py-5 font-bold">
          Contact Us for more information about Broker Packets:
        </p>
        <p className="text-text-color ">
          Thank you for your interest in{" "}
          <span className="text-primary cursor-pointer">
            {" "}
            EG Dispatch Service.
          </span>
        </p>

        <p className="text-text-color  py-4">
          We’re here to assist you in taking your small trucking business to new
          heights.
        </p>
        <p className="text-text-color">
          Please use the contact form below to get in touch with us.
        </p>
        <h1 className="text-gray-800 text-2xl  py-4 font-bold">
          How Can We Help You?
        </h1>
        <p className="text-gray-800 py-4">Let us know how we can assist you.</p>
        <p className="text-text-color ">
          Whether you’re seeking information about our dispatch services, or
          need guidance on industry-related matters, we’re here to provide the
          answers you need.
        </p>

        {/* <Toaster richColors position="top-right" /> */}
        <p className="text-xl text-text-color text-start mt-4">
          "*" indicates required fields
        </p>
        <div className="px-1 py-10">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              companyName: "",
              address: "",
              streetAddress: "",
              addressLine2: "",
              state: "",
              zip: "",
              email: "",
              message: ""
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("Name is required"),
              lastName: Yup.string().required("Last name is required"),
              companyName: Yup.string().required("company Name is required"),
              address: Yup.string().required("address is required"),
              streetAddress: Yup.string().required(
                "street Address is required"
              ),
              addressLine2: Yup.string().required("address Line 2 is required"),
              state: Yup.string().required("state is required"),
              zip: Yup.string().required("Zip is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              message: Yup.string().required("message is required")
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <div className="mb-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      FirstName * <br />
                    </label>
                    <Field
                      type="text"
                      className="border focus:caret-primary caret-primary-dark  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                      placeholder="First name"
                      id="firstName"
                      name="firstName"
                    />
                    <ErrorMessage
                      className="text-[10px] text-red-600"
                      name="firstName"
                      component="div"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      LastName * <br />
                    </label>
                    <Field
                      type="text"
                      className="border focus:caret-primary caret-primary-dark text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                      placeholder="Last Name"
                      id="lastName"
                      name="lastName"
                    />
                    <ErrorMessage
                      className="text-[10px] text-red-600"
                      name="lastName"
                      component="div"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Company Name * <br />
                    </label>
                    <Field
                      type="text"
                      className="border focus:caret-primary caret-primary-dark  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                      placeholder="Company Name"
                      id="companyName"
                      name="companyName"
                    />
                    <ErrorMessage
                      className="text-[10px] text-red-600"
                      name="companyName"
                      component="div"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Address * <br />
                    </label>
                    <Field
                      type="text"
                      className="border focus:caret-primary caret-primary-dark  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                      placeholder="Address"
                      id="address"
                      name="address"
                    />
                    <ErrorMessage
                      className="text-[10px] text-red-600"
                      name="address"
                      component="div"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Street Address <br />
                    </label>
                    <Field
                      type="text"
                      className="border focus:caret-primary caret-primary-dark  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                      placeholder="Street Address"
                      id="streetAddress"
                      name="streetAddress"
                    />
                    <ErrorMessage
                      className="text-[10px] text-red-600"
                      name="streetAddress"
                      component="div"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Address Line 2. City
                      <br />
                    </label>
                    <Field
                      type="text"
                      className="border focus:caret-primary caret-primary-dark  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                      placeholder="Address Line 2.  City"
                      id="addressLine2"
                      name="addressLine2"
                    />
                    <ErrorMessage
                      className="text-[10px] text-red-600"
                      name="addressLine2"
                      component="div"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      State / Province / Region <br />
                    </label>
                    <Field
                      type="text"
                      className="border focus:caret-primary caret-primary-dark  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                      placeholder="State"
                      id="state"
                      name="state"
                    />
                    <ErrorMessage
                      className="text-[10px] text-red-600"
                      name="state"
                      component="div"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      ZIP / Postal Code <br />
                    </label>
                    <Field
                      type="text"
                      className="border focus:caret-primary caret-primary-dark  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                      placeholder="ZIP"
                      id="zip"
                      name="zip"
                    />
                    <ErrorMessage
                      className="text-[10px] text-red-600"
                      name="zip"
                      component="div"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Email * <br />
                    </label>
                    <Field
                      type="email"
                      className="border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Email"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage
                      className="text-[12px] text-red-600"
                      name="email"
                      component="div"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="my-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Testimonial * <br />
                    </label>
                    <Field
                      as="textarea"
                      type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Message"
                      id="message"
                      name="message"
                    />
                    <ErrorMessage
                      className="text-[12px] text-red-600"
                      name="message"
                      component="div"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white rounded-[22px] bg-primary  transition hover:bg-primary-dark duration-500 font-medium text-lg  px-5 py-2.5 text-center"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default BrokerPacketForm;
