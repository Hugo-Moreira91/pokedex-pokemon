import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-context";

import {
    ButtonToggleTheme,
    ImgPokeballTheme
} from "./ThemeTogglerButton.styles";

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    return(
        <div>
            <ButtonToggleTheme onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                <ImgPokeballTheme theme={theme} title="Toggle theme" />
            </ButtonToggleTheme>
        </div>
    )
}