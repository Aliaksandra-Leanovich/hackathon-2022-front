import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = () => {
    reset();
  };
  return (
    <Container>
      <div>
        Оставьте свои контактные данные,и мы свяжемся с вами в ближайшее время!
      </div>
      <SendForm onSubmit={handleSubmit(onSubmit)}>
        <SendInput
          type="text"
          placeholder="Имя"
          required="true"
          {...register("name")}
        />
        {/* <SendInput
          type="text"
          placeholder="Контактный телефон"
          {...register("phone", {
            pattern: "^+375 ((17|29|33|44)) [0-9]{3}-[0-9]{2}-[0-9]{2}$",
          })}
        /> */}
        <SendInput
          type="email"
          placeholder="Почта "
          required="true"
          {...register("email")}
        />
        <SendInput
          type="text"
          required="true"
          placeholder="Комментарий"
          {...register("comment")}
        />
        <SendBtn type="submit">Отправить</SendBtn>
      </SendForm>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SendForm = styled.form`
  display: grid;
  row-gap: 20px;

  margin: 20px 0;
  width: 100%;
  max-width: 500px;

  padding: 10px;
`;

const SendInput = styled.input`
  font-weight: 16px;
  line-height: 20px;

  color: black;

  padding: 16px;
  width: 100%;

  /* border-radius: 20px; */
  border: 2px solid black;

  &::placeholder {
    color: grey;
  }
`;

const SendBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  width: 100%;
  padding: 10px;

  /* border-radius: 25px; */
  border: none;

  cursor: pointer;
  background-color: #2667ff;
  color: white;

  &:hover {
    background-color: #072ac8;
  }
`;
