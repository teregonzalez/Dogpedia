import React, { useState, useEffect } from "react";
import "./components.css";
import {DogImage} from "./DogImage.js";
//useState crea un estado interno con los datos
//useEffect ejecuta codigo als renderizar el componente

function Breeds() { //defino el componente de razas
    const url = 'https://dog.ceo/api/breeds/list/all'
    const [breeds, setBreeds] = useState() //declara variable de estado para las imagenes de razas
    const [search, setSearch] = useState("");
    const [filteredBreeds, setFilteredBreeds] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
    };

    const handleSearch = (dogBreed) => {
        const filtered = breeds.filter((breed) => {
            return breed.toLowerCase().includes(dogBreed.toLowerCase());
        })

        setFilteredBreeds(filtered);
    };

    const getAllBreeds = async () => { //recupera recursos asincronos desde servidor
        const response = await fetch(url) //trae datos a res
        const responseJSON = await response.json()
        const razas = Object.keys(responseJSON.message)
        setBreeds(razas);
        setFilteredBreeds(razas);
    }
    useEffect(() => { //para hacer peticiones de datos
        getAllBreeds()
    }, [])

    return (
        <div className="containerRazas">
            <h2>Razas</h2>
            <input type="text" value={search} onChange={handleChange} placeholder="Search for a dog breed" />
            <div className="breed-container">
                {filteredBreeds && filteredBreeds.map((breed, i) => (
                    <DogImage key={i}dogBreed={breed} />
                ))}
            </div>
        </div >
    );
}

export { Breeds };