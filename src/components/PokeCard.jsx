import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokeCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    })

    return (
        <li>
            <div onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
                <b>{pokemon.name}</b>
                <img width={"150px"} src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            </div>
        </li>
    );
};

export default PokeCard;