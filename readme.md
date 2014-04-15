# Infográficos ESPN BR

## Desenvolvimento

Os infográficos estão em uma estrutura usando [middleman](http://middlemanapp.com/), semelhante à padrão do rails.

Basta clonar o projeto, instalar as dependências e iniciar o servidor do _middleman_.

```bash
$ git clone git@github.com:espnbr/infograficos.git
$ bundle install
$ middleman server
```

Depois, acesse localmente em [http://0.0.0.0:4567/](http://0.0.0.0:4567/)

### Estrutura

```
- build = arquivos estáticos gerados pelo middleman
- data  = arquivos .yml com dados de cada infográfico
  = [nome-do-infografico].yml
- source
  - assets
    - fonts
    - images
      - [nome-do-infografico] = imagens de um dos infográficos
    - javascripts
      - [nome-do-infografico] = scripts de um dos infográficos
    - stylesheets
      - [nome-do-infografico] = css de um dos infográficos
  - [nome-do-infografico]  = markup de um dos infográficos
  - layouts
```

## Deploy

Para deploy, utilizamos o [middleman-deploy](https://github.com/tvaughan/middleman-deploy).
Para deploy no _github pages_, faça:

```bash
$ middleman build [--clean]
$ middleman deploy [--build-before]
```

Deploy em produção, confira a documentação da _gem_ e configure de acordo.