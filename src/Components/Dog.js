import React, { useState, useEffect } from 'react';

function Dog () {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const [dog, setDog] = useState()

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        console.log(responseJSON)
        const perro = responseJSON.message
        setDog(perro)
    }
    useEffect(() => { //para hacer peticiones de datos
        fetchApi()
    }, [])

    return (
        <div className="containerPerro">
            <h2>Perrito Random:</h2>
                <img src={dog} alt='Perro'/>
        </div>
    );

}

export { Dog };