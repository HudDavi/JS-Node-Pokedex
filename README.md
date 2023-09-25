# JavaScript Pokedex

Este é um projeto simples que cria uma Pokedex usando JavaScript com o uso de CORS (Cross-Origin Resource Sharing). A Pokedex consome dados da API pública [PokeAPI](https://pokeapi.co/) para exibir informações sobre os Pokémon.

## Conteúdo

- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Configuração](#configuração)
- [Como Usar](#como-usar)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Este projeto utiliza JavaScript com as bibliotecas Express e CORS para criar uma aplicação web simples que exibe informações sobre Pokémon. Ele consome dados da API PokeAPI para obter detalhes sobre os Pokémon, como nome, tipo, habilidades, etc.

## Requisitos

Certifique-se de que você tenha as seguintes ferramentas instaladas:

- Node.js
- npm

## Configuração

1. Clone o repositório:

```bash
git clone https://github.com/HudDavi/JS-Node-Pokedex.git
cd JS-Node-Pokedex
```

2. Instale as dependências:

```bash
npm install
```

## Como Usar

Para iniciar a aplicação, utilize o seguinte comando:

```bash
npm start
```

A aplicação estará disponível em `http://127.0.0.1:3000` ou `http://localhost:3000`.

Certifique-se de que a API PokeAPI está configurada corretamente em `app.use(cors(...))` no arquivo `index.js`. Neste exemplo, a origem permitida é `https://pokeapi.co/` e os métodos permitidos são `GET`.

## Contribuição

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Fork o projeto.
2. Crie uma nova branch com a sua funcionalidade: `git checkout -b feature/nova-funcionalidade`.
3. Faça commit das suas alterações: `git commit -am 'Adicionei uma nova funcionalidade'`.
4. Faça push para a branch: `git push origin feature/nova-funcionalidade`.
5. Abra uma solicitação pull no GitHub.

## Demo

https://pokedex-n2k4.onrender.com

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).