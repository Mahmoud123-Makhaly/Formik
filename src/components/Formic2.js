import { Form, Formik, useField } from "formik";
import React from "react";
import * as Yup from "yup";
const Formic2 = () => {
  const INITIAL__VALUES = {};

  return (
    <div>
      <Formik
        initialValues={{ ...INITIAL__VALUES }}
        validationSchema={Yup.object().shape({})}
        onSubmit={(values, helpersFormik) => {
          console.log(values);
          helpersFormik.resetForm();
        }}
      >
        {() => <Form></Form>}
      </Formik>
    </div>
  );
};

export default Formic2;
