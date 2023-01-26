import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';
import imagesGifs from '../assets/imagesGifs'

const HomeName = () => {

    const dispatch = useDispatch()

    const [inputName, setInputName] = useState("")

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000)
    }, [])

    const navigate = useNavigate()
    const submitName = () => {
        dispatch(changeUserName(inputName))
        navigate("/pokedex")
    }

    return (
        <div>
            {
                isLoading ? (
                    <div className="reload-money">
                        <img src={imagesGifs.reloadBall} />
                    </div>

                ) : (
                    <div className="home-target">
                        <div className="logo-pokemon">
                            <img width={"800px"} src={imagesGifs.logoPoke} />
                        </div>
                        <h1> Hi Pokémon trainer!</h1>
                        <br />
                        <h2>It's time to find your Pokémon, give me your name and grab your pokeball!</h2>
                        <br />
                        <input className='input-home'
                            type="text"
                            value={inputName}
                            onChange={e => setInputName(e.target.value)} />
                        <button className='desing-button'
                            onClick={submitName}>PokeGo!
                        </button>
                        <div className="all-poke">
                            <div className='charmander-poke'>
                                <img src={imagesGifs.charmander} />
                            </div>
                            <div className='bulbasur-poke'>
                                <img src={imagesGifs.bulbasur} />
                            </div>
                            <div className='rouse-poke'>
                                <img src={imagesGifs.rouse} />
                            </div>
                            <div className='cocodryle-poke'>
                                <img src={imagesGifs.cocodryle} />
                            </div>
                            <div className='pikachu-poke'>
                                <img src={imagesGifs.pikachu} />
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default HomeName;