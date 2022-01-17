import React from "react";
import { Encabezado } from "./Components/Encabezado";
import "./index.css";
import { Dog } from "./Components/Dog";
import { Filtros } from "./Filtros";
import { Breeds } from "./Components/Breeds";
import { FavoriteList } from "./Components/FavoriteList";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <div className="container-components">
            <Encabezado />
            <Filtros />
            <div>
            <main className="container-main">
                <Breeds />
            </main>
            <section>
                <FavoriteList />
                <Dog />
            </section>
            </div>
        </div>
    );
}

export {
    App
};
