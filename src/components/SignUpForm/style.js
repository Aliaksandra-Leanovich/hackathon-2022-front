import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
`;

export const StyledInput = styled.input`
  width: 300px;
  padding: 10px 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgb(0, 0, 0);

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #999999;
  }
`;
export const StyledButton = styled.button`
  padding: 10px 0;

  text-align: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgb(255, 255, 255);

  background-color: #ff9500;

  cursor: pointer;

  &:hover {
    background-color: #999999;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 100%;

  padding: 16px 0;
`;
export const FormTitle = styled.p`
  font-size: 31px;
  font-weight: 400;
  margin-bottom: 35px;
`;
