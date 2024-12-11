"use client";

import InputText from "@layouts/components/InputText";
import contactUs from "@config/contact-us.json";
import TextArea from "@layouts/components/TextArea";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  inputFirstName: Yup.string().required("First name is required"),
  inputLastName: Yup.string().required("Last name is required"),
  inputEmail: Yup.string().email("Invalid email format").required("Email is required"),
  inputPhoneNumber: Yup.string()
    .matches(/^\d+$/, "Phone number must a number no string")
    .required("Phone number is required"),
  inputTextArea: Yup.string().min(20, "The Message must be at least 3 characters long").required("Message is required")
});

export default function CustomForm() {
  const initialValues = {
    inputFirstName: "",
    inputLastName: "",
    inputEmail: "",
    inputPhoneNumber: "",
    inputTextArea: ""
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: process.env.NEXT_PUBLIC_WEB3_FORMS_ACCESS_KEY,
        name: `${values.inputFirstName} ${values.inputLastName}`,
        email: values.inputEmail,
        phone: values.inputPhoneNumber,
        message: values.inputTextArea
      });

      if (response.status === 200 && response.data.success) {
        console.log("succes")
        toast.success("Operation was successful!");
        resetForm();
      } else {
        console.log("wrong!")
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("There was an error sending your message. Please try again.");
    }
  };

  const { inputFirstName, inputLastName, inputEmail, inputPhoneNumber } = contactUs;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form>
          <div className="flex space-x-4">
            <InputText
              {...inputFirstName}
              value={values.inputFirstName}
              onChange={handleChange}
              error={touched.inputFirstName && errors.inputFirstName}
              name="inputFirstName"
            />
            <InputText
              {...inputLastName}
              value={values.inputLastName}
              onChange={handleChange}
              error={touched.inputLastName && errors.inputLastName}
              name="inputLastName"
            />
          </div>
          <InputText
            {...inputEmail}
            value={values.inputEmail}
            onChange={handleChange}
            error={touched.inputEmail && errors.inputEmail}
            name="inputEmail"
          />
          <InputText
            {...inputPhoneNumber}
            value={values.inputPhoneNumber}
            onChange={handleChange}
            error={touched.inputPhoneNumber && errors.inputPhoneNumber}
            name="inputPhoneNumber"
          />
          <TextArea 
            value={values.inputTextArea}
            onChange={handleChange}
            error={touched.inputTextArea && errors.inputTextArea}
            name="inputTextArea"
          />
          <button
            className="bg-primary w-full text-center p-2 rounded-lg text-white hover:bg-hoverPrimary"
            type="submit"
          >
            Send Message
          </button>
        </Form>
      )}
    </Formik>
  );
}
