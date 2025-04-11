import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonList } from "../components/pokedex";
import { Pokemon } from "./pokemon";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/pokemon/:name" element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    );
}

export { AppRoutes }