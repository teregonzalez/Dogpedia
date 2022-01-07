import React from "react";
import {Encabezado} from "./Encabezado";
import "./index.css";
import {Filtros} from "./Filtros";
import {Perros} from "./Perros";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <div>
            <Encabezado/>
            <Filtros/>
            <Perros/>
        </div>
    );
}

export {
    App
};
