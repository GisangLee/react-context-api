import React, { useContext } from "react";
import { Button } from "antd";
import { CreateContext } from "./createContext";
import styled from "styled-components";

const Board2 = () => {
  const { number, increase, decrease } = useContext(CreateContext);
  return (
    <>
      <ButtonContainer>
        <ButtonContainer__col>
          <ButtonContainer__btn>
            <Button
              type="primary"
              danger
              shape="round"
              size="large"
              onClick={increase}
            >
              증가
            </Button>
          </ButtonContainer__btn>
          <ButtonContainer__btn>
            <Button
              type="primary"
              shape="round"
              size="large"
              onClick={decrease}
            >
              감소
            </Button>
          </ButtonContainer__btn>
        </ButtonContainer__col>
        <ButtonContainer__col>
          <h1>{number}</h1>
        </ButtonContainer__col>
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer__col = styled.div`
  display: flex;
  justify-content: center:
  align-items: center;
  padding: 1rem;
  margin-top: 1rem;
`;

const ButtonContainer__btn = styled.div`
  padding: 1rem;
`;

export default Board2;
