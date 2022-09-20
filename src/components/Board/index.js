import React, {useEffect, useState} from "react";
import {Container} from './style';

import Card from '../Card';

import axios from "axios";

export default function Board() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        function loadApi() {
            axios.get(`http://hp-api.herokuapp.com/api/characters`)
            .then((res)=>{
                setCharacters(res.data.slice(0, 23));
            })
        }

        loadApi();
    }, [])

    return(
        <Container>
            {characters.map((item)=>(
                <Card item={item}/>
            ))}
        </Container>
    )
}