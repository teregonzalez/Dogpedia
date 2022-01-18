import React, { useState, useEffect } from "react";
import "./components.css";

export const DogImage = ({ dogBreed }) => {
    const [dogImg, setDogImg] = useState("")

    const getDogImg = async (breed) => {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`); 
        const responseJSON = await response.json()
        setDogImg(responseJSON.message);
    }
    useEffect(() => {
        getDogImg(dogBreed);
    }, [])
    return (
        <div>
            <img className="image" src={dogImg} alt={dogBreed} />
            <h3>{dogBreed}</h3>
        </div>
    )



}