# Site-TI

# C3 : Product

A inspiração partiu de outros sites de universidades, e a ideia foi criar um site de uma universidade que não existe.

## 3.1 Instalation

Local:

[repositório do GitHub](https://github.com/inf24tig38/inf24tig38)

[Abrir index.html num browser](https://github.com/inf24tig38/inf24tig38/blob/main/index.html)

Netlify:

Subida automática através de ligação ao GitHub

[Link para o site no Netlify](https://inf24tig38.netlify.app/)

## 3.2 Usage

Site totalmente público

Não requer autenticação

Apenas validação básica nos formulários

## 3.3 Application/Product help

Menu visível no topo em todas as páginas

Cores consistentes

Tooltips nos campos do formulário

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

📑 Estrutura mínima HTML:
Requisito	Exemplo
Download XML	<a href="universidade.xml" download>Descarregar XML</a>
Tabela	Ex: cursos.html
Lista e lista aninhada	<ul><li>Faculdade A<ul><li>Curso X</li></ul></li></ul>
Destaque (<em>)	usado em frases importantes
Imagem	<img src="img/logo.png">
<figure> e <figcaption>	imagem de campus com legenda
Links internos/externos	<a href="cursos.html">Cursos</a>
Formulário	inscrição.html com inputs e botão submit

🎨 CSS aplicado:
Requisito	Exemplo
Seletor de tipo	body {}
Seletor de ID	#menuNav {}
Seletor de classe	.caixa-texto {}
Pseudo-classe	a:hover
Atributo	input[type="text"] {}
Pseudo-elemento	::placeholder
Combinador	header nav ul li {}
Realce visual	highlight, hover, font-weight
Inserção de imagem com CSS	background-image: url(...)
Elemento escondido	display: none
Estilo de texto/fonte	font-family, color
Responsividade	@media (max-width: 768px)

Read [Creating a permanent link to a code snippet](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet) to understand how to link or embed lines of code in markdown.

Page Requirements
| Requirement | Usage Example |
| :---: | :---: |
| At least 4 pages | index.html, cursos.html, registo.html, sobre.html |
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
| External Link |<a href="https://netlify.app">Netlify</a> (adicionável em rodapé) |
| Form |Formulário em registo.html com campos input, select, textarea |

CSS Minimum requirements (usage of/change of)
| Requirement | Usage Example |
| :---: | :---: |
| Type selector |body {}, header {}|
| Id selector |       |
| Class Selector |       |
| Pseudo-class Selector |       |
| Attribute Selector |       |
| Pseudo-element Selector |       |
| Combinator Selector |       |
| Change Highlight style |       |
| Image insertion |       |
| Hide an element |       |
| Text style |       |
| Font style |       |
| Background style |       |
| float/position style |       |
| List style |       |
| Box element style |       |
| table style |       |
| Responsibility style 2 screen sizes |       |

## 3.7 Other relevant implementation details

Elemento	                          Exemplo
JS altera conteúdo	        botão que altera parágrafo
JS altera estilo	          element.style.color = 'red'
JS carrega XML	            fetch("universidade.xml")... (se usado)
<video> ou <audio>	        (opcional)
CSS Flexbox	                layout responsivo com display: flex
CSS animações/transições	  transition: all 0.3s

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
