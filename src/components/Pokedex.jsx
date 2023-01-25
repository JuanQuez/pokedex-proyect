import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokeCard from './PokeCard';

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemons(res.data.results))
    }, [])

    //Cuando termine la paginación, utilizar este endpoint.
    //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279

    console.log(pokemons);

    const userName = useSelector(state => state.userName)

    return (
        <div>
            <h1>Pokemóns</h1>
            <br />
            <p>Welcome, {userName}!</p>
            <br />
            <ul>
                {
                    pokemons.map(pokemons => (
                        <PokeCard
                            key={pokemons.url}
                            url={pokemons.url} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokedex;