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
  width: 100%;
  justify-content: space-around;
  margin-top: 25px;
  background-color: var(--color-primary);
`;
const Wrapp = styled.div`
  display: flex;
  padding: 8px;
`;
const Value = styled.div`
    padding: 0 20px;
    
    h1 {
        font-size: 30px;
        font-size: 2vw;
        color: var(--color-white);
    }
`;
