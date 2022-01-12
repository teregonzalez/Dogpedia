import React from "react";
import {Encabezado} from "./Components/Encabezado";
import "./index.css";
import {Filtros} from "./Filtros";
import {Breeds} from "./Components/Breeds";
import {FavoriteList} from "./Components/FavoriteList";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <div className="container-components">
            <Encabezado/>
            <Filtros/>
            <FavoriteList/>
        </div>
    );
}

export {
    App
};
