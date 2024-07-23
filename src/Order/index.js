import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

import imgOrder from "../../src/assets/Order.svg";
import lixo from "../../src/assets/lixeira.svg";

import {
    Container,
    Img,
    H1,
    Button,
    ContainerImg,
    ContainerItens,
    ContainerLista,
    Client,
    Name,
    Pedido,
    ConstainerNamePedido,
} from "./styles";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()


    useEffect(()=>{
        async function fetchOrders(){
        const{ data: allOrders } = await axios.get("http://localhost:3001/orders")

        setOrders(allOrders)
    }
        fetchOrders()
    },[])

    async function deleteOrder(orderId) {
        await axios.delete(`http://localhost:3001/orders/${orderId}`)
        const newUsers = orders.filter((order) => order.id !== orderId);

        setOrders(newUsers);
    }
    function goBackPage(){
        navigate(-1)
    }

    return (
        <Container>
            <ContainerImg>
                <Img src={imgOrder} alt="Logo-img" />
            </ContainerImg>
            <ContainerItens>
                <H1>Pedidos</H1>

            </ContainerItens>
            <ContainerLista>
                <ul>
                    {orders.map((client) => (
                        <Client key={client.id}>
                            <ConstainerNamePedido>
                                <Pedido>{client.order}</Pedido>
                                <Name>{client.name}</Name>
                            </ConstainerNamePedido>
                            <button onClick={() => deleteOrder(client.id)}>
                                <img src={lixo} alt="lata-de-lixo" />{" "}
                            </button>
                        </Client>
                    ))}
                </ul>
            </ContainerLista>
            <Button onClick={goBackPage}>Voltar</Button>
        </Container>
    );
};

export default Order;
