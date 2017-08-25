# brADev - Central de Desenvolvimento #

## O que é ##

A central de desenvolvimentos do brAthena é um CMS utilizado para controlar as atividades de desenvolvimento do projeto.
Aberto à todo público, é possível realizar traduções, criar códigos e reportar problemas.

## Estrutura de Arquivos ##

* app: Contém todos os arquivos que fazem referência ao BackEnd do projeto e comunicação direta com o servidor.

* app/lib: Contém todas as bibliotecas em PHP que são utilizadas no BackEnd do projeto.

* assets: Contém todas as bibliotecas e frameworks utilizados pelo FrontEnd do projeto em páginas de layout.

* images: Contém todas as imagens utilizadas na exibição do FrontEnd do projeto.

* styles: Contém todos os arquivos que fazem referência à criação do FrontEnd do projeto.


## Instalação ##

### Dependências de Instalação ###

* Servidor Web - Ex.: Apache, Nginx, IIS.
* PHP 5.7 ou superior.
* SGBD - Ex.: MySQL, MariaDB.
* NodeJS
* Bower
* Gulp
* Bootstrap
* AngularJS

### Etapas de Instalação ###

1. Instalação do NodeJS: https://nodejs.org/en/download/
2. Instalação do bower
- Com o prompt do nodejs aberto, digitar: npm install -g bower
3. Instalação de dependências para o FrontEnd
- Com o prompt do nodejs aberto, digitar: bower install