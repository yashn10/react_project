import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Crud.css";
import Table from "react-bootstrap/Table";
import { useForm } from "react-hook-form";

const Crud = ({ loginTableData, setLoginTableData }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (data) => {
    if (editingIndex === null) {
      setLoginTableData([
        ...loginTableData,
        { email: data.email, password: data.password },
      ]);
    } else {
      const updatedData = [...loginTableData];
      updatedData[editingIndex] = {
        email: data.email,
        password: data.password,
      };
      setLoginTableData(updatedData);
      setEditingIndex(null);
    }
    reset();
  };

  const handleDelete = (index) => {
    const updatedloginTableData = [...loginTableData];
    updatedloginTableData.splice(index, 1);
    setLoginTableData(updatedloginTableData);
  };

  const handleEdit = (index) => {
    const { email, password } = loginTableData[index];
    reset({ email, password });
    setEditingIndex(index);
  };
  return (
    <div>
      <h1>CRUD (User Management Table)</h1>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <Form
            className="main-form-wrap"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
                isInvalid={!!errors.email}
                autoComplete="email"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email && errors.email.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is Required",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                    message:
                      "Password must contain at least one letter, one number, and be at least 6 characters long",
                  },
                })}
                isInvalid={!!errors.password}
                autoComplete="current-password"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password && errors.password.message}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Password is valid
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit" className="submit-button">
                Submit
              </Button>
            </div>
          </Form>
        </div>
        {loginTableData && loginTableData.length > 0 && (
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loginTableData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>
                        <Button
                          className="btn-sm btn-info m-1"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </Button>
                        <Button
                          className="btn-sm btn-danger m-1"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Crud;
