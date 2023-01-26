import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokeCard from './PokeCard';

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([])

    const [pokeLocations, setPokeLocations] = useState([])

    const userName = useSelector(state => state.userName)

    const [pokeSearch, setPokeSearch] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279')
            .then(res => setPokemons(res.data.results))

        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setPokeLocations(res.data.results))
    }, [])

    //Cuando termine la paginación, utilizar este endpoint.
    //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279

    const search = () => {
        navigate(`/pokedex/${pokeSearch.toLowerCase()}`)
    }

    const filterLocation = e => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }

    const [page, setPage] = useState(1)
    const pokemonsPerPage = 9
    const lastIndex = page * pokemonsPerPage
    const firstIndex = lastIndex - pokemonsPerPage
    const pokemonsPaginated = pokemons.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage)

    const targetPeges = []
    for (let i = 1; i <= totalPages; i++) {
        targetPeges.push(i)
    }

    return (
        <div>
            <h1>Pokemóns</h1>
            <br />
            <p>Welcome, dear <strong>{userName}!</strong></p>
            <div>
                <input type="text"
                    placeholder='Search your pokemón'
                    value={pokeSearch}
                    onChange={e => setPokeSearch(e.target.value)}></input>
                <button onClick={search}>Search</button>
            </div>
            <br />
            <div>
                <select onChange={filterLocation} name="" id="">
                    {pokeLocations.map(location => (
                        <option value={location.url} key={location.url}>{location.name}</option>
                    ))}
                </select>
            </div>
            <div className="pokemons-list">
                <ul>
                    {
                        pokemonsPaginated.map(pokemon => (
                            <PokeCard
                                url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                                key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            />
                        ))
                    }
                </ul>
            </div>
            <div>
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >Last page</button>
                {targetPeges.map(number => <button onClick={() => setPage(number)} >{number}</button>)}
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >Next page
                </button>
            </div>
        </div>
    );
};

export default Pokedex;