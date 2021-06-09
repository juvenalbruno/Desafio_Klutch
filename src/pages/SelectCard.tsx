import React from 'react';
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
                <button>Cartão de Crédito</button>
                <button>Crédito Consignado</button>
                <p>Em Breve</p>
            </Container>
        </>
    );
}

const Container = styled.div`
    
`;