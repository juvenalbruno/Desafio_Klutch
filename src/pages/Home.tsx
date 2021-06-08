import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';

import IconPlus from '../assets/icons/arquivo.svg';


export default function Home(){
    return(
        <>
            <Sidebar />
            <Container>
                <TitleWrapp>
                    <IconPlus />
                    
                    <h1>Simulação<br/>de Taxas</h1>
                </TitleWrapp>
                <Wrapp>

                </Wrapp>
            </Container>
        </>
    );
}

const Container = styled.div`
    max-width: 100vw;

`;
const TitleWrapp = styled.div``;
const Wrapp = styled.div``;