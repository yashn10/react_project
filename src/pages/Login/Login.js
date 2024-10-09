import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = ({ setIsLogin, addUserToTable, loginTableData }) => {
  const [isLogin, setIsLoginView] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const handleLoginSubmit = (data) => {
    const user = loginTableData.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (user) {
      setIsLogin(true);
    } else {
      setLoginError("No user found with the provided email and password");
    }
  };

  const handleSignupSubmit = (data) => {
    addUserToTable(data);
    setIsLogin(true);
  };

  const toggleForm = () => {
    setIsLoginView(!isLogin);
    reset();
    setLoginError(""); // Reset login error when toggling forms
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-container">
      {isLogin ? (
        <>
          <h1 className="login-form-title">Login Page</h1>
          <div className="login-form-wrap">
            <Form
              className="main-form-wrap"
              onSubmit={handleSubmit(handleLoginSubmit)}
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
                  type={showPassword ? "text" : "password"}
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

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Show Password"
                  onChange={togglePasswordVisibility}
                />
              </Form.Group>

              {loginError && (
                <div className="text-danger mb-3">{loginError}</div>
              )}

              <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  type="submit"
                  className="submit-button"
                >
                  Login
                </Button>
              </div>
            </Form>
            <p className="mt-3 text-center">
              Don't have an account?{" "}
              <button className="btn btn-link" onClick={toggleForm}>
                Sign Up
              </button>
            </p>
          </div>
        </>
      ) : (
        <>
          <h1 className="login-form-title">Sign Up Page</h1>
          <div className="signup-form-wrap">
            <Form
              className="main-form-wrap"
              onSubmit={handleSubmit(handleSignupSubmit)}
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
                  type={showPassword ? "text" : "password"}
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
                  autoComplete="new-password"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password && errors.password.message}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Password is valid
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is Required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  isInvalid={!!errors.confirmPassword}
                  autoComplete="new-password"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword && errors.confirmPassword.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Show Password"
                  onChange={togglePasswordVisibility}
                />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  type="submit"
                  className="submit-button"
                >
                  Sign Up
                </Button>
              </div>
            </Form>
            <p className="mt-3 text-center">
              Already have an account?{" "}
              <button className="btn btn-link" onClick={toggleForm}>
                Login
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
