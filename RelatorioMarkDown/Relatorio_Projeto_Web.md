# Relatório do Projeto Web - Tema "Ensino"

## 1. Apresentação do Projeto

Este projeto consistiu na criação de um site estático com o tema “Ensino”, desenvolvido no âmbito da disciplina de Tecnologias de Internet. A ideia partiu da inspiração em sites de universidades reais, mas o objetivo nunca foi criar algo profissional, e sim praticar o que foi ensinado ao longo do semestre. 

O site da fictícia "Universidade das Caxinas" foi construído gradualmente, acompanhando os conteúdos dados nas aulas e adaptando-se à medida que novas tecnologias eram aprendidas, como HTML5, CSS3, JavaScript, XML e XSD.

## 2. Interface com o Utilizador

A interface foi criada com o foco em simplicidade e clareza na navegação entre páginas:
- `index.html`: introdução da universidade e destaque visual com imagem e slogan.
- `cursos.html`: lista de cursos por área e uso de listas aninhadas com JS para mostrar/esconder disciplinas.
- `registo.html`: formulário com validações, incluindo animação no botão "Inscreve-te já".
- `sobre.html`: descrição da história e missão da universidade, com tabela descritiva.

O menu horizontal é fixo no topo em todas as páginas e inclui também um link externo para o Google Maps.

O HTML usa marcação semântica (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<strong>`, `<em>`, `<mark>`, etc.).

## 3. Produto

### Componentes
- Quatro páginas HTML com CSS externo (`index.css`, `cursos.css`, `registo.css`, `sobre.css`).
- Documento XML com dados da universidade: cursos, inscrições, histórico.
- Esquema XSD para validar o XML.
- Script JS para validar o formulário, mostrar modal e carregar conteúdo de um XML externo para dentro da página (dinamicamente).

### Alojamento
- O site foi publicado no Netlify: https://inf24tig38.netlify.app/
- O repositório do projeto encontra-se no GitHub: https://github.com/inf24tig38/inf24tig38

## 4. Instruções de Instalação e Configuração

### Local
1. Fazer download do repositório.
2. Abrir `index.html` com um navegador moderno.

### Online (Netlify)
- O projeto foi ligado ao GitHub e publicado automaticamente em Netlify.
- Sem necessidade de configurações manuais.

## 5. Regras de Utilização

- Acesso público.
- Não requer autenticação.
- A submissão do formulário não envia dados para servidor, apenas simula a ação e executa validações.

## 6. Ajuda à Navegação

- Menu de navegação fixo.
- Links internos para outras páginas e externo para localização.
- Elementos visuais como botão animado "Inscreve-te já" para destacar ações importantes.
- Modal com informação do autor ativado por botão.

## 7. Validação de Formulários

A validação é feita com HTML5 (`required`) e complementada com JavaScript, verificando se os campos obrigatórios foram preenchidos corretamente. É exibido um `alert` com confirmação e som de aplauso.

## 8. Validação do HTML, CSS, XML e XSD

### HTML e CSS
- Validados com W3C HTML Validator e W3C CSS Validator.
- Foram corrigidos pequenos erros de tags mal fechadas, atributos em falta e estilização.
- Todos os ficheiros passaram sem erros.

### XML e XSD
- Validados com sucesso no FreeFormatter.
- O validador do W3C encontrava-se offline na altura da verificação.

## 9. Detalhes de Implementação

- Requisitos mínimos cumpridos: 4 páginas HTML, ficheiros XML e XSD, ficheiros CSS distintos, JS para validação e interações, tabela, lista aninhada, imagem, figura com caption, links internos e externos, formulário funcional.
- Valorização adicional:
  - Animação com CSS (`@keyframes`) no botão “Inscreve-te já”.
  - Som de aplausos após envio do formulário (`<audio>`).
  - Modal dinâmico com informação carregada via JavaScript e XML (`fetch + DOMParser`).
  - Flexbox no `footer` para centralização.
  - Responsividade via `@media` queries para ecrãs até 768px e 480px.

---

Este relatório descreve um projeto simples, mas com aplicação real dos conceitos lecionados. A implementação foi feita de forma progressiva, com o objetivo de consolidar o uso prático das tecnologias base da Web.