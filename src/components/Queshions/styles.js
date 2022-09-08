import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 40px;
  /* background-color: #5e5e73; */
`;

export const ContainerAnswers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Answer = styled.div`
  width: 600px;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 15px;

  font-size: 16px;
  line-height: 1.7;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;

  background-color: #a06cd5;
  color: #fff;

  transition: all 0.5s ease-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const Queshion = styled.p`
  font-size: 19px;
  font-style: normal;
  letter-spacing: 0.7px;
  font-weight: 600;

  margin-bottom: 20px;
`;

export const ContainerBlock = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 4fr 1fr;
`;
export const Image = styled.img`
  width: 500px;
`;
