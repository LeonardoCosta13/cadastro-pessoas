import styled from "styled-components";

import Backgroud from '../../assets/background.svg'


export const Container = styled.div`
    background: url("${Backgroud}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 100%;
    min-height: 100vh;
`

export const Imagem = styled.img`
    margin-top: 30px;
`

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: 25px;
    
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }


`