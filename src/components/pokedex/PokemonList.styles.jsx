import styled, { keyframes } from "styled-components";
import pikachuStop from "../../assets/images/pikachu-8bit.png";
import pikachuWalking from "../../assets/images/pikachu-walking-8bit.png";
import ashStop from "../../assets/images/ash-8bit.png";
import ashWalking from "../../assets/images/ash-walking-8bit.png";
import frame from "../../assets/images/frameb&w.png";
import frameWhite from "../../assets/images/frameb&w-white.png";
import { Button } from "../button/button";

const blink = keyframes`
    50% { opacity: 0; }
`;

const ashWalk = keyframes`
    0% { content: url(${ashStop}); }
    50% { content: url(${ashWalking}); }
    100% { content: url(${ashStop}); }
`;

const pikachuWalk = keyframes`
    0% { content: url(${pikachuStop}); }
    50% { content: url(${pikachuWalking}); }
    100% { content: url(${pikachuStop}); }
`;

export const TextLoading = styled.p`
    margin: 1rem;
`;

export const TextError = styled.p`
    margin: 1rem;
`;

export const ToggleVisibility = styled.span`
    animation: ${blink} 1s steps(1) infinite;
`;

export const Theme = styled.div`
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.background};
    padding: 3rem 0 5rem;
    transition: all 250ms ease-in-out;
`;

export const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: right;
    margin-right: 7.5rem;
    margin-bottom: 2rem;

    @media (max-width: 40rem) {
        align-items: center;
        justify-content: center;
        margin-right: 0;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const InputSearch = styled.input`
    
    font-size: .75rem;
    padding: .15rem;
    padding-left: .5rem;
    border: .25rem solid var(--detail-color-dark);
    max-width: 12rem;

    &::placeholder {
        font-size: .65rem;
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 40rem) {
        font-size: .55rem;
        padding: .28rem;
        padding-left: .55rem;
    }

    @media (max-width: 30rem) {
        padding: .25rem;
        padding-left: .5rem;
        max-width: 10rem;
    }
`;

export const ButtonSearch = styled(Button)`
    position: relative;
    font-size: .75rem;
    padding: .15rem 1rem;
    background-color: var(--primary-color);
    border: .25rem solid var(--detail-color-dark);
    cursor: pointer;
    transition: all 250ms ease-in;

    &:hover {
        background-color: var(--secondary-color);
    }

    @media (max-width: 40rem) {
        font-size: .7rem;
    }

    @media (max-width: 30rem) {
        font-size: .65rem;
    }
`;

export const TextSearchError = styled.span`
    display: block;
    font-size: .65rem;
    text-transform: none;
    margin: .25rem;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 40rem;
    text-align: center;
    margin: auto;

    @media (max-width: 40rem) {
        max-width: 30rem;
    }

    @media (max-width: 30rem) {
        max-width: 20rem;
    }
`;

export const MainTitle = styled.h1`
    align-self: flex-start;
    font-size: 1.8rem;

    @media (max-width: 40rem) {
        align-self: center;
        font-size: 1.6rem;
    }
`;

export const SubTitle = styled.h2`
    align-self: flex-start;
    font-size: .85rem;
    margin-top: 1rem;
    margin-bottom: 4rem;

    @media (max-width: 40rem) {
        align-self: center;
        font-size: .8rem;
    }
`;

export const PokeballShaking = styled.img`
    position: absolute;
    top: 40%;
    left: 45%;
    transform: translate(-40%, -45%);
    width: 3rem;
    height: 3rem;
    margin: .6rem;
`;

export const AshGameboy = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 4rem;
    margin: .3rem;
`;

export const PokemonGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, minmax(13.5rem, 1fr));
    column-gap: 1.5rem;
    row-gap: 4rem;
    justify-content: center;
    padding: 0;
    list-style: none;

    @media (max-width: 40rem) {
        grid-template-columns: repeat(2, minmax(13.5rem, 1fr));
        column-gap: 2rem;
    }

    @media (max-width: 30rem) {
        grid-template-columns: repeat(2, minmax(11rem, 1fr));
        column-gap: .85rem;
    }

    @media (max-width: 25rem) {
        column-gap: .25rem;
    }
`;

export const CardPokemon = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-image: ${({ theme }) => `url(${theme.mode === 'light' ? frame : frameWhite})`};
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 13.5rem 6.5rem;
    width: 100%;
    padding-bottom: .5rem;
    transition: all 250ms ease-in-out;

    @media (max-width: 30rem) {
        background-size: 10.75rem 6.25rem;
    }
`;

export const ImgPokemon = styled.img`
    margin-top: .25rem;
`;

export const PokemonName = styled.p`
    margin-top: .5rem;
    color: ${({ theme }) => theme.color};
    transition: color 250ms ease-in-out;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.mode === 'light' ? 'var(--overlay-color-light)' : 'var(--overlay-color-dark)'};
    opacity: 0;
    border: .15rem solid var(--detail-color-dark);
    border-radius: .2rem;
    transition: opacity 200ms ease-in;

    &:hover {
        opacity: .85;
    }
`;

export const LoadingPokemons = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .75rem;
    background-color: var(--primary-color);
    border: .25rem solid var(--detail-color-dark);
    margin: 4rem 0;
    padding: .25rem .5rem;
    cursor: pointer;
    transition: 250ms ease-in;

    &:hover {
        background-color: var(--secondary-color);
    }
`;

export const LeftTopSquare = styled.div`
    position: absolute;
    top: -0.25rem;
    left: -0.25rem;
    width: .25rem;
    height: .25rem;
    background-color: ${({ theme }) => theme.background};
    transition: all 250ms ease-in-out;
`;

export const RightTopSquare = styled.div`
    position: absolute;
    top: -0.25rem;
    right: -0.25rem;
    width: .25rem;
    height: .25rem;
    background-color: ${({ theme }) => theme.background};
    transition: all 250ms ease-in-out;
`;

export const LeftBottomSquare = styled.div`
    position: absolute;
    bottom: -0.25rem;
    left: -0.25rem;
    width: .25rem;
    height: .25rem;
    background-color: ${({ theme }) => theme.background};
    transition: all 250ms ease-in-out;
`;

export const RightBottomSquare = styled.div`
    position: absolute;
    bottom: -0.25rem;
    right: -0.25rem;
    width: .25rem;
    height: .25rem;
    background-color: ${({ theme }) => theme.background};
    transition: all 250ms ease-in-out;
`;

export const AshWalking = styled.img`
    width: 2.3rem;
    height: 2.5rem;
    margin-right: .5rem;
    animation: ${ashWalk} .65s infinite;
`;

export const PikachuWalking = styled.img`
    width: 2.3rem;
    height: 2.3rem;
    margin-left: .5rem;
    animation: ${pikachuWalk} .65s infinite;
`;