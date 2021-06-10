import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

export default function SelectCart(){
    return(
        <>
            <Sidebar />
            <Title Text="Solicitar Empréstimo"/>
            <Container>
                <h1>Escolha a modalidade:</h1>
                <button><Link to="/solicitation/datacard">Cartão de Crédito</Link></button>
                <h2>Ou</h2>
                <button style={{backgroundColor: 'var(--color-blue-bloq)'}}>Crédito Consignado</button>
                <p>Em Breve</p>
                
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 55px;

    h1 {
        font-size: 33px;
        font-weight: 400;
        color: var(--color-primary);
        margin-bottom: 18px;
    }
    h2 {
        font-size: 33px;
        font-weight: 400;
        color: var(--color-font);
        margin: 18px 0;
    }
    button {
        height: 97px;
        width: 390px;
        border-radius: 5px;
        background-color: var(--color-primary);
        color: var(--color-white);
        font-weight: bold;
        font-size: 37px;
        cursor: pointer;
        border: 0;
    }
    button:active {
        background-color: var(--color-blue2);
    }
    p {
        width: 380px;
        text-align: end;
        color: var(--color-font);
    }

    a{
        text-decoration: none;
        color: var(--color-white);
    }
`;