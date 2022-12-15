import styled from "styled-components";
import Backgroud from '../../assets/background1.svg'


export const Container = styled.div`
    background: url("${Backgroud}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 100vh;
`

export const Imagem = styled.img`
    margin-top: 30px;
`

export const InputeLabel = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: -0.408px;
    color: #EEEEEE;

    margin-left: 25px;
    margin-bottom: 2px;
`

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    border: none;
    outline: none;
    margin-bottom: 20px;
    padding-left: 25px;
    color:  #FFFFFF;

`

// export const User = styled.li`
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     background: rgba(255, 255, 255, 0.25);
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     border-radius: 14px;
//     width: 342px;
//     height: 58px;
//     border: none;
//     outline: none;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 28px;
//     color: #FFFFFF;
//     margin-top: 25px;
    
//     p{
//         font-style: normal;
//         font-weight: 400;
//         font-size: 20px;
//         line-height: 28px;
//         color: #FFFFFF;
//     }

//     button{
//         background: none;
//         border: none;
//         cursor: pointer;
//     }


// `