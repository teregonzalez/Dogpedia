import React, {useState, useEffect} from "react";
// useState crea un estado interno con los datos
// useEffect ejecuta codigo al renderizar el componente

function Perros() { // defino el componente imagenes de razas
    const url = 'https://dog.ceo/api/breed/hound/images'
    const [breeds, setBreeds] = useState() // declara variable de estado para las imagenes de razas

    const fetchApi = async () => { // recupera recursos asincronos desde servidor
        const res = await fetch(url) // trae datos a res
        const resJSON = await res.json()
        console.log(resJSON); // muestra datos en la consola
        setBreeds(resJSON) //
    }
    useEffect(() => { // para hacer peticiones de datos
        fetchApi()
    }, [])

    return (
        let razas = Object.keys(breeds);
        for(let i=0; i< razas.length; i++){
        let razas = razas[i];
        console.log(perro[razas]);
        }
);

}

export {Perros};
