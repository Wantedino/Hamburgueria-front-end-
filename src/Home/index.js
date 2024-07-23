import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

import Hamburg from "../../src/assets/Burger.svg";

import {
    Container,
    Img,
    H1,
    InputLabel,
    Input,
    Button,
    ContainerImg,
    ContainerItens,
} from "./styles";

const Home = () => {
    const [orders, setOrders] = useState([]);

    const InputOrder = useRef();
    const InputName = useRef();

    const navigate = useNavigate()

    async function addNewOrder() {
        const { data: newOrder } = await axios.post(
            "http://localhost:3001/orders",
            {
                name: InputName.current.value,
                order: InputOrder.current.value,
            }
        );

        setOrders([...orders, newOrder]);

        InputName.current.value = "";
        InputOrder.current.value = "";
        navigate('/orders')
    }

    return (
        <Container>
            <ContainerImg>
                <Img src={Hamburg} alt="Logo-img" />
            </ContainerImg>
            <ContainerItens>
                <H1>Faça seu pedido!</H1>

                <InputLabel>Pedido</InputLabel>
                <Input ref={InputOrder} placeholder="Seu pedido" />

                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={InputName} placeholder="Nome" />

                <Button onClick={addNewOrder}>Novo Pedido!</Button>
            </ContainerItens>
        </Container>
    );
};

export default Home;
