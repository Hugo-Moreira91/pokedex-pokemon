<div align="center">
    <h1>
        <img src="./docs/media/pokeball-readme.png" alt="Pokébola" width="20">
        Projeto Pokédex - Pokémon
        <img src="./docs/media/pokeball-readme.png" alt="Pokébola" width="20">
    </h1>
    <img src="./docs/media/pokemon-logo-readme.png" alt="Arte com a logo do Pokémon" width="70%">
    <p style="margin-top: 25px;">Projeto desafio DevQuest, o qual reúne informações de diversos pokémons através da API <a href="https://pokeapi.co/" target="_blank">🔗PokéAPI</a>, como imagem, nome, movimentos, abilidades e seus efeitos, bem como o seu(s) tipo(s).</p>
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
    <img src="https://img.shields.io/github/forks/USER/REPO">
    <img src="https://img.shields.io/github/stars/USER/REPO">
    <img src="https://img.shields.io/github/license/USER/REPO">
    <img src="https://img.shields.io/github/last-commit/USER/REPO">
</p>

<h4 align="center" style="margin-bottom: 50px;">⚠️ Projeto finalizado ⚠️</h4>

* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Acesso ao Projeto](#acesso-ao-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Pessoas Contribuidoras](#pessoas-contribuidoras)
* [Autor](#autor)
* [Licença](#licença)
* [Conclusão](#conclusão)

# Funcionalidades e Demonstração da Aplicação

- `Funcionalidade 1:` o projeto possui a opção de alteração do tema, entre "claro" e "escuro". Para isso, basta clicar no ícone de pokébola, situado no canto superior direito:

![Alternando entre o tema "claro" e "escuro" na aplicação](docs/media/toggle-theme-execution.gif)

- `Funcionalidade 2:` a logo Pokémon, ao ser clicada, retorna para a página inicial da aplicação:

![Retornando à página inicial através da logo do projeto](docs/media/logo-link-execution.gif)

- `Funcionalidade 3:` aplicação possui um campo de busca, para filtrar a pesquisa através do nome (em inglês) do pokémon requerido. Caso o nome pesquisado não exista, uma mensagem é informada logo abaixo ao campo:

![Demonstração do campo de busca, em caso de retorno ou não do nome pesquisado](docs/media/search-pokemon-execution.gif)

- `Funcionalidade 4:` botão para mostrar mais 10 (dez) pokémons na lista. A API PokéAPI disponibiliza informações de 1025 pokémons, distribuídos ao longo das gerações do desenho animado:

![Exibindo mais pokémons na aplicação, ao clicar no botão correspondente](docs/media/button-show-more-pokemons-execution.gif)

- `Funcionalidade 5:` ao clicar sobre um pokémon na tela inicial, suas informações principais serão exibidas, sendo elas:
    * Movimentos
    * Abilidade(s)
    * Efeitos de cada abilidade
    * Tipo(s)

![Demonstração das informações detalhadas do pokémon selecionado](docs/media/pokemon-details-execution.gif)

- `Funcionalidade 6:` na página das informações detalhadas do pokémon, há um botão para exibir mais movimentos, uma vez que a lista pode ser extensa.

- `Funcionalidade 7:` a exibição dos efeitos referentes a cada abilidade foi construído sob a ideia de um acordeão.