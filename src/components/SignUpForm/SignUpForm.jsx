import React from "react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  StyledForm,
  FormTitle,
  Container,
  StyledInput,
  StyledButton,
} from "./style";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { reset, register } = useForm();

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  let config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST",
    },
  };

  let data = {
    password: password,
    email: email,
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post(
        "http://ec2-3-83-175-175.compute-1.amazonaws.com:8080/user/login",
        data,
        config
      );
      if (email === "" || password === "") {
        setError(true);
      } else {
        alert("User Registation Successfully");
        setSubmitted(true);
        setError(false);
        setEmail("");
        reset();
      }
    } catch (err) {
      alert("User Registation Failed");
    }
  }

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Usermsuccessfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <Container>
      <div>
        <FormTitle>Вход для администратора</FormTitle>
      </div>
      <div>
        {errorMessage()}
        {successMessage()}
      </div>

      <StyledForm>
        <StyledInput
          onChange={handleEmail}
          value={email}
          type="email"
          placeholder="Введите ваш email"
        />

        <StyledInput
          placeholder="Введите ваш пароль"
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <StyledButton onClick={handleSubmit} className="btn" type="submit">
          Войти
        </StyledButton>
      </StyledForm>
    </Container>
  );
};
