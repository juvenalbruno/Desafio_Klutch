import React from 'react';
import styled from 'styled-components';

import { IoMdMenu } from 'react-icons/io';

import logo from '../../assets/icons/Grupo290.svg';
import { Link } from 'react-router-dom';

export default function Sidebar(){
    return(
        <SidebarContent>
            <IoMdMenu />
            <Link to="/"><img src={logo} alt="Klutch"/></Link>
        </SidebarContent>
    );
};

const SidebarContent = styled.div`
    width: 100%;
    height: 59.42px;
    background-color: var(--color-primary);
    box-shadow: 0px 3px 6px var(--color-opacity);

    display: flex;
    align-items: center;

    svg {
        color: var(--color-white);
        width: 44.57px;
        height: 29.71px;
        cursor: pointer;
    };

    a {
        margin: auto;
        padding-right: 59.42px;
    };
`;