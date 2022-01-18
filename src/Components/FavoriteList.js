import React from 'react';
import {useState} from 'react';
import "./components.css";

function FavoriteList () {
    const [favoriteBreeds, setFavoriteBreeds] =useState('');
    const [list, setList] =useState([]);

    const addBreed = () => {
        list.push(favoriteBreeds);
        setList([...list]);
        setFavoriteBreeds('');
    }

    const handlerFavoriteBreeds = (e) => {
        setFavoriteBreeds(e.target.value);
    }

    return(
        <div className='container-breedList'>
            <h2>Ingresa tus razas favoritas:</h2>
            <input value={favoriteBreeds} type='text' onChange={handlerFavoriteBreeds}placeholder='Escribe aqui la raza'></input>
            <button className='btn' onClick={addBreed}>Agregar</button>
            <ul>
                {list.map((item, i) =>{
                    return ( <li key={i}>{item}</li> )
                }
                )
                }
            </ul>
        </div>
    );
}

export { FavoriteList }