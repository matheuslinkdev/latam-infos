## Latam API

Essa api contém informações detalhadas de todos os países da América Latina, sendo algumas dessas infos:
- Nome
- Currency
- Forças da Economia
- GDP
- GDP per capita
- Area em Km²
- E outras...

  ### Você pode acessar o deploy da api utilizando a seguinte URL:

  https://lataminfos-production.up.railway.app/countries

  ## 📚EndPoints:

  - ``/countries`` : Exibe infos de todos os países
  - ``/countries/:name`` : Exibe infos de um país específico com base no nome

  ## ❓QueryParams:
  Para utilizar QueryParams nessa api, faça o seguinte:

  - No endpoint ``/countries`` adicione ``?sort_by={}``, dentro das chaves você poderá definir uma ordem para os países retornados pela API, podendo ser:
 
  - ``population`` : Ordena com base na população (maior-menor)
  - ``area`` : Ordena com base na área em km² (menor-maior)
  - ``inflation`` : Ordena com base na inflação (menor-maior)
  - ``gdp`` : Ordena com base no GDP total (maior-menor)
  - ``latam_rank`` : Ordena com base no ranking de GDP total da América Latina (maior-menor GDP)
  - ``global_rank`` : Ordena com base no ranking global de GDP total (maior-menor GDP)
 
  O backend está sendo desenvolvido utilizando ``Go`` e ``Gin``
  O frontend com ``Next JS`` e ``TypeScript``
 
  Algumas features ainda serão implementadas, o frontend do projeto será desenvolvido em breve, deixando a experiência mais intuitiva e completa.
