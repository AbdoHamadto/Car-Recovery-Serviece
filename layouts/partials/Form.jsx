"use client";

import InputText from "@layouts/components/InputText";
import contactUs from "@config/contact-us.json";
import TextArea from "@layouts/components/TextArea";
import { Formik, Form } from "formik";
import * as Yup from "yup";

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
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
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
            {/* حقل First Name */}
            <InputText
              {...inputFirstName}
              value={values.inputFirstName}
              onChange={handleChange}
              error={touched.inputFirstName && errors.inputFirstName}
              name="inputFirstName"
            />

            {/* حقل Last Name */}
            <InputText
              {...inputLastName} // تمرير خصائص inputLastName من contactUs
              value={values.inputLastName}
              onChange={handleChange}
              error={touched.inputLastName && errors.inputLastName}
              name="inputLastName" // إضافة name لتسهيل إدارة Formik
            />
          </div>

          {/* حقل Email */}
          <InputText
            {...inputEmail} // تمرير خصائص inputEmail من contactUs
            value={values.inputEmail}
            onChange={handleChange}
            error={touched.inputEmail && errors.inputEmail}
            name="inputEmail" // إضافة name لتسهيل إدارة Formik
          />

          {/* حقل Phone Number */}
          <InputText
            {...inputPhoneNumber} // تمرير خصائص inputPhoneNumber من contactUs
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
