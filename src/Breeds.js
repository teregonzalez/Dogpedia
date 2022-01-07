import React, { useState, useEffect } from "react"; 
//useState crea un estado interno con los datos
//useEffect ejecuta codigo als renderizar el componente

function Breeds () { //defino el componente imagenes de razas
    const url = 'https://dog.ceo/api/breeds/list/all'
    const [breeds, setBreeds] = useState() //declara variable de estado para las imagenes de razas

    const fetchApi = async () => { //recupera recursos asincronos desde servidor
        const res = await fetch(url) //trae datos a res
        const resJSON = await res.json()
        console.log(resJSON); //muestra datos en la consola
        setBreeds(resJSON) //
    }
    useEffect(() => { //para hacer peticiones de datos
        fetchApi() 
    }, [])
    
    return (
        <div className="containerRazas">
        <li>{Breeds.type}</li>
        </div>
    );
}

export {
    Breeds
};