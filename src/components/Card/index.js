import React from "react";

import {Container} from './style';

export default function Card({item}) {
    return(
        <Container>
            <img src={item.image} alt={item.name}/>
            <h5>{item.name}</h5>
        </Container>
    )
}