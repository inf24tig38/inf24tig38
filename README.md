# Site-TI

# C3 : Product

Este trabalho foi desenvolvido no âmbito da licenciatura em Informática (1.º ano) na disciplina de Tecnologia de Internet e tem como objetivo aplicar os conhecimentos adquiridos nas aulas sobre desenvolvimento web.
A inspiração para o projeto surgiu após observar vários sites de universidades reais, o que me levou a imaginar e criar o site de uma universidade fictícia: a Universidade das Caxinas.

O principal foco não foi criar um site profissional, mas sim explorar e praticar o uso das várias ferramentas ensinadas, como HTML5, CSS3, JavaScript, XML e XSD.
Ao longo do projeto, tentei aplicar o máximo possível dos conceitos abordados nas aulas, experimentando diferentes funcionalidades e efeitos para consolidar a aprendizagem de forma prática.

## 3.1 Instalation

[Repositório do GitHub](https://github.com/inf24tig38/inf24tig38)
Updates automáticos através de ligação ao GitHub, alterações efetuadas no visual studio são automaticamente implementadas atravez do upload para o github e de seguida paa o Netlify

[WebSite no Netlify](https://inf24tig38.netlify.app/)

## 3.2 Usage

- Site totalmente público

- Não requer autenticação

- Apenas validação básica nos formulários

- Totalmente intuitivo

## 3.3 Application/Product help

- Menu visível no topo em todas as páginas com redirecionamento

- Cores consistentes

- Tooltips nos campos do formulário

- Botão pulsante para inscrição

## 3.4 Forms

- HTML5: campos required, type=email, etc.
- Exemplo: pagina de registo [Validações](https://github.com/inf24tig38/inf24tig38/blob/a64e8f4f71bcd3080b62f90a626d1ca12c9d5e14/registo.html#L24-L50) 

## 3.5 HTML5 and CSS3 validation

_Describe the method used to **validate HTML and CSS**. Don't forget to add details about the used validators. Show the validation results._
- O método utilizado foi através das ferramentas oficiais do W3C, onde validei todos os ficheiros HTML e CSS do projeto.
Durante o processo de validação, foram detetados pequenos avisos, como a ausência de subtítulos <h2> em algumas secções e alguns erros ortográficos.
Após as devidas correções, todos os ficheiros foram validados com sucesso, sem erros.
  
- | [Validações em Screenshot](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L65-L92](https://github.com/inf24tig38/inf24tig38/tree/main/Valida%C3%A7%C3%B5es%20W3C)) |

- | [HTML Validator for this repository]([https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fgithub.com%2FexemploTrabalho%2Freport_inf-ti](https://validator.w3.org/detailed.html#validate-by-upload)) |
- | [CSS Validator for this repository]([https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgithub.com%2FexemploTrabalho%2Freport_inf-ti&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en](https://validator.w3.org/#validate_by_upload)) |

## 3.6 Implementation details

Page Requirements
| Requirement | Usage Example |
| :---: | :---: |
| page 1 | [index.html](https://inf24tig38.netlify.app/) |
| page 2 | [cursos.html](https://inf24tig38.netlify.app/cursos) |
| page 3 | [registo.html](https://inf24tig38.netlify.app/registo) |
| page 4 | [sobre.html](https://inf24tig38.netlify.app/sobre) |
| 1 XML document | [universidade.xml](https://github.com/inf24tig38/inf24tig38/blob/main/xml/universidade.xml) |
| 1 XSD document | [universidade.xsd](https://github.com/inf24tig38/inf24tig38/blob/main/xml/universidade.xsd) |
| CSS file cursos | [cursos.css](https://github.com/inf24tig38/inf24tig38/blob/ea9cf5b42baa06dfa69c9076a6836dfd38bb6f96/css/cursos.css#L1-L127)|
| CSS file index | [index.css](https://github.com/inf24tig38/inf24tig38/blob/ea9cf5b42baa06dfa69c9076a6836dfd38bb6f96/css/index.css#L1-L273)|
| CSS file registo | [registo.css](https://github.com/inf24tig38/inf24tig38/blob/ea9cf5b42baa06dfa69c9076a6836dfd38bb6f96/css/registo.css#L1-L147)|
| CSS file sobre | [sobre.css](https://github.com/inf24tig38/inf24tig38/blob/ea9cf5b42baa06dfa69c9076a6836dfd38bb6f96/css/sobre.css#L1-L120)|

- As validações dos ficheiros XML e XSD foram realizadas através do site https://www.freeformatter.com/xml-validator-xsd.html.
- O processo decorreu sem erros, e ambos os ficheiros foram validados com sucesso.

- O validador oficial da W3C encontrava-se indisponível para este tipo de validação no momento da verificação.

HTML Minimum requirements (usage of)
| Requirement | Usage Example |
| :---: | :---: |
| XML file download | [Descarregar xml](https://github.com/inf24tig38/inf24tig38/blob/ea9cf5b42baa06dfa69c9076a6836dfd38bb6f96/index.html#L54) |
| Table | [cursos.html ](https://github.com/inf24tig38/inf24tig38/blob/cf69c587a22c4a225735c7af66d352351c9627da/sobre.html#L36-L71)|
| List | [cursos.html ](https://github.com/inf24tig38/inf24tig38/blob/44ae34270d38d4172412a217de8becf3a9eeadde/cursos.html#L22-L64)|
| Nested List | [cursos.html ](https://github.com/inf24tig38/inf24tig38/blob/44ae34270d38d4172412a217de8becf3a9eeadde/cursos.html#L22-L64)|
| Highlight | [Inscreve-te já](https://github.com/inf24tig38/inf24tig38/blob/ea9cf5b42baa06dfa69c9076a6836dfd38bb6f96/index.html#L37) |
| Image |	[Imagem](https://github.com/inf24tig38/inf24tig38/blob/cf69c587a22c4a225735c7af66d352351c9627da/index.html#L37-L40)|
| Figure | [Imagem](https://github.com/inf24tig38/inf24tig38/blob/cf69c587a22c4a225735c7af66d352351c9627da/index.html#L37-L40)|
| Figure Caption  | [Imagem](https://github.com/inf24tig38/inf24tig38/blob/cf69c587a22c4a225735c7af66d352351c9627da/index.html#L37-L40)|
| Internal Link | [Inscreve-te já](https://github.com/inf24tig38/inf24tig38/blob/ea9cf5b42baa06dfa69c9076a6836dfd38bb6f96/index.html#L37) |
| External Link | [Localização](https://www.google.com/maps?q=Caxinas,+Vila+do+Conde)  |
| Form | [Registo](https://github.com/inf24tig38/inf24tig38/blob/cf69c587a22c4a225735c7af66d352351c9627da/registo.html#L23-L97) |

CSS Minimum requirements (usage of/change of)
| Requirement | Usage Example |
| :---: | :---: |
| Type selector |[Body](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L1-L10),[Header](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L55-L63)|
| Id selector | [Menu Nav](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L65-L92) |
| Class Selector |[Disciplinas](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/cursos.css#L73-L76) |
| Pseudo-class Selector |[Menu Nav-a:hover ](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/cursos.css#L73-L76) |
| Attribute Selector |[Formulário input: type="text"](https://github.com/inf24tig38/inf24tig38/blob/a907c554044655b7808d08fc2759e3eb6ba73946/css/registo.css#L32-L39) |
| Pseudo-element Selector |[::placeholder](https://github.com/inf24tig38/inf24tig38/blob/fe2e8e6b27722fc6b72a3629246fd3aeca9cd51e/css/registo.css#L146-L149) |
| Combinator Selector |[Artigo-section article](https://github.com/inf24tig38/inf24tig38/blob/fe2e8e6b27722fc6b72a3629246fd3aeca9cd51e/css/index.css#L244-L250) |
| Change Highlight style |[Palavras Destacadas](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L123-L128) |
| Image insertion |[Imagem de Fundo](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L4) |
| Hide an element |[Janela Sobreposição](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L152-L158) |
| Text style |[Color](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L2) |
| Font style |[Font-family ](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L2) |
| Background style |[background-color](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L2) |
| float/position style |[Float](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L132) , [position](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L7)|
| List style |[list-style](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L66) |
| Box element style |[padding, margin](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/index.css#L66) |
| table style |[Estilo tabela](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/sobre.css#L75-L103) |
| Responsibility style 2 screen sizes |[@Media](https://github.com/inf24tig38/inf24tig38/blob/4382734411c0da485a21df1ccd7e31b3c45ce76a/css/sobre.css#L106-L119) |

## 3.7 Other relevant implementation details

Valorization elements (example)
| Element | Usage Example |
| :---: | :---: |
| With Js, alter element content |[Botão Autor](https://github.com/inf24tig38/inf24tig38/blob/0528b3164e3dded33c7cdc9d155c70ecb39144e5/js/script.js#L27-L47 ) |     
| With Js, alter element style |[Botão Autor](https://github.com/inf24tig38/inf24tig38/blob/0528b3164e3dded33c7cdc9d155c70ecb39144e5/js/script.js#L27-L47 ) | 
| With Js, load xml and change element contents |[Botão Autor XML](https://github.com/inf24tig38/inf24tig38/blob/2c2dc52b5702ebd174d69f38d23aac6afbd4a2fc/js/script.js#L27-L59) |       
| &lt;video&gt; element |  Não tem     |
| &lt;audio&gt; element |[Audio Palmas](https://github.com/inf24tig38/inf24tig38/blob/c7f7bb60012fd1870444f02da283cd63cd3cc2bf/js/script.js#L22) |  
| &lt;canvas&gt; element |   Não tem    |
| With CSS, Flexbox |[Footer ](https://github.com/inf24tig38/inf24tig38/blob/2c2dc52b5702ebd174d69f38d23aac6afbd4a2fc/css/index.css#L37-L47) |       
| With CSS, transiction |[Backgound color ](https://github.com/inf24tig38/inf24tig38/blob/2c2dc52b5702ebd174d69f38d23aac6afbd4a2fc/css/registo.css#L71) |   
| With CSS, transform |[Transform ](https://github.com/inf24tig38/inf24tig38/blob/2c2dc52b5702ebd174d69f38d23aac6afbd4a2fc/css/index.css#L173) |  
| With CSS, animation |[Animação - Botão inscreve-te ](https://github.com/inf24tig38/inf24tig38/blob/2c2dc52b5702ebd174d69f38d23aac6afbd4a2fc/css/index.css#L231-L253) |   
| (...) |       |




---
[< Previous](c2.md) | [^ Main](../../../) | [Next >](c4.md)
:--- | :---: | ---: 
