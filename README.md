<div align="center">
    <h1>
        <img src="./docs/media/pokeball-readme.png" alt="Pokébola" width="25" align="center">
        Projeto Pokédex - Pokémon
        <img src="./docs/media/pokeball-readme.png" alt="Pokébola" width="25" align="center">
    </h1>
    <p style="margin-top: 25px;">Projeto desafio DevQuest, o qual reúne informações de diversos pokémons através da API <a href="https://pokeapi.co/" target="_blank">🔗PokéAPI</a>, como imagem, nome, movimentos, habilidades e seus efeitos, bem como o seu(s) tipo(s).</p>
</div>

<p align="center" style="margin-top: 50px;">
    <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB">
    <img src="https://img.shields.io/badge/JSON-000000?logo=json&logoColor=white">
    <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white">
    <img src="https://img.shields.io/badge/GitHub-Pages-222?logo=github&logoColor=white">
    <img src="https://img.shields.io/github/forks/Hugo-Moreira91/pokedex-pokemon">
    <img src="https://img.shields.io/github/stars/Hugo-Moreira91/pokedex-pokemon">
    <img src="https://img.shields.io/github/license/Hugo-Moreira91/pokedex-pokemon">
    <img src="https://img.shields.io/github/last-commit/Hugo-Moreira91/pokedex-pokemon">
</p>

<h4 align="center" style="margin-bottom: 50px;">⚠️ Projeto finalizado ⚠️</h4>

* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Acesso ao Projeto](#acesso-ao-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Autor](#autor)
* [Licença](#licença)
* [Direitos](#direitos)


# Funcionalidades e Demonstração da Aplicação <img src="./docs/media/ash-and-pokemons.png" style="width: 145px" align="center">

- `Funcionalidade 1:` o projeto possui a opção de alteração do tema, entre "claro" e "escuro". Para isso, basta clicar no ícone de pokébola, situado no canto superior direito:

![Alternando entre o tema "claro" e "escuro" na aplicação](docs/media/pokedex-toggle-theme.gif)

- `Funcionalidade 2:` a logo Pokémon, ao ser clicada, retorna para a página inicial da aplicação:

![Retornando à página inicial através da logo do projeto](docs/media/logo-link-execution.gif)

- `Funcionalidade 3:` aplicação possui um campo de busca, para filtrar a pesquisa através do nome (em inglês) do pokémon requerido. Caso o nome pesquisado não exista, uma mensagem é informada logo abaixo ao campo:

![Demonstração do campo de busca, em caso de retorno ou não do nome pesquisado](docs/media/search-pokemon.gif)

- `Funcionalidade 4:` botão para mostrar mais 10 (dez) pokémons na lista. A API PokéAPI disponibiliza informações de 1025 pokémons, distribuídos ao longo das gerações do desenho animado:

![Exibindo mais pokémons na aplicação, ao clicar no botão correspondente](docs/media/show-more-pokemons.gif)

- `Funcionalidade 5:` ao clicar sobre um pokémon na tela inicial, suas informações principais serão exibidas, sendo elas:
    * Movimentos
    * Habilidade(s)
    * Efeitos de cada habilidade
    * Tipo(s)

![Demonstração das informações detalhadas do pokémon selecionado](docs/media/pokemon-infos.gif)

- `Funcionalidade 6:` na página das informações detalhadas do pokémon, há um botão para exibir mais movimentos, uma vez que a lista pode ser extensa.

- `Funcionalidade 7:` a exibição dos efeitos referentes a cada habilidade foi construído sob a ideia de um acordeão.

# Acesso ao projeto <img src="./docs/media/ash-and-pokemons.png" style="width: 145px" align="center">

#### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### Rodando na própria máquina

Abra o terminal, e siga os passos abaixo:

1) Clone o repositório

```
git clone https://github.com/Hugo-Moreira91/pokedex-pokemon.git
```

2) Navegue até a pasta do projeto

```
cd pokedex-pokemon
```

3) Instale as dependências do projeto (usando gerenciador de pacotes NPM)

```
npm install
```

ou simplesmente

```
npm i
```

4) Inicie o projeto

```
npm start
```

### Via GitHub Pages

Caso seja do seu interesse, pode acessar o projeto rodando de forma online. Basta clicar [🔗aqui](https://hugo-moreira91.github.io/pokedex-pokemon/)!

# Tecnologias utilizadas <img src="./docs/media/ash-and-pokemons.png" style="width: 145px" align="center">

* React + Vite
* Componentes
* Node.js
* JSON
* Axios
* Hooks
* Single Page Application (SPA)
* React Router DOM
* React Context API
* Styled-components 

# Autor <img src="./docs/media/ash-and-pokemons.png" style="width: 145px" align="center">

<div style="display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 25px">
    <a href="https://github.com/Hugo-Moreira91">
        <img src="https://avatars.githubusercontent.com/u/129432443?s=400&u=ff3281ddf2cf31d4a71b01d46fcb4d8452398749&v=4" style="border-radius: 50%; width:135px">
        <sub style="display: block; margin-top: 10px; color: #fff;">Hugo César Santos Moreira</sub>
    </a>
    <p>Feito com ❤️</br>Entre em contato! 👇🏼</p>
</div>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hugo%20Moreira-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/hugo-c%C3%A9sar-santos-moreira-a10823248/)
[![Gmail Badge](https://img.shields.io/badge/-hugo.cesar91@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:hugo.cesar91@gmail.com)](mailto:hugo.cesar91@gmail.com)

# Licença

<p>O projeto Pokédex - Pokémon é licenciado pelo MIT. Para mais detalhes, acesse o arquivo da licença clicando <a href="./LICENSE">🔗aqui</a>.</p>

# Direitos

<p>Pokémon&reg é uma marca registrada da <i>Nintendo</i>, <i>Game Freaks</i> e <i>Creatures</i>. Todos os direitos reservados.</p>