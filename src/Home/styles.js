import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
`
export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    gap: 22px
`

export const Img = styled.img`
    margin-top: 11px;
`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const InputLabel = styled.p`
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-bottom: -20px;
`;

export const Input = styled.input`
    display: flex;
    padding: 19px 120px 15px 15px;
    align-items: center;

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);

    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    display: flex;
    width: 342px;
    height: 68px;
    padding: 0px 113px;
    justify-content: center;
    align-items: center;
    background: #D93856;

    color: #FFF;
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5px;
    padding: 20px;
    cursor: pointer;
    border: none;
`;

