import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';

import Arquivo from '../assets/icons/_ionicons_svg_md-filing-2.svg'; 
import Docs from '../assets/icons/_ionicons_svg_ios-document.svg'; 
import Card from '../assets/icons/_ionicons_svg_ios-card.svg'; 
import Alert from '../assets/icons/_ionicons_svg_md-alert.svg'; 
import Success from '../assets/icons/_ionicons_svg_ios-checkmark-circle.svg'; 



export default function Details(){
    return(
        <>
            <Sidebar />
            <Title>
                <img src={Arquivo} alt="Arquivo" />
                <h1>Detalhe de Solicitação</h1>
            </Title>
            <ColumnWhrapp>
                <Column>
                    <h1>Solicitação gerada por <strong>Sistema Credfica</strong></h1>
                    <Wrapp>
                        <Content>
                            <h1>Valor Total</h1>
                            <span>R$ 6.000,00</span>
                        </Content>
                        <Content>
                            <h1>Valor a Depositar</h1>
                            <span>R$ 6.000,00</span>
                        </Content>
                        <Content>
                            <h1>Frente do cartão</h1>
                            <img src={Docs} alt="docs" />
                            <p>Ver Comprovante</p>
                        </Content>
                        <Content>
                            <h1>Verso do cartão</h1>
                            <img src={Docs} alt="docs" />
                            <p>Ver Comprovante</p>
                        </Content>
                        <Content>
                            <h1>Selfie com cartão</h1>
                            <img src={Docs} alt="docs" />
                            <p>Ver Comprovante</p>
                        </Content>
                    </Wrapp>
                </Column>
                <Column>
                <h1>Fluxo da Solicitação: <strong>Manual</strong></h1>
                <Modalidade>
                    <p>Modalidade</p>
                    <InfoCartao>
                        <h1>Cartão de Crédito <img src={Card} alt="cartao"/></h1>
                        <h1>Número do cartão: 5252 0565 6526 6552</h1>
                        <h1>Validade: 03/27     CVC: 254</h1>
                        <h1>1 parcela de <span>R$ 2000,00</span></h1>
                        <h1>Tabela: Tabela padrão</h1>
                    </InfoCartao>
                </Modalidade>
                <InfoClient>
                    <p>Informações do Gerais:</p>
                    <Info>
                        <h1>Data:  09/03/2020</h1>
                    </Info>
                </InfoClient>
                </Column>
            </ColumnWhrapp>
        </>
    );
}

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30.35px;
  padding-left: 10%;
   
    img {
    display: flex;
    justify-content: center;
    height: 8.5vw;
    margin-right: 2vw;
  }

  h1 {
    font-size: 4vw;
    line-height: 1;
    width: 22vw;
    color: var(--color-primary);
  }
`;

const ColumnWhrapp = styled.div`
margin-top: 55px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`;
const Column = styled.div`
    margin: 10px;
    h1 {
        color: var(--color-font);
        background-color: var(--color-background);
        font-size: 18px;
        margin-bottom: 18px;
        padding: 15px;
        border-radius: 5px;
    }
    strong {
        color: var(--color-primary);
    }
    span {
        color: var(--color-money);
    }
`;
const Wrapp = styled.div`

    img {
        height: 85px;
    }
`;
const Content = styled.div`
    display: flex;
    margin: 18px 0;
    background-color: var(--color-background);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 45px 25px;
`;
const Modalidade = styled.div``;
const InfoCartao = styled.div``;
const InfoClient = styled.div``;
const Info = styled.div``;