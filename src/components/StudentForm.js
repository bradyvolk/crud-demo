import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
import "../styles/components/StudentForm.css";

const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have entered an invalid email address")
      .required("Required"),
    studentId: Yup.number()
      .positive("Student ID must be positive")
      .integer("Student ID must be an integer")
      .required("Required"),
  });

  console.log(props);

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <div className="form-group">
            <label>Full name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <Field name="email" type="text" className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </div>
          <div className="form-group">
            <label>Student ID</label>
            <Field name="studentId" type="number" className="form-control" />
            <ErrorMessage
              name="studentId"
              className="d-block invalid-feedback"
              component="span"
            />
          </div>
          <Button
            variant="danger"
            size="lg"
            type="submit"
            className="submit-button"
          >
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default StudentForm;
