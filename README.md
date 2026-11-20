# Portfólio de Davi Garcia

Site estático em português, preparado para GitHub Pages. Não requer instalação, servidor de aplicação, banco de dados ou serviço pago.

## Abrir

Abra `index.html` no navegador. Para testar todas as capacidades do navegador (como copiar e-mail), execute `python -m http.server 8080` dentro desta pasta e visite `http://localhost:8080`.

## Estrutura

- `index.html`: apresentação, sobre, projetos, tecnologias, formação e contato.
- `nexa-quest.html`: estudo de caso e galeria do projeto principal.
- `memory-clock.html`, `nebula.html` e `arena-survivor.html`: detalhes dos demais projetos.
- `assets/css/style.css`: cores, tipografia, layout e regras responsivas.
- `assets/js/main.js`: dados dos projetos secundários, navegação e interações.
- `assets/images`: foto e capturas reais otimizadas.
- `assets/icons/favicon.svg`: monograma do site.
- `ORIGEM-DAS-IMAGENS.md`: procedência dos recursos visuais.
- `.github/workflows/pages.yml`: publicação por GitHub Actions.
- `.nojekyll`: publicação estática sem processamento Jekyll.

## Alterar conteúdo

Edite textos e links no HTML. Os projetos secundários são cadastrados no array `projects` em `assets/js/main.js`: título, contexto, descrição, tecnologias, página de detalhes e links opcionais. `url` é o repositório, `demo` é a página de demonstração/download; omita esses campos quando o destino não estiver confirmado. `image` e `alt` definem uma captura real; `art` e `svg` definem uma composição abstrata. Para adicionar um projeto, acrescente um objeto com a mesma estrutura. Para usar uma captura real, coloque-a em `assets/images` e substitua a composição daquele card por uma imagem com texto alternativo. Registre a fonte em `ORIGEM-DAS-IMAGENS.md`.

As cores principais estão no início de `assets/css/style.css`: fundo `#080d19`, azul `#3569e8`, destaque `#6c98ff`. A fonte é a família de sistema, sem downloads externos ou rastreamento.

Para trocar a foto, substitua `assets/images/davi-garcia.jpg` e preserve sua proporção. O recorte é feito somente na apresentação com `object-fit`.

Não há currículo ou certificados fictícios. Para adicionar currículo no futuro, salve um PDF real em `assets/documentos/curriculo-davi-garcia.pdf` e então inclua um link no HTML. Não publique o botão antes de o arquivo existir.

## Publicar após aprovar a prévia

A consulta pública de 19/11/2026 retornou 404 para `DaviGarcia0/DaviGarcia0.github.io`. Confira novamente antes de criar; se já existir, inspecione o conteúdo e não o substitua sem autorização.

1. No GitHub, crie o repositório público `DaviGarcia0.github.io` na conta `DaviGarcia0`.
2. Envie o **conteúdo desta pasta**, com `index.html` diretamente na raiz. Não envie a pasta pai, a pesquisa ou capturas de prévia como conteúdo do site.
3. Para o caminho mais simples, acesse Settings → Pages → Build and deployment → Deploy from a branch; selecione `main` e `/ (root)` e salve.
4. Como alternativa, use GitHub Actions em Settings → Pages e mantenha o workflow fornecido. A pasta oculta `.github` precisa estar no repositório. O fluxo pode ser iniciado manualmente em Actions ou por um novo envio para `main`.
5. Aguarde o deploy e abra `https://davigarcia0.github.io`.
6. Confira imagens, menu mobile, estudo de caso, links externos e contato no endereço público.

Os caminhos são relativos e também funcionam em uma subpasta de GitHub Pages. Nenhuma publicação foi feita nesta entrega; o endereço acima é o endereço esperado.

## Manutenção e limites

Os repositórios de jogos não foram alterados. Não existem formulário de contato com backend, cookies de rastreamento ou dependências de terceiros no site. O contato por e-mail abre o aplicativo de e-mail do visitante. Copiar e-mail usa a API do navegador e fornece orientação alternativa se ela estiver indisponível.

Os projetos são apresentados como trabalhos de formação e protótipos. Repositórios sem README não são descritos como produtos completos. A autoria individual de sistemas e assets não foi presumida. A compatibilidade mobile do portfólio é independente da compatibilidade dos jogos.

## Atualização da seleção de projetos

Ordem atual: Nexa Quest Game, Memory Clock, Nebula e Arena Survivor. Memory Clock traz participação creditada como programador na Game Jam Plus e captura real da cópia local. O código remoto do Memory Clock retornou 404 e não tem botão público de código. Nebula usa descrição limitada à estrutura e ao histórico consultados. Zombie Chaos e Bequals ficaram fora desta versão por falta de verificação suficiente, conforme orientação do usuário para seguir com o material acessível.

A versão anterior foi preservada separadamente em `entrega/portfolio-antes-atualizacao.zip`, fora dos arquivos destinados à publicação.
