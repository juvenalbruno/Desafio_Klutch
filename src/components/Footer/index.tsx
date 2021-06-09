import React from "react";
import styled from "styled-components";

export default function Footer(props) {
  function handleSubmit() {
    console.log("foi");
  }

  return (
    <Container>
      <Wrapp>
        <Value>
          <h1>Nome: </h1>
          <h1>{props.Tabela}</h1>
        </Value>
        <Value>
          <h1>Parcelas: </h1>
          <h1>{props.Parcelas}</h1>
        </Value>
        <Value>
          <h1>Valor da Parcela: </h1>
          <h1>{props.ValorParcela}</h1>
        </Value>
      </Wrapp>

      <button onClick={(e) => handleSubmit}>Avançar</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;
  padding: 10px;
  background-color: var(--color-primary);

  button {
    height: 3vw;
    width: 11.7vw;
    margin-left: 25px;

    font-size: 1.5vw;

    cursor: pointer;

    color: var(--color-white);
    background-color: var(--color-secondary);
    border: 1px solid var(--color-secondary);
    border-radius: 5px;
  }
  button:active {
    background-color: var(--color-orange2);
  }
`;
const Wrapp = styled.div`
  display: flex;
`;
const Value = styled.div`
    padding: 0 20px;
    
    h1 {
        font-size: 30px;
        font-size: 2vw;
        color: var(--color-white);
    }
`;
