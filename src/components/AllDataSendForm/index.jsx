"use client";
import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import { toast } from "sonner";

const index = () => {
  const fileInputRef = useRef(null);
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values.file);
    try {
      const apiToken = "6402787332:AAGe48en3Glu2axj5LIw8mfoJjOpahpZrDc";
      const chatId = "879345313";
      const message = `
          New message from Testimonial Form:
🧑 Full Name: ${values.fullName}
✉️ Email: ${values.email}
🏢 Company Name: ${values.companyName}  
🌐 Company Website: ${values.companyWebsite}
🏙 Image: ${fileInputRef ? values.file : "No file attached"}
📝 testimonial: ${values.testimonial}
        `;
        const formData = new FormData();
        if (fileInputRef.current && fileInputRef.current.files.length > 0) {
          formData.append("file", fileInputRef.current.files[0]);
        }
      const response = await fetch(
        `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          message
        )}`,
        { method: "GET" }
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
      <div className="px-7 mt-20  overflow-hidden">
        <p className="text-xl text-text-color text-start">
          "*" indicates required fields
        </p>
        <div className="px-1 py-10">
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              companyName: "",
              companyWebsite: "",
              heading: "",
              testimonial: "",
              file: ""
            }}
            validationSchema={Yup.object({
              fullName: Yup.string().required("Full Name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              testimonial: Yup.string().required("Testimonial is required")
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <div className="mb-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Full Name * <br />
                    </label>
                    <Field
                      type="text"
                      className="border focus:caret-primary-dark caret-primary  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                      placeholder="Full name"
                      id="fullName"
                      name="fullName"
                    />
                    <p className="text-sm text-text-color text-start">
                      What is your full name?
                    </p>
                    <ErrorMessage
                      className="text-[10px] text-red-600"
                      name="fullName"
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
                    <p className="text-sm text-text-color text-start">
                      What is your email address?
                    </p>
                    <ErrorMessage
                      className="text-[12px] text-red-600"
                      name="email"
                      component="div"
                    />
                  </div>
                </div>
                <div className="mb-4 ">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Company Name <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary-dark caret-primary  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="Company Name"
                    id="companyName"
                    name="companyName"
                  />
                  <p className="text-sm text-text-color text-start">
                    What is your Company Name?
                  </p>
                  <ErrorMessage
                    className="text-[10px] text-red-600"
                    name="companyName"
                    component="div"
                  />
                </div>
                <div className="mb-4 ">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Company Website <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary-dark caret-primary  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="companyWebsite"
                    id="companyWebsite"
                    name="companyWebsite"
                  />
                  <p className="text-sm text-text-color text-start">
                    Does your company have a website?
                  </p>
                  <ErrorMessage
                    className="text-[10px] text-red-600"
                    name="companyWebsite"
                    component="div"
                  />
                </div>
                <div className="mb-4 ">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Heading <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary-dark caret-primary  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="Heading"
                    id="heading"
                    name="heading"
                  />
                  <p className="text-sm text-text-color text-start">
                    A headline for your testimonial.
                  </p>
                  <ErrorMessage
                    className="text-[10px] text-red-600"
                    name="heading"
                    component="div"
                  />
                </div>
                <div className="mb-4">
                  <div className="my-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Testimonial * <br />
                    </label>
                    <Field
                      as="textarea"
                      className="border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Testimonial"
                      id="testimonial"
                      name="testimonial"
                    />
                    <p className="text-sm text-text-color text-start">
                      What do you think about us?
                    </p>
                    <ErrorMessage
                      className="text-[12px] text-red-600"
                      name="testimonial"
                      component="div"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Photo <br />
                  </label>
                  <Field
                     type="file"
                     ref={fileInputRef}
                     className="text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                     id="file"
                     name="file"
                  />
                  <label className="ms-2 text-sm text-text-color">
                    Max. file size: 32 MB. <br />
                    Would you like to include a photo?
                  </label>
                  <ErrorMessage
                    className="text-[12px] text-red-600"
                    name="file"
                    component="div"
                  />
                </div>
                {/* {values.file && (
                  <div className="mb-4">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Uploaded Image <br />
                    </label>
                    <img
                      src={URL.createObjectURL(values.file)}
                      alt="Uploaded Image"
                      className="block w-32 h-32 object-cover rounded"
                    />
                  </div>
                )} */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white rounded-[22px] bg-primary duration-500 transition hover:bg-primary-dark font-medium text-lg  px-5 py-2.5 text-center hover:scale-105"
                >
                  {isSubmitting ? "Adding Testimon..." : "Add Testimon"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;
