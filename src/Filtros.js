import React from "react";
import "./Encabezado.css";

const Filtros = () => {

    return (
        <div className="divButton">
            <label htmlFor="category">Filtrar por categoría:</label>
            <select name="category" id="category">
                <option value="Raza">Raza</option>
                <option value="SubRaza">SubRaza</option>
            </select>
            <button className="boton-style">Buscar</button>
        </div>
    );
}

export {
    Filtros
};
