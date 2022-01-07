import React from "react";
import {Encabezado} from "./Encabezado";
import "./index.css";
import {Filtros} from "./Filtros";
import {Breeds} from "./Breeds";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <div>
            <Encabezado/>
            <Filtros/>
            <Breeds/>
        </div>
    );
}

export {
    App
};
