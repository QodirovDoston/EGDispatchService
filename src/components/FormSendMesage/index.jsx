"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Toaster, toast } from "sonner";


const index = () => {
  const handleSubmit = async (values, { setSubmitting,resetForm }) => {
    try {
      const apiToken = "6402787332:AAGe48en3Glu2axj5LIw8mfoJjOpahpZrDc";
      const chatId = "879345313";
      const message = `

        New message from user:
        👤 Name: ${values.firstName} ${values.lastName}
        📪 Email: ${values.email}
        ✉️ Message: ${values.message}
        ☎️ Phone: ${values.phone}
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
      toast.error("Error sending message.");
    } finally {
      setSubmitting(false);
    }

  };

  return (
    <div>
      <div className="px-7 mt-20 shadow-2xl overflow-hidden">
        <Toaster richColors position="top-right" />
        <h1 className="text-center text-4xl font-bold py-6 text-gray-700">
          Contact Us
        </h1>
        <p className="text-xl text-text-color">"*" indicates required fields</p>
        <div className="px-1 py-8">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message:"",
              phone: "",
            }}
            validationSchema={Yup.object(
              {
                firstName: Yup.string().required('Name is required'),
                lastName: Yup.string().required('Last name is required'),
                email: Yup.string().email('Invalid email address').required('Email is required'),
                message: Yup.string().required('Message is required'),
                phone: Yup.string().required('Phone number is required'),
              }
            )}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) =>
              <Form>
                <div className='grid xl:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                <div className="">
                <label className="ms-2 text-sm font-bold text-text-color">
                First Name *  <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary-dark caret-primary  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
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
                <div className=" mb-4">
                <label className="ms-2 text-sm font-bold text-text-color">
                Last Name *  <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary-dark caret-primary  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
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
                </div>
                <div className='grid xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4'>
                <div className="">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Email *  <br />
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
                <div >
                <label className="ms-2 text-sm font-bold text-text-color">
                Phone Number* <br />
                  </label>
                  <Field type="tel" id="phone" name="phone">
                    {({ field, form }) =>
                      <div>
                        <PhoneInput
                          defaultCountry="US"
                          className="px-2 py-2.5 border border-gray-300 focus:bg-white text-gray-900 text-sm rounded-[4px]"
                          {...field}
                          placeholder="Enter phone number"
                          onChange={value =>
                            form.setFieldValue(field.name, value)}
                          onBlur={() => form.setFieldTouched(field.name, true)}
                        />
                        <ErrorMessage
                          className="text-[12px] text-red-600"
                          name="phone"
                          component="div"
                        />
                      </div>}
                  </Field>
                </div>
                </div>
                  <div className="my-4 ">
                  <label className="ms-2 text-sm font-bold text-text-color">
                  Message* <br />
                  </label>
                    <Field
                    as="textarea"
                      // type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Message"
                      id="message"
                      name="message"
                    />
                    <ErrorMessage
                      className="text-[12px] text-red-600"
                      name="message"
                      component="message"
                    />
                  </div>
                {/* <div className="my-3">
                <label className="ms-2 text-sm font-bold text-text-color">
                CAPTCHA <br />
                  </label>
                  <ReCAPTCHA
                  className='max-w-[200px]'
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                  />
                </div>   */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white rounded-[22px] bg-primary duration-150 transition hover:bg-primary-dark font-medium text-lg  px-5 py-2.5 text-center hover:scale-105"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </Form>}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;
