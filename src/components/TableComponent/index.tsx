import React from 'react';
import styled from 'styled-components';

import db from '../../database/db.json';

export default function TableComponent(){
    console.log(db.rateTable)
    return(
        <>
            <Tabela>
                <Radio>
                    <input type="radio" name="Tabel"/>
                </Radio>
                <TabelaContainer>
                    <h1>Tabela Padrão</h1>
                    <Row>
                        <Celulas>
                            <TitleColulas>
                                <h4>Parcela</h4>
                            </TitleColulas>
                                <Value>
                                    <p>ID</p>
                                </Value>
                        </Celulas>
                        <Celulas>
                            <TitleColulas>
                                <h4>Juros de Parcela</h4>
                            </TitleColulas>
                                <Value>
                                    <p>ID</p>
                                </Value>
                        </Celulas>
                        <Celulas>
                            <TitleColulas>
                                <h4>Valor Parcela</h4>
                            </TitleColulas>
                                <Value>
                                    <p>ID</p>
                                </Value>
                        </Celulas>
                        <Celulas>
                            <TitleColulas>
                                <h4>Valor Total</h4>
                            </TitleColulas>
                                <Value>
                                    <p>ID</p>
                                </Value>
                        </Celulas>
                        <Celulas>
                            <TitleColulas>
                                <h4>Comissão Parceiro</h4>
                            </TitleColulas>
                                <Value>
                                    <p>ID</p>
                                </Value>
                        </Celulas>
                    </Row>
                </TabelaContainer>
            </Tabela>
        </>
    );
}

const Tabela = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 55px;

`;
const Radio = styled.div `
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-gray3);
`;
const TabelaContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        background-color: var(--color-background);
        color: var(--color-primary);
        width: 100%;
        padding: 15px 0;
        font-size: 2.3vw;
    }

`;
const Row = styled.div `
    display: flex;
`;

const Celulas = styled.div `
    color: var(--color-font);
`;
const TitleColulas = styled.div `
    background-color: var(--color-background);
    padding: 5px 25px;
    height: 20px;
    border: 1px solid var(--color-gray3);
    border-top: 0;
    border-left: 0;
    font-size: 1.2vw;
    
`;
const Value = styled.div `
    border: 1px solid var(--color-gray3);
    border-top: 0;
`;