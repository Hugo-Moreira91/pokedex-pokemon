import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../button/button";

import pikachuRunning1 from "../../assets/images/pikachu-running-1.png";
import pikachuRunning2 from "../../assets/images/pikachu-running-2.png";
import pikachuRunning3 from "../../assets/images/pikachu-running-3.png";
import arrow from "../../assets/images/arrow-8bit.png";
import arrowWhite from "../../assets/images/arrow-white-8bit.png";
import pokedexDesktop from "../../assets/images/pokedex-desktop.png";
import pokedexMobile from "../../assets/images/pokedex-mobile.png";
import textBox from "../../assets/images/text-box.png";
import textBoxWhite from "../../assets/images/text-box-white.png";

const blinkArrow = keyframes`
    50% { opacity: 0; }
`;

const PikachuRunningAnimation = keyframes`
    0% { content: url(${pikachuRunning1}); }
    33% { content: url(${pikachuRunning2}); }
    66% { content: url(${pikachuRunning3}); }
    100% { content: url(${pikachuRunning1}); }
`;

export const TextLoading = styled.p`
    margin: 1rem;
`;

export const TextError = styled.p`
    margin: 1rem;
`;

export const ButtonLink = styled(Link)`
    display: inline-block;
    max-width: fit-content;
    margin-left: 1rem;
`;

export const ButtonReturn = styled(Button)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .75rem;
    width: 100%;
    padding: .25rem .5rem;
    background-color: var(--primary-color);
    border: .25rem solid var(--detail-color-dark);
    cursor: pointer;
    transition: 250ms ease-in;

    &:hover {
        background-color: var(--detail-color-light);
    }
`;

export const LeftTopSquare = styled.div`
    position: absolute;
    top: -0.25rem;
    left: -0.25rem;
    width: .25rem;
    height: .25rem;
    background-color: ${({theme}) => theme.background};
    transition: all 250ms ease-in-out;
`;

export const RightTopSquare = styled.div`
    position: absolute;
    top: -0.25rem;
    right: -0.25rem;
    width: .25rem;
    height: .25rem;
    background-color: ${({theme}) => theme.background};
    transition: all 250ms ease-in-out;
`;

export const LeftBottomSquare = styled.div`
    position: absolute;
    bottom: -0.25rem;
    left: -0.25rem;
    width: .25rem;
    height: .25rem;
    background-color: ${({theme}) => theme.background};
    transition: all 250ms ease-in-out;
`;

export const RightBottomSquare = styled.div`
    position: absolute;
    bottom: -0.25rem;
    right: -0.25rem;
    width: .25rem;
    height: .25rem;
    background-color: ${({theme}) => theme.background};
    transition: all 250ms ease-in-out;
`;

export const ArrowLeft = styled.img`
    margin-right: .5rem;
    max-width: .75rem;
    transform: rotate(90deg);
    animation: ${blinkArrow} 1.5s steps(1) infinite;
`;

export const Theme = styled.div`
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.background};
    padding: 5rem 0;
    transition: all 250ms ease-in-out;
`;

export const PokemonDetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 55rem;
    margin: auto;

    @media (max-width: 40rem) {
        max-width: 35rem;
    }

    @media (max-width: 30rem) {
        max-width: 22rem;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;
    z-index: 999;
`;

export const PokedexContainer = styled.div`
    position: relative;
    max-width: 30rem;
    min-height: 23rem;
    margin: auto;
    background-image: url(${pokedexDesktop});
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain;

    &::before {
        content: '';
        position: absolute;
        top: 2.5rem;
        left: 2.5rem;
        background-color: ${(props) => props.$bgColor};
        opacity: .65;
        width: 12.5rem;
        height: 17.5rem;
        border-radius: .5rem;
        z-index: -1;
    }

    @media (max-width: 30rem) {
        max-width: 32rem;
        min-height: 25rem;
        background-image: url(${pokedexMobile});
        background-position: center center;

        &::before {
            width: 14.5rem;
            left: 5rem;
        }
    }
`;

export const ImgPokemon = styled.img`
    position: absolute;
    top: 7.5rem;
    left: 5.25rem;

    @media (max-width: 40rem) {
        top: 7.85rem;
        left: 5.75rem;
    }

    @media (max-width: 30rem) {
        top: 8.25rem;
        left: 7.5rem;
    }

    @media (max-width: 25rem) {
        top: 8.25rem;
        left: 7.75rem;
    }

    @media (max-width: 23.5rem) {
        top: 8.25rem;
        left: 7.85rem;
    }
`;

export const PokemonName = styled.h1`
    text-transform: capitalize;
    text-align: center;

    @media (max-width: 30rem) {
        font-size: 1.25rem;
        margin-top: 1.5rem;
    }
`;

export const TextTitle = styled.h2`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 15rem;
    min-height: 4.5rem;
    margin: 2rem 0;
    background-image: ${({theme}) => `url(${theme.mode === 'light' ? textBox : textBoxWhite})`};
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain;
    transition: all 250ms ease-in-out;

    @media (max-width: 40rem) {
        font-size: 1.15rem;
        max-width: 12rem;
        min-height: 3.5rem;
    }
`;

export const ArrowDown = styled.img`
    position: absolute;
    content: ${({theme}) => `url(${theme.mode === 'light' ? arrow : arrowWhite})`};
    bottom: .3rem;
    right: .85rem;
    max-width: .8rem;
    transition: all 250ms ease-in-out;
    animation: ${blinkArrow} 1.5s steps(1) infinite;

    @media (max-width: 40rem) {
        bottom: .25rem;
        right: .9rem;
        max-width: .75rem;
    }
`;

export const MovesGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, minmax(10rem, 1fr));
    gap: .5rem;

    @media (max-width: 40rem) {
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }

    @media (max-width: 30rem) {
        gap: .35rem;
    }
`;

export const Move = styled.li`
    position: relative;
    font-size: .55rem;
    background-color: var(--primary-color);
    color: var(--color-light);
    border: .25rem solid var(--primary-color);
    letter-spacing: .10rem;
    text-align: center;
    padding: .15rem .85rem;
`;

export const LoadMoves = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto 0;
    padding: .25rem .75rem;
    border: .25rem solid var(--detail-color-dark);
    background-color: var(--primary-color);
    cursor: pointer;
    transition: 250ms ease-in;

    &:hover {
        background-color: var(--secondary-color);
    }

    @media (max-width: 40rem) {
        padding: .25rem .5rem;
    }
`;

export const PikachuRunning = styled.img`
    width: 2rem;
    height: 3rem;
    margin-left: .5rem;
    animation: ${PikachuRunningAnimation} .65s infinite;

    @media (max-width: 40rem) {
        width: 1.65rem;
        height: 2.65rem;
    }
`;

export const AbilityButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: .75rem 1.25rem;
    text-transform: capitalize;
    font-size: .85rem;
    font-weight: bold;
    background-color: var(--ability-detail-color);
    border: .25rem solid var(--ability-detail-color);
    cursor: pointer;
    margin: .5rem 0;
    
    &:hover {
        background-color: var(--hover-ability-color);
    }
`;

export const ImgPokeballOpen = styled.img`
    width: 1.65rem;
    height: 2.15rem;
`;

export const ImgPokeballClose = styled.img`
    width: 1.65rem;
    height: 1.65rem;
`;

export const AbilityEffect = styled.p`
    max-width: 50rem;
    color: var(--text-color);
    background-color: var(--ability-effect-bg-color);
    padding: .5rem;
    border-left: 3px solid var(--ability-detail-color);
    margin: 0;
    text-transform: none;
    transition: all 250ms ease-in-out;
`;

export const Type = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${(props) => props.$bgColorType};
    border: .25rem solid ${(props) => props.$bgColorType};
    margin-bottom: 1rem;
    padding: .5rem;

    &:nth-last-child(1) {
        margin-bottom: 3rem;
    }
`;

export const ImgType = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border: .125rem solid var(--detail-color-dark);
    border-radius: 50%;
`;