<h1 align="center">
<img src="https://github.com/jamesjlv/DashGo/blob/main/public/readme_content/logo.png?raw=true" alt="DashGo Logo"/>
</h1>
<p align="center">Seu site de monitoramento das redes sociais.</p>
<p align="center">Esse site foi construido usando ReactJs, Next, TypeScript, MirageJs, React Query, Yup, ApexCharts e Chackra UI</p>
</br>
<p align="center">O foco desse projeto é para aplicação de conhecimentos aprendidos.</p>
<p align="center">
<img src="https://img.shields.io/badge/version-v1.0.0-blue?style=for-the-badge&logo=none"/>
<img src="https://img.shields.io/badge/ReactJs-v17.0.2+-61DAFB?style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/badge/React%20query-v3.24.4-blue?style=for-the-badge&logo=none"/>
<img src="https://img.shields.io/badge/next-v11.1.2-000000?style=for-the-badge&logo=Next.js"/>
<img src="https://img.shields.io/badge/apexcharts-v3.28.1-blue?style=for-the-badge&logo=none"/>
<img src="https://img.shields.io/badge/Chakra%20UI-v1.6.7-319795?style=for-the-badge&logo=Chakra UI"/>
</p>

#

## ⚡️ Antes de tudo

Lembre-se de ter Node.js rodando em seu equipamento, você pode baixar e instalar nesse [link](https://nodejs.org/en/)

#

## ⚙️ Iniciando o projeto

Para rodar o projeto, utilize o comando abaixo para instalar todas as dependencias necessárias para o projeto iniciar

```bash
yarn
```

Após instalado todas as dependencias, utilize o comando abaixo para iniciar a instancia de desenvolvimento.

```bash
yarn dev
```

#

## 📖 Sobre o projeto

<br />

Esse projeto foi feito para aplicação de conhecimentos aprendidos durante o curso Ignite da RockeatSeat.

<br />

### Rotas

<br />

#### 🚏 Login

Ao iniciar ele, você terá uma rota inicial que será criada no [endereço](https://localhost:3000) local na porta 3000.

Essa rota apenas existe para aplicação do yup schema, onde ele verificará se os dados colocados satisfazem a condição que foi pedida, como por exemplo, o email deverá ter o "@" e finalizar com .algo (exemplo: .com/.br/.gov....), caso não seja validado pelo yup, ele retorna uma mensagem de erro.

<br />

#### 🚏 Dashboard

Nessa [rota](https://localhost:3000/dashboard), veremos os dashboards criados usando o ApexCharts

<br/>
<p align="center">
<img src="https://github.com/jamesjlv/DashGo/blob/main/public/readme_content/dashboard.png?raw=true" width="1000px"/></p>

#### 🚏 Users

Nessa [rota](https://localhost:3000/users), você encontrará a lista de usuários sendo renderizada utilizando o ReactQuery, nessa página, foi utilizado o conceito de carregamento "adiantado" dos dados, então assim que você passa o mouse sobre um dos nomes listados, o ReactQuery automaticamente adianta o carregamento desses dados, assim quando você entrar na página de edição, os dados já estarão pré-carregados, dando a impressão de que o sistema é mais fluido e rápido.
Nessa página também é possivel navegar para a criação de novos usuários onde utilizará o React Hook Form para controlar os dados e enviar a API MirageJs.

## ⚠️ License

`DashGo` é gratuito e open-source.
