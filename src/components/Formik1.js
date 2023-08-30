import { Formik, Form, Field } from "formik";
import React from "react";
import * as Yup from "yup";
const Formik1 = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, helpersFormik) => {
          console.log(values);
          helpersFormik.resetForm();
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(2, "Too Short!")
            .max(10, "Too Long!")
            .required("Required"),
          password: Yup.string()
            .min(2, "Too Short!")
            .max(10, "Too Long!")
            .required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
        })}
      >
        {({errors, touched, isValid, dirty}) => (
          <Form>
            <Field name="name" type="text" placeholder="Name" fullWidth />
            {errors.name && touched.name ? (
              <p style={{ color: "red" }}>{errors.name}</p>
            ) : null}
            <Field name="email" type="email" placeholder="Email" fullWidth />
            {errors.email && touched.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : null}
            <Field
              name="password"
              type="password"
              placeholder="Password"
              fullWidth
            />
            {errors.password && touched.password ? (
              <p style={{ color: "red" }}>{errors.password}</p>
            ) : null}
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!isValid || !dirty}
            >
              click
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formik1;
