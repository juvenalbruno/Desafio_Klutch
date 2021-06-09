import React from "react";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

export default function Home() {
 
  return (
      <>
        <Sidebar />
        <Title Text="Solicitar Empréstimo" />

        <Container>
            <Busca>
                <h1>Busque o Cliente</h1>
                
                <Input>
                    <input type="number" placeholder="Digite o CPF" maxLength={11} />
                    <button>Buscar</button>
                </Input>
            </Busca>

            <Wrapp>
                <h1>Cliente encontrado</h1>
                <h2>000.000.000-00</h2>
                <h3>Lara Test</h3>

                <button>Solicitar</button>
            </Wrapp>
        </Container>
      </>
  );
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 55px;
`;
const Busca = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: 400;
        font-size: 33px;
        text-align: center;
        color: var(--color-primary);
    }
`;
const Input = styled.div`

    margin-top: 20px;

    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"] {
        background-color: var(--color-background);
        color: var(--color-font);
        border: 0;
        padding: 5px 10px;
        height: 31px;
        font-size: 18px;
        border-radius: 5px 0 0 5px;
    }
    input:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
    button {
        border: 0;
        background-color: var(--color-primary);
        color: var(--color-white);
        height: 41px;
        width: 85px;
        font-size: 17px;
        font-weight: 700;
        border-radius: 0 5px 5px 0;
        cursor: pointer;        
    }
    button:active {
        background-color: var(--color-blue2);
        color: var(--color-white);    
    }
`;
const Wrapp = styled.div`
    margin-top: 25px;
    height: 355px;
    width: 430px;
    background-color: var(--color-background);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;

    h1 {
        color: var(--color-font);
        font-weight: 300;
        margin: 18px 0;
    };
    h2 {
        font-size: 33px;
        font-weight: 300;
        color: var(--color-secondary);
        margin-bottom: 18px;
    }
    h3 {
        font-size: 33px;
        color: var(--color-primary);
    }

    button {
        width: 350px;
        height: 97px;
        margin-top: 18px;

        color: var(--color-white);
        background-color: var(--color-primary);

        border: 0;
        font-size: 39px;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
    }
    button:active {
        background-color: var(--color-blue2);
    }
`;