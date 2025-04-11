import React, { useContext, useEffect, useState } from "react";
import { usePokemons } from "../../hooks/usePokemons";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import { ThemeContext } from "../../contexts/theme-context";
import axios from "axios";

import { 
    Theme,
    SearchBox,
    InputContainer,
    InputSearch,
    ButtonSearch,
    TextSearchError,
    Section,
    MainTitle,
    SubTitle,
    PokemonGrid,
    CardPokemon,
    ImgPokemon,
    PokemonName,
    Overlay,
    PokeballShaking,
    AshGameboy,
    LoadingPokemons,
    LeftTopSquare,
    RightTopSquare,
    LeftBottomSquare,
    RightBottomSquare,
    AshWalking,
    PikachuWalking,
    ToggleVisibility,
    TextLoading,
    TextError
  } from "./PokemonList.styles";

import pokeballShaking from "../../assets/images/pokeball-shaking.gif";
import ashGameboy from "../../assets/images/ash-gameboy.png";

const PokemonList = () => {
    const { theme } = useContext(ThemeContext);
    const [pokemonList, setPokemonList] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [searchError, setSearchError] = useState(false);
    const { pokemonList: allPokemons, error, isLoading, fetchRandomPokemons } = usePokemons();

    useEffect(() => {
        if (allPokemons) {
            fetchRandomPokemons(allPokemons, 10).then(setPokemonList);
        }
    }, [allPokemons]);

    useEffect(() => {
        if (!searchPokemon.trim()) {
            setSearchResult(null);
            setSearchError(false);
        }
    }, [searchPokemon]);

    const handleSearch = async () => {
        setSearchResult(null);
        setSearchError(false);

        if (!searchPokemon.trim()) return;

        const found = allPokemons.find(p => p.name.toLowerCase() === searchPokemon.toLowerCase());

        if (found) {
            try {
                const { data } = await axios.get(found.url);
                setSearchResult(data);
            } catch {
                setSearchError(true);
            }
        } else {
            setSearchError(true);
        }
    };

    const loadMorePokemons = async () => {
        if (allPokemons) {
            const newPokemons = await fetchRandomPokemons(allPokemons, 10);
            setPokemonList((prev) => [...prev, ...newPokemons]);
        }
    };

    const renderCard = (pokemon) => (
        <CardPokemon key={pokemon.id} theme={theme}>
            <Link to={`/pokemon/${pokemon.name}`}>
                <Overlay theme={theme}>
                    <PokeballShaking src={pokeballShaking} alt="Pokeball shaking" />
                    <AshGameboy src={ashGameboy} alt="Ash from Gameboy Color" />
                </Overlay>
                <ImgPokemon src={pokemon.sprites.front_default} alt={pokemon.name} />
                <PokemonName theme={theme}>#{pokemon.id} <span>{pokemon.name}</span></PokemonName>
            </Link>
        </CardPokemon>
    );

    if (isLoading) return <TextLoading>Loading...</TextLoading>
    if (error) return <TextError>Error loading data!</TextError>

    return (
        <div>
            <Header />
            <Theme theme={theme}>
                <SearchBox>
                    <InputContainer>
                        <InputSearch
                            type="text"
                            placeholder="Pokémon name"
                            value={searchPokemon}
                            onChange={(e) => setSearchPokemon(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        />
                        <ButtonSearch onClick={handleSearch}>
                            <LeftTopSquare theme={theme}></LeftTopSquare>
                            Search
                            <LeftBottomSquare theme={theme}></LeftBottomSquare>
                        </ButtonSearch>
                    </InputContainer>
                    {searchError && <TextSearchError>Pokémon not found!</TextSearchError>}
                </SearchBox>
                <Section>
                    <MainTitle>Pokédex<ToggleVisibility>_</ToggleVisibility></MainTitle>
                    <SubTitle>Choose your Pokémon!</SubTitle>

                    <PokemonGrid>
                        {searchResult
                            ? renderCard(searchResult)
                            : pokemonList.map(renderCard)}
                    </PokemonGrid>

                    {!searchResult && (
                        <LoadingPokemons onClick={loadMorePokemons}>
                            <LeftTopSquare theme={theme} />
                            <RightTopSquare theme={theme} />
                            <AshWalking />
                            Gotta catch 'em all!
                            <PikachuWalking />
                            <LeftBottomSquare theme={theme} />
                            <RightBottomSquare theme={theme} />
                        </LoadingPokemons>
                    )}
                </Section>
            </Theme>
            <Footer />
        </div>
    )
}

export { PokemonList }