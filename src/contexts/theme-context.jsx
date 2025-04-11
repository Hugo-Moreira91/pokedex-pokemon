import { createContext, useState } from "react";

export const themes = {
    light: {
        mode: 'light',
        color: "#000000",
        background: "#ffffff"
    },
    dark: {
        mode: 'dark',
        color: "#eeeeee",
        background: "#1a1a1c"
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}