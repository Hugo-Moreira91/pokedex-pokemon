import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pokemon Classic';
    src: url('/pokedex-pokemon/fonts/PokemonClassic.woff') format('woff'),
        url('/pokedex-pokemon/fonts/PokemonClassic.woff2') format('woff2'),
        url('/pokedex-pokemon/fonts/PokemonClassic.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, 
  button {
    font-family: 'Pokemon Classic', sans-serif;
  }

  a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  p, 
  li {
    font-size: .75rem;
  }

  span,
  li {
    text-transform: capitalize;
  }

  input[type='text'] {
    font-family: 'Pokemon Classic', sans-serif;
  }
`;