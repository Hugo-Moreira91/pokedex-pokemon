import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

import {
    FooterContainer,
    Register,
    TrademarkRegister,
    Author,
    PerfilLink,
    ImgHeart
} from "./Footer.styles";

import Heart from "../../assets/images/heart-8bit.png";

export default function Footer() {

    const { theme } = useContext(ThemeContext);

    return (
        <FooterContainer theme={theme}>
            <Author>
                Made by
                <PerfilLink href="https://github.com/Hugo-Moreira91" target="_blank"> Hugo César </PerfilLink>
                <ImgHeart src={Heart} alt="Heart pixel art" />
            </Author>
            <Register>
                Pokémon<TrademarkRegister>&reg;</TrademarkRegister> is a trademark of Nintendo,
                Game Freak and Creatures.<br></br> All rights reserved.
            </Register>
        </FooterContainer>
    )
}