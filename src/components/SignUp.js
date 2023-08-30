import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const SignUp = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          jobRole: "",
          gender: "",
          message: "",
          skills: [],
        }}
        onSubmit={(values, tt) => {
          console.log(values);
          tt.resetForm();
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .min(2, "Too Short!")
            .max(10, "Too Long!")
            .required("Required"),
          lastName: Yup.string()
            .min(2, "Too Short!")
            .max(10, "Too Long!")
            .required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string()
            .min(2, "Too Short!")
            .max(10, "Too Long!")
            .required("Please Enter Your Password"),
          confirmPassword: Yup.string()
            .min(2, "Too Short!")
            .max(10, "Too Long!")
            .required("Please Confirm Your Password")
            .oneOf([Yup.ref("password"), null], "Please Must Match"),
          jobRole: Yup.string().oneOf(
            ["JopRole", "Developer", "Designer", "QA"],
            "Invalid Job Role"
          ),
          gender: Yup.string().required("Please Choose Gender"),
          message: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Please Enter Your Message"),
          skills: Yup.array().min(1 , "Please Select Your Skills"),
        })}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <Field name="firstName" type="text" placeholder="firstName" />
            <ErrorMessage
              component="label"
              className="text-danger"
              name="firstName"
            />
            <Field name="lastName" type="text" placeholder="lastName" />
            <ErrorMessage
              component="label"
              className="text-danger"
              name="lastName"
            />
            <Field name="email" type="email" placeholder="email" />
            <ErrorMessage
              component="label"
              className="text-danger"
              name="email"
            />
            <Field name="password" type="password" placeholder="password" />
            <ErrorMessage
              component="label"
              className="text-danger"
              name="password"
            />
            <Field
              name="confirmPassword"
              type="password"
              placeholder="confirmPassword"
            />
            <ErrorMessage
              component="label"
              className="text-danger"
              name="confirmPassword"
            />
            <Field as="select" name="jobRole" className="form-control">
              <option value="JopRole"> Jop Role</option>
              <option value="Developer">Developer </option>
              <option value="Designer">Designer </option>
              <option value="QA"> Quality Analists</option>
            </Field>
            <ErrorMessage
              component="label"
              className="text-danger"
              name="jobRole"
            />
            <label className="my-2">Gender</label>
            <Field name="gender" type="radio" value="male" /> Male
            <Field name="gender" type="radio" value="female" /> Female
            <ErrorMessage
              component="label"
              className="text-danger"
              name="gender"
            />
            <Field
              as="textarea"
              name="message"
              placeholder="write your message"
              className="form-control"
            />
            <ErrorMessage
              component="label"
              className="text-danger"
              name="message"
            />
            <label className="my-2">Skills</label>
            <Field type="checkbox" name="skills" value="Node" /> Node
            <Field type="checkbox" name="skills" value="React" /> React
            <Field type="checkbox" name="skills" value="Php" /> Php
            <ErrorMessage
              component="label"
              className="text-danger"
              name="skills"
            />
            <button type="submit" className="btn btn-success">
              SignUp
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
