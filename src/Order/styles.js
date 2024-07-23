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

export const Button = styled.button`
    display: flex;
    width: 342px;
    height: 68px;
    padding: 0px 113px;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.14);
    margin-top: 85px;

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

export const ContainerLista = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Client = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;

    width: 342px;
    height: 101px;
    flex-shrink: 0;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);

    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    
    button{
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
    }
`
export const Name = styled.p`
    color: #FFF;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Pedido = styled.p`
color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const ConstainerNamePedido = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px
`