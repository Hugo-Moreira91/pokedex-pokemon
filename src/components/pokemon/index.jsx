import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../../hooks/usePokemonDetails";
import { ThemeContext } from "../../contexts/theme-context";
import typesData from "../../json/types.json";
import Header from "../header/header";
import Footer from "../footer/footer";

import {
    TextLoading,
    TextError,
    ButtonLink,
    ButtonReturn,
    LeftTopSquare,
    RightTopSquare,
    LeftBottomSquare,
    RightBottomSquare,
    ArrowLeft,
    Theme,
    PokemonDetailsContainer,
    InfoContainer,
    PokedexContainer,
    ImgPokemon,
    PokemonName,
    TextTitle,
    ArrowDown,
    MovesGrid,
    Move,
    LoadMoves,
    PikachuRunning,
    AbilityButton,
    ImgPokeballOpen,
    ImgPokeballClose,
    AbilityEffect,
    Type,
    ImgType
} from "./PokemonDetails.styles";

import arrow from "../../assets/images/arrow-8bit.png";
import pokeballClose from "../../assets/images/pokeball-close-8bit.png";
import pokeballOpen from "../../assets/images/pokeball-open-8bit.png";

const PokemonDetails = () => {
    const { name } = useParams();
    const { theme } = useContext(ThemeContext);

    const [visibleMoves, setVisibleMoves] = useState(10);
    const [activeAbility, setActiveAbility] = useState(null);

    const toggleAbility = (abilityName) => {
        setActiveAbility((prev) => (prev === abilityName ? null : abilityName));
    }

    const { data: pokemon, error, isLoading } = usePokemonDetails(name.toLowerCase());

    if (isLoading) return <TextLoading>Loading...</TextLoading>
    if (error) return (
        <>
            <TextError>Error loading Pokémon details!</TextError>
            <ButtonLink to="/">
                <ButtonReturn>
                    <LeftTopSquare></LeftTopSquare>
                    <RightTopSquare></RightTopSquare>
                    <ArrowLeft src={arrow} alt="Left arrow" />
                    Return
                    <LeftBottomSquare></LeftBottomSquare>
                    <RightBottomSquare></RightBottomSquare>
                </ButtonReturn>
            </ButtonLink>
        </>
    )

    const { image, types, moves, abilities } = pokemon;

    const handleLoadMoves = () => {
        if (moves) {
            setVisibleMoves((prev) => Math.min(prev + 10, moves.length));
        }
    }

    const firstType = types.length > 0 ? types[0] : null;
    const typeInfo = firstType ? typesData[firstType] : { color: "#ccc", image: "" };
    const bgColor = typeInfo.color;

    return (
        <div>
            <Header />
            <Theme theme={theme}>
                <PokemonDetailsContainer>
                    <InfoContainer>
                        <PokedexContainer $bgColor={bgColor}>
                            <ImgPokemon src={image} alt={name} />
                        </PokedexContainer>
                        <PokemonName>{name}</PokemonName>
                        <TextTitle theme={theme}>
                            Moves
                            <ArrowDown theme={theme} alt="Arrow down"/>
                        </TextTitle>
                        <MovesGrid>
                            {moves.slice(0, visibleMoves).map((move, index) => (
                                <Move key={index}>
                                    <LeftTopSquare theme={theme}></LeftTopSquare>
                                    <RightTopSquare theme={theme}></RightTopSquare>
                                    {move}
                                    <LeftBottomSquare theme={theme}></LeftBottomSquare>
                                    <RightBottomSquare theme={theme}></RightBottomSquare>
                                </Move>
                            ))}
                        </MovesGrid>
                        {visibleMoves < moves.length && (
                            <LoadMoves onClick={handleLoadMoves}>
                                <LeftTopSquare theme={theme}></LeftTopSquare>
                                <RightTopSquare theme={theme}></RightTopSquare>
                                More moves!
                                <PikachuRunning />
                                <LeftBottomSquare theme={theme}></LeftBottomSquare>
                                <RightBottomSquare theme={theme}></RightBottomSquare>
                            </LoadMoves>
                        )}
                        <TextTitle theme={theme}>
                            Abilities
                            <ArrowDown theme={theme} alt="Arrow down" />
                        </TextTitle>
                        <ul>
                            {abilities.map((ability, index) => (
                                <li key={index}>
                                    <AbilityButton onClick={() => toggleAbility(ability.name)}>
                                        <LeftTopSquare theme={theme}></LeftTopSquare>
                                        <RightTopSquare theme={theme}></RightTopSquare>
                                        {ability.name}
                                        {activeAbility === ability.name ?
                                            <ImgPokeballOpen src={pokeballOpen} alt="Pokeball open" /> :
                                            <ImgPokeballClose src={pokeballClose} alt="Pokeball close" />
                                        }
                                        <LeftBottomSquare theme={theme}></LeftBottomSquare>
                                        <RightBottomSquare theme={theme}></RightBottomSquare>
                                    </AbilityButton>
                                    {activeAbility === ability.name && 
                                        <AbilityEffect>
                                            {ability.effect}
                                        </AbilityEffect>
                                    }
                                </li>
                            ))}
                        </ul>
                        <TextTitle theme={theme}>
                            Type(s)
                            <ArrowDown theme={theme} alt="Arrow down" />
                        </TextTitle>
                        <ul>
                            {types.map((type, index) => {
                                const typePokemon = typesData[type.toLowerCase()];
                                return (
                                    <Type key={index} $bgColorType={typePokemon.color}>
                                        <LeftTopSquare theme={theme}></LeftTopSquare>
                                        <RightTopSquare theme={theme}></RightTopSquare>
                                        <ImgType src={typePokemon.image} alt={`${type} icon`} />
                                        {type}
                                        <LeftBottomSquare theme={theme}></LeftBottomSquare>
                                        <RightBottomSquare theme={theme}></RightBottomSquare>
                                    </Type>
                                );
                            })}
                        </ul>
                    </InfoContainer>
                    <ButtonLink to="/">
                        <ButtonReturn>
                            <LeftTopSquare theme={theme}></LeftTopSquare>
                            <RightTopSquare theme={theme}></RightTopSquare>
                            <ArrowLeft src={arrow} alt="Left arrow" />
                            Return
                            <LeftBottomSquare theme={theme}></LeftBottomSquare>
                            <RightBottomSquare theme={theme}></RightBottomSquare>
                        </ButtonReturn>
                    </ButtonLink>
                </PokemonDetailsContainer>
            </Theme>
            <Footer />
        </div>
    )
}

export { PokemonDetails }