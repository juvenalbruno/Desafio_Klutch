import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import TableComponent from "../components/TableComponent";
import Footer from "../components/Footer";
import Title from "../components/Title";

export default function Home() {
  const [Value, setValue] = useState<string>("");
  const [hability, setHability] = useState<boolean>(true);
  const [habilityTable, setHabilityTable] = useState<boolean>(true);
  
  useEffect(() => {
    const ValueTemp = parseInt(Value);
    {
      ValueTemp >= 300.0 && ValueTemp <= 10000.0
        ? setHability(false)
        : setHability(true);
    }
  },[Value]);

  function handleSubmit() {
    setHabilityTable(false);
  }

  return (
      <HomePage>
        <Sidebar />
        <Container>
         <Title Text="Simulação de Taxas" />
          <Wrapp>
            <h1>Valor Desejado</h1>
            <ValorWrapp>
              <InputValue>
                <p>R$ </p>
                <input
                  type="number"
                  name={Value}
                  id="money"
                  placeholder="0,00"
                  onChange={(e) => setValue(e.target.value)}
                />
              </InputValue>
              <button disabled={hability} onClick={handleSubmit}>
                Calcular
              </button>
            </ValorWrapp>
          </Wrapp>
        </Container>

        {!habilityTable && <TableComponent />}
        {!habilityTable && <Footer /> }

      </HomePage>
  );
}

const HomePage = styled.div`
  min-height: 100vh;
`;
const Container = styled.div`
  max-width: 100vw;
`;

const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 68px;

  h1 {
    font-size: 2.95vw;
    color: var(--color-primary);
  }
`;
const ValorWrapp = styled.div`
  margin-top: 15px;
  display: flex;

  button {
    height: 3.9vw;
    width: 11.7vw;
    margin-left: 25px;

    font-size: 1.5vw;

    cursor: pointer;

    color: var(--color-white);
    background-color: var(--color-secondary);
    border: 1px solid var(--color-secondary);
  }
  button:active {
    background-color: var(--color-orange2);
  }
`;
const InputValue = styled.div`
  height: 3.9vw;
  width: 28vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  align-items: center;
  border-radius: 4px;

  font-size: 1.5vw;

  background-color: var(--color-background);
  color: var(--color-font);

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input {
    border: 0;
    background-color: transparent;
    margin-left: 10px;
    font-size: 1.5vw;
    color: var(--color-font);
    display: flex;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;
