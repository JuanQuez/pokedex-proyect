import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokeID = () => {

    const { id } = useParams()

    const [pokemonDetail, setPokemonDetail] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemonDetail(res.data))
    }, [])

    console.log(pokemonDetail);

    return (
        <div>
            <h1>Pokemón Details</h1>
            <h2>{pokemonDetail.name}</h2>
            <img src={pokemonDetail.sprites?.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default PokeID;