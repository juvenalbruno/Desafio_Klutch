import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

export default function Success(){
    return(
        <>
            <Sidebar/>
            <Title Text="Solicitar Empréstimo"/>
            <Container>
                <h1>Solicitação Realizada com Sucesso!</h1>
                <p>Resumo da Solicitação</p>
                <Column>
                    <Celula></Celula>
                    <Celula></Celula>
                    <Celula></Celula>
                </Column>
                <Column>
                    <Celula></Celula>
                    <Celula></Celula>
                    <Celula></Celula>
                </Column>
                <Whapp>
                    <Celula></Celula>
                    <button><Link to="">Detalhe da Solicitação</Link></button>
                    <p>O CredFica avaliará a solicitação.</p>
                </Whapp>
            </Container>
        </>
    );
}

const Container = styled.div``;
const Column = styled.div``;
const Celula = styled.div``;
const Whapp = styled.div``;