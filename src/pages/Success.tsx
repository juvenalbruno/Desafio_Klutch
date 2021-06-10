import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

import {ReactComponent as Successs} from '../assets/icons/_ionicons_svg_ios-checkmark.svg';
import card from '../assets/icons/_ionicons_svg_ios-card.svg';

export default function Success(){
    return(
        <>
            <Sidebar/>
            <Title Text="Solicitar Empréstimo"/>
            <Container>
                <h5>Solicitação Realizada com Sucesso!</h5>
                <Columns>
                <span>Resumo da Solicitação</span>
                    <WhappColum>
                    <Column>
                        <Celula>
                            <p>João Paulo Guedes</p>
                            <p>71 9988-7766</p>
                            <Successs />
                        </Celula>
                        <Celula>
                            <img src={card} alt="card" />
                            <p>4327</p>
                            <h1>Visa</h1>
                            <p>02/24</p>
                            <Successs />
                        </Celula>
                        <Celula>
                            <h2>Valor desejado:</h2>
                            <h3>R$ 7.200,00</h3>
                            <Successs />
                        </Celula>
                    </Column>
                    <Column>
                    <Celula>
                        <h2>Taxa de Juros:</h2>
                        <h4>12%</h4>
                        <Successs />
                    </Celula>
                    <Celula>
                        <h2>Parcelas:</h2>
                        <h4>12</h4>
                        <Successs />
                    </Celula>
                    <Celula>
                        <h2>valor da Parcela:</h2>
                        <h3>R$ 433,33</h3>
                        <Successs />
                    </Celula>
                </Column>
                    </WhappColum>
                </Columns>
                <Whapp>
                    <Celula>
                        <h2>Valor Total do Empréstimo</h2>
                        <h3>R$ 7.200,00</h3>
                        <Successs />
                    </Celula>
                    <button><Link to="/solicitation/details">Detalhe da Solicitação</Link></button>
                    <p>O CredFica avaliará a solicitação.</p>
                </Whapp>
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

    h5 {
        text-align: center;
        color: var(--color-primary);
        font-size: 24px;
        margin-bottom: 15px;
    }
`;
const Columns = styled.div`
    width: 65vw;
    min-width: 425px;

    span {
        padding-left: 10px;
        color: var(--color-primary)
    }
`;
const WhappColum = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;
const Column = styled.div`
`;
const Celula = styled.div`
    width: 380px;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 15px 10px;
    padding: 15px;
    background-color: var(--color-confirm);    

    img, svg {
        width: 35px;
        color: var(--color-primary);        
    }

    p {
        font-style: italic;
        color: var(--color-font);
    }

    h1 {
        font-size: 16px;
    }
    h2 {
        color: var(--color-primary);
        font-style: italic;
        font-size: 18px;
    }
    h3 {
        color: var(--color-money);
    }
    h4 {
        color: var(--color-secondary);
        font-size: 18px;
    }
`;
const Whapp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 240px;
        height: 74px;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        background-color: var(--color-primary);
        margin: 18px 0;
    }

    a {
        text-decoration: none;
        color: var(--color-white);
    }
    
    p {
        color: var(--color-primary);
    }
`;