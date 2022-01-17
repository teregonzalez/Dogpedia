import React, { useState, useEffect } from "react";
//useState crea un estado interno con los datos
//useEffect ejecuta codigo als renderizar el componente

function Breeds() { //defino el componente de razas
    const url = 'https://dog.ceo/api/breeds/list/all'
    const [breeds, setBreeds] = useState() //declara variable de estado para las imagenes de razas

    const fetchApi = async () => { //recupera recursos asincronos desde servidor
        const response = await fetch(url) //trae datos a res
        const responseJSON = await response.json()
        console.log(typeof responseJSON); //muestra datos en la consola
        const razas = Object.keys(responseJSON.message)
        console.log(razas)
        setBreeds(razas)
    }
    useEffect(() => { //para hacer peticiones de datos
        fetchApi()
    }, [])

    return (
        <div className="containerRazas">
            <h2>Razas</h2>
            <select name="selectBreed">
                {breeds && breeds.map((item, index) => {
                    return (
                        <option key={index} value="value"{...index} > { item }</option>
            )
}
)}
        </select>
        </div >
    );
}

export { Breeds };