import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
  const { _id, name, email, studentId } = props.obj;

  const deleteStudent = () => {
    axios
      .delete("http://localhost:4000/students/delete-student/" + _id)
      .then((res) => {
        if (res.status !== 200) {
          Promise.reject();
        }
        alert("Student successfully deleted");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{studentId}</td>
      <td>
        <Link className="edit-link" to={"/edit-student/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteStudent} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
