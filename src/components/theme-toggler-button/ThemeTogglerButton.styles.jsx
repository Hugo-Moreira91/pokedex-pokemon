import styled from "styled-components";
import { Button } from "../button/button";
import pokeballToggle from "../../assets/images/pokeball-toggle-button.png";
import ultraPokeballToggle from "../../assets/images/ultra-pokeball-toggle-button.png";

export const ButtonToggleTheme = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .55rem;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;

export const ImgPokeballTheme = styled.img`
    content: ${({theme}) => `url(${theme.mode === 'light' ? ultraPokeballToggle : pokeballToggle})`};
    width: 2.5rem;

    @media (max-width: 40rem) {
        max-width: 2rem;
    }

    @media (max-width: 30rem) {
        max-width: 1.75rem;
    }
`;