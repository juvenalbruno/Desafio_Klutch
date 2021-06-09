import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

export default function DataCard(){
    return(
        <>
            <Sidebar />
            <Title Text="Solicitar Empréstimo"/>
            <Container>
                <Form>
                    <Column>
                        <h1>Insira os dados do Cartão:</h1>
                        <input type="text" name="" id="" placeholder="Nome no cartão"/>
                        <input id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="0000000000000000"/>
                        <input type="month" name="" id="" placeholder="Data de Validade" />
                        <input type="tel" inputMode="numeric" name="" id="" maxLength="3" placeholder="CVC" />
                    </Column>
                    <Column>
                    <h1>Faça o upload dos anexos do cartão:</h1>

                    <Card>
                        <p>Cartão de Crédito (Frente)</p>
                        <input type="file" id="files"/>
                        <label htmlFor="files">Adicionar</label>
                    </Card>
                    <Card>
                        <p>Cartão de Crédito (Verso)</p>
                        <input type="file" id="files"/>
                        <label htmlFor="files">Adicionar</label>
                    </Card>
                    <Card>
                        <p>Seldie com cartão de crédito</p>
                        <input type="file" id="files"/>
                        <label htmlFor="files">Adicionar</label>
                    </Card>
                    <p>Atençao: As fotos devem estar legíveis, com todas as informações visíveis do cartão.</p>
                </Column>
                </Form>
                <button>Continuar</button>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        width: 330px;
        height: 97px;
        margin: 18px 0;

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
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;

    margin-top: 55px;
`;
const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    width: 425px;
    height: 325px;

    h1 {
        text-align: center;
        font-size: 21px;
        color: var(--color-primary);
        font-weight: 400;
    }
    p {
        font-size: 18px;
        color: var(--color-primary);
        font-weight: 400;
        margin-top: 25px; 
    }
    
    input {
        margin-top: 25px;
        font-style: italic;
        font-weight: 600;
    }
    input[type="tel"], input[type="text"], input[type="month"], input[type="file"] {
        background-color: var(--color-background);
        color: var(--color-font);
        border: 0;
        padding: 5px 10px;
        height: 40px;
        font-size: 18px;
        border-radius: 5px 0 0 5px;
    }
    input:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`;
const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-background);
    height: 20px;
    align-items: center;
    margin-top: 25px; 
    padding: 15px;
    
    p {
        display: flex;
        color: var(--color-font);
        font-size: 18px;
        margin: 0;
        font-style: italic;
        font-weight: 600;
    };

    input {
        display: none;
        margin: 0;
    }

    label {
        color: var(--color-font);
        border-bottom: 1px solid var(--color-font);
        cursor: pointer;
    }
`;