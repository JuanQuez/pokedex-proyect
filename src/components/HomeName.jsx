import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';

const HomeName = () => {

    const dispatch = useDispatch()

    const [inputName, setInputName] = useState("")

    const navigate = useNavigate()
    const submitName = () => {
        dispatch(changeUserName(inputName))
        navigate("/pokedex")
    }

    return (
        <div>
            <h1>Hello, this is my house. Welcome!</h1>
            <input type="text"
                value={inputName}
                onChange={e => setInputName(e.target.value)} />
            <button onClick={submitName}>Submit</button>
        </div>
    );
};

export default HomeName;