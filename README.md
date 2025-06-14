# Site-TI

# C3 : Product

A inspiração partiu de outros sites de universidades, e a ideia foi criar um site de uma universidade que não existe.

## 3.1 Instalation

Local:

[repositório do GitHub](https://github.com/inf24tig38/inf24tig38)

[index.html](https://github.com/inf24tig38/inf24tig38/blob/main/index.html)

Netlify:

Subida automática através de ligação ao GitHub

[Link para o site no Netlify](https://inf24tig38.netlify.app/)

## 3.2 Usage

- Site totalmente público

- Não requer autenticação

- Apenas validação básica nos formulários

## 3.3 Application/Product help

- Menu visível no topo em todas as páginas

- Cores consistentes

- Tooltips nos campos do formulário

## 3.4 Forms

HTML5: campos required, type=email, etc.
Exemplo: pagina de registo

## 3.5 HTML5 and CSS3 validation

_Describe the method used to **validate HTML and CSS**. Don't forget to add details about the used validators. Show the validation results._
_Add images, tables or reports of the tests performed._
_You can start by adding direct links to the validators:_
[HTML Validator fo this repository](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fgithub.com%2FexemploTrabalho%2Freport_inf-ti)
[CSS Validator for this repository](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgithub.com%2FexemploTrabalho%2Freport_inf-ti&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

## 3.6 Implementation details

- 📑 Estrutura mínima HTML:

- Download XML	<a href="universidade.xml" download>Descarregar XML</a>
- Tabela	 [cursos.html](https://inf24tig38.netlify.app/cursos)
- Lista e lista aninhada	[cursos.html](https://inf24tig38.netlify.app/cursos)
- Destaque (<em>)	usado em frases importantes
- Imagem	<img src="img/logo.png">
- <figure> e <figcaption>	imagem de campus com legenda
- Link interno [cursos.html](https://inf24tig38.netlify.app/cursos)
- Link externo	Localização (na barra de menu)
- Formulário	[registo.html](https://inf24tig38.netlify.app/registo)

- 🎨 CSS aplicado:
- Requisito	Exemplo
- Seletor de tipo	body {}
- Seletor de ID	#menuNav {}
- Seletor de classe	.caixa-texto {}
- Pseudo-classe	a:hover
- Atributo	input[type="text"] {}
- Pseudo-elemento	::placeholder
- Combinador	header nav ul li {}
- Realce visual	highlight, hover, font-weight
- Inserção de imagem com CSS	background-image: url(...)
- Elemento escondido	display: none
- Estilo de texto/fonte	font-family, color
- Responsividade	@media (max-width: 768px)

Read [Creating a permanent link to a code snippet](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet) to understand how to link or embed lines of code in markdown.

Page Requirements
| Requirement | Usage Example |
| :---: | :---: |
| page 1 | [index.html](https://inf24tig38.netlify.app/) |
| page 2 | [cursos.html](https://inf24tig38.netlify.app/cursos) |
| page 3 | [registo.html](https://inf24tig38.netlify.app/registo) |
| page 4 | [sobre.html](https://inf24tig38.netlify.app/sobre) |
| 1 XML document | [universidade.xml](https://github.com/inf24tig38/inf24tig38/blob/main/xml/universidade.xml) |
| 1 XSD document | [universidade.xsd](https://github.com/inf24tig38/inf24tig38/blob/main/xml/universidade.xsd) |
| CSS file (if any) | index.css, cursos.css, registo.css, sobre.css |

Describe how the XML validation was performed.

HTML Minimum requirements (usage of)
| Requirement | Usage Example |
| :---: | :---: |
| XML file download | <a href="xml/universidade.xml" download>Descarregar XML</a> (presente no index.html) |
| Table | Presente em cursos.html |
| List |<ul> e <li> em index.html e cursos.html|
| Nested List |<ul><li>Curso<ul><li>Detalhe</li></ul></li></ul> em cursos.html|
| Highlight | Ex: <em>Inscreve-te já</em>|
| Image |	<img src="img/campus.jpg">, entre outras|
| Figure | <figure><img src="img/sobre4k.png"><figcaption>...</figcaption></figure>  |
| Figure Caption      |<figcaption> nas imagens de apresentação |
| Internal Link | <a href="registo.html">Inscreve-te</a>     |
| External Link | [Localização](https://www.google.com/maps?q=Caxinas,+Vila+do+Conde)  |
| Form |Formulário em registo.html com campos input, select, textarea |

CSS Minimum requirements (usage of/change of)
| Requirement | Usage Example |
| :---: | :---: |
| Type selector |body {}, header {}|
| Id selector | #menuNav {} |
| Class Selector | .conteudo {}  |
| Pseudo-class Selector | a:hover {} |
| Attribute Selector | input[type="text"] {} |
| Pseudo-element Selector | ::placeholder {}  |
| Combinator Selector |section article {} |
| Change Highlight style |font-weight: bold;, background-color em textos destacados|
| Image insertion | background-image: url(...) (em botões ou header)|
| Hide an element | .invisivel { display: none; } |
| Text style | color, font-size, font-weight |
| Font style |font-family: Arial, sans-serif|
| Background style |background-color, background-image|
| float/position style | float: left, position: relative|
| List style | list-style: none, list-style-type: square |
| Box element style |border, padding, margin, box-shadow |
| table style | table, th, td com border-collapse e cores|
| Responsibility style 2 screen sizes | Uso de @media em CSS para diferentes tamanhos de ecrâ|

## 3.7 Other relevant implementation details

Elemento	                          Exemplo
JS altera conteúdo	        script.js tem função mostrarMensagem() que altera texto de um div
JS altera estilo	          element.style.backgroundColor = 'lightblue' em interações
JS carrega XML	            nao existe
<video> ou <audio>	        nao existe
CSS Flexbox	                display: flex usado para layout de menus
CSS animações/transições	  transition: background-color 0.3s ease; em botões e links
CSS transform               transform: scale(1.05); em imagens com hover
CSS animation               Botão inscreve-te

Valorization elements (example)
| Element | Usage Example |
| :---: | :---: |
| With Js, alter element content |       |
| With Js, alter element style |       |
| With Js, load xml and change element contents |       |
| &lt;video&gt; element |       |
| &lt;audio&gt; element |       |
| &lt;canvas&gt; element |       |
| With CSS, Flexbox |       |
| With CSS, transiction |       |
| With CSS, transform |       |
| With CSS, animation |       |
| (...) |       |




---
[< Previous](c2.md) | [^ Main](../../../) | [Next >](c4.md)
:--- | :---: | ---: 
