# Relatório do Projeto Web - Tema "Ensino"

## 1. Apresentação do Projeto

O presente projeto consistiu na criação de um sítio web estático, composto por quatro páginas principais, focado na temática “Ensino”. O tema foi abordado pela Universidade das Caxinas, uma instituição fictícia que combina tradição e inovação académica.

O objetivo foi apresentar informações relevantes sobre a universidade, os seus cursos e o processo de registo de alunos, utilizando as tecnologias HTML5, CSS3 e JavaScript. Complementarmente, foi desenvolvido um documento XML com dados institucionais e um esquema XSD para validar a sua estrutura, garantindo a conformidade dos dados.

## 2. Interface com o Utilizador

A interface foi concebida para proporcionar uma navegação clara e simples entre as páginas:  
- Página Principal (`principal.html`): apresentação da universidade, missão e valores.  
- Cursos (`cursos.html`): listagem das unidades curriculares organizadas por área, com interatividade para expandir disciplinas.  
- Registo (`registo.html`): formulário para inscrição, com validação básica via JavaScript.  
- Sobre (`sobre.html`): informação histórica detalhada sobre a universidade.

A navegação é assegurada por um menu horizontal em todas as páginas, com links internos e um link externo para localização via Google Maps.

A estrutura HTML usa marcação semântica adequada, incluindo elementos `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` e utiliza `<strong>`, `<em>` e `<mark>` para realce de texto.

## 3. Produto

O conjunto final inclui:  
- Quatro páginas HTML responsivas com CSS externo (`principal.css`, `cursos.css`, `registo.css`, `sobre.css`).  
- Documento XML `universidade.xml` com dados institucionais e lista de cursos e inscrições.  
- Esquema XSD `universidade.xsd` para validação do XML.  
- Ficheiro JavaScript `script.js` para manipulação DOM e validação de formulário.

O site está preparado para ser alojado em plataformas como Netlify.

## 4. Instruções de Instalação e Configuração

### Instalação Local  
Basta abrir qualquer dos ficheiros HTML num navegador moderno com suporte a HTML5, CSS3 e JavaScript.

### Implantação Online  
Recomenda-se a utilização do Netlify com publicação automática a partir de um repositório GitHub.

## 5. Regras de Utilização

O sítio é de acesso público, não requer autenticação. O formulário de registo valida campos obrigatórios no cliente, sem submissão real de dados.

## 6. Ajuda à Navegação

O menu é fixo e apresenta a página atual destacada. Os links são intuitivos e o conteúdo bem organizado com títulos e seções claras.

## 7. Validação de Formulários

A validação do formulário de registo é feita em JavaScript, verificando preenchimento de nome, email, password e género. Alertas informam o utilizador em caso de omissões.

## 8. Validação do HTML e CSS

Todos os ficheiros HTML e CSS foram validados através dos validadores da W3C, não apresentando erros significativos. O código segue boas práticas de acessibilidade e semântica.

## 9. Detalhes de Implementação

- Uso de elementos semânticos `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.  
- Listas aninhadas para organização curricular com manipulação por JavaScript para expansão/retração.  
- Formulário HTML5 com atributos `required` e validação adicional via JS.  
- Estilização CSS externa com seletores simples, combinadores, pseudo-classes e responsividade.  
- Uso de imagem de fundo com propriedades CSS `background-image`, `background-size` e `background-attachment`.  
- Documento XML estruturado com informações institucionais, cursos e inscrições, validado por esquema XSD.  
- Script JavaScript para interatividade e validação, com funções comentadas para fácil manutenção.

---

Se quiseres, posso ajudar a preparar printscreens dos validadores ou um resumo dos resultados para anexar no relatório.

Também posso ajudar com o upload do relatório final em Markdown para download. Queres?
