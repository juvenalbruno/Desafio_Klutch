import React, { Component } from "react";
import styled from "styled-components";

import Plus from "../../assets/icons/Grupo270.svg";
import Filing from "../../assets/icons/_ionicons_svg_md-filing-2.svg";

export default function Title(props) {
  return (
    <TitleWrapp>
      <img className="plus" src={Plus} alt="IconPlus" />
      <img src={Filing} alt="IconFiling" />
      <h1>{props.Text}</h1>
    </TitleWrapp>
  );
}

const TitleWrapp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30.35px;
  padding-left: 4%;

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
