import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import StudentForm from "./StudentForm";

const EditStudent = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    studentId: "",
  });

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/students/update-student/${id}`)
      .then((res) => {
        const { name, email, studentId } = res.data;
        setFormValues({ name, email, studentId });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const onSubmit = (studentObject) => {
    axios
      .put(`http://localhost:4000/students/update-student/${id}`, studentObject)
      .then((res) => {
        if (res.status !== 200) {
          Promise.reject();
        }
        alert("Student successfully updated");
        navigate("/student-list");
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log(err);
      });
  };

  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Student
    </StudentForm>
  );
};

export default EditStudent;
