import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

import Plus from "../assets/icons/Grupo270.svg";
import Filing from "../assets/icons/_ionicons_svg_md-filing-2.svg";
import Confirm from "../assets/icons/_ionicons_svg_ios-checkmark.svg";
import TableComum from '../components/TableComum';

export default function Conclusion(){
    return(
        <>
            <Sidebar />
            <Container>
                <Title>
                    <TitleWrapp>
                        <img className="plus" src={Plus} alt="IconPlus" />
                        <img src={Filing} alt="IconFiling" />
                        <h1>Solicitar Empréstimo</h1>
                    </TitleWrapp>
                    <TableOptions>
                        <h1>Tabela</h1>
                        <select name="" id="Tabela">
                            <option value="Tabela 1">Tabela Padrão</option>
                            <option value="Tabela 2">Tabela Padrão 2</option>
                        </select>
                    </TableOptions>
                </Title>
                <Info>
                    <Column>
                        <Celula style={{backgroundColor: 'var(--color-confirm)'}}>
                            <h1>
                                Valor desejado:
                            </h1>
                            <h2>R$ 1.000,00</h2>
                        </Celula>
                        <Celula style={{backgroundColor: 'var(--color-confirm)'}}>
                            <h1>
                                Valor Total do Empréstimo:
                            </h1>
                            <h2>R$ 1.000,00</h2>
                        </Celula>
                    </Column>
                    <Column>
                        <Celula>
                            <h1>Parcelas:</h1>
                            <select name="Parcelas" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </Celula>
                        <Celula>
                            <h1>
                                Valor da Parcela:
                            </h1>
                            <h2>R$ 1.000,00</h2>
                        </Celula>
                    </Column>
                    <Column>
                        <Celula style={{backgroundColor: 'var(--color-white)'}}>
                            <InfoContent>
                                <p>Escolha o tipo de contrato:</p>
                                <BTN>
                                    <input type="radio" name="Tipo" id="Automatico" checked/>
                                    <label htmlFor="Automatico">Automático</label>
                                    <input type="radio" name="Tipo" id="Manual" />
                                    <label htmlFor="Manual">Manual</label>
                                </BTN>
                            </InfoContent>
                        </Celula>
                        <Celula style={{backgroundColor: 'var(--color-white)'}}>
                            <InfoContent>
                                <button>
                                    <img src={Confirm} alt="Confirmar" />
                                    Concluir
                                </button>
                            </InfoContent>
                        </Celula>
                    </Column>
                </Info>
            </Container>
            <TableComum />
        </>
  );
}

const Container = styled.div``;
const Title = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-around;
`;
const TableOptions = styled.div`
    display: flex;
    margin-left: 25px;
    margin-top: 25px;
    height: 96px;
    width: 345px;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-background);

    h1 {
        font-size: 22px;
        font-style: italic;
        color: var(--color-primary);
    }

    select {
        height: 61px;
        width: 185px;
        font-size: 18px;
        font-style: italic;
        font-weight: 700;
        color: var(--color-secondary);
        padding: 0 10px;
        border: none;
    }
`;
const TitleWrapp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30.35px;

  img {
    display: flex;
    justify-content: center;
    height: 8.5vw;
    margin-right: 2vw;
  }
  .plus {
    height: 6vw;
  }
  h1 {
    font-size: 4.3vw;
    line-height: 1;
    width: 22vw;
    color: var(--color-primary);
  }
`;
const Info = styled.div`
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
const Column = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 85%;
`;
const Celula = styled.div`
    display: flex;
    height: 96px;
    width: 36vw;
    min-width: 345px;
    background-color: var(--color-background);
    padding: 0 15px;
    margin: 15px;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 22px;
        font-style: italic;
        color: var(--color-primary);
    }

    h2 {
        text-align: center;
        width: 190px;
        padding: 15px 0;
        font-size: 22px;
        font-style: italic;
        color: var(--color-secondary);
        background-color: var(--color-white);
    }

    select {
        width: 190px;
        height: 60px;
        font-size: 22px;
        text-align: center;
        color: var(--color-secondary);
        font-weight: bold;
        font-style: italic;
        border: 0;
        padding: 10px;
    }

`;
const BTN = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-evenly;
    align-items: center;
`;
const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 85px;
    justify-content: flex-end;

    p {
        color: var(--color-primary);
        margin-bottom: 10px;
    }

    input {
        display: none;
    }

    label {
        width: 220px;
        padding: 20px 0;
        margin: 0 10px;
        text-align: center;

        border: 0;
        border-radius: 5px;
        font-size: 25px;
        font-weight: bold;
        color: var(--color-primary);
        cursor: pointer;
    }
    input[type="radio"]:checked+label{ 
        color: var(--color-white);  
        background-color: var(--color-primary); 
    }
    button {
        width: 100%;
        padding: 25px 0;
        margin: 0 10px;
        text-align: center;

        border: 0;
        border-radius: 5px;
        font-size: 25px;
        font-weight: bold;
        color: var(--color-white);
        background-color: var(--color-primary);
        cursor: pointer;
    }
`;