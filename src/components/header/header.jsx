import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button";

import {
    HeaderContainer,
    LogoLink,
    ImageLogo,
    CirclePokeball
} from "./Header.styles";

import Logo from "../../assets/images/pokemon-logo.png";

export default function Header() {

    const { theme } = useContext(ThemeContext);

    return (
        <HeaderContainer theme={theme}>
            <LogoLink to="/">
                <ImageLogo src={Logo} alt="Pokemon's logo" />
            </LogoLink>
            <ThemeTogglerButton />
            <CirclePokeball></CirclePokeball>
        </HeaderContainer>
    );
}