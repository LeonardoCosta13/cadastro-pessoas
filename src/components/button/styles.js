import styled from "styled-components";

export const Button = styled.button`
    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)' };
    border-radius: 14px;
    width: 342px;
    height: 74px;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 23px 149px 23px 118px;
    border: ${props => props.isBack ? '1px solid #ffffff' : 'none' };
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 132px;
    border: 1px solid #ffffff;


    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{
        transform:${props => props.isBack ? 'rotateY(180deg)' : '' } 
    }

`