Vanilla js? => javascript sans exploitation d aucune bibliotheques ou framework
que ca soit cote navigateur ou meme en Node.js

- en node js on a un objet global nomme : 'global'
- en js cote navigareur , l objet global est nomme : 'window'
=> window => tab / onglet
nb: toute modification sur l objet window aura un impact sur l onglet et vice versa
exemple: window.location ="https://google.com"
=> on va naviguer vers google.com

**** most used properties and methods of window object *****
- setInterval method
- alert method
- prompt method
- console object
- window object

***** window *****
il represente l'artbre DOM 'DOM tree'
=> il est constrsuit autour des noeuds (node)
un noeurs peut etre : document, element (balise), commentaire, Text
chaque noeud de l'arbre a une serie de proprietes:
- parentElement => la balise parente (Element)
- parentNode => le noeud parent (Node)
- children => aux enfants directes (element)
- childNodes => aux enfants directes (node)

=> comment faire le parcours
1- chemin complet (non recommende et pas pratique)
document.children[0].children[1].children[0]
2- recherche par id
document.getElementById("xx") => element soit null
3- recherche par balise(element)
document.getElementsByTagName(name of element) => array of element
4- recherche par class 
document.getElementsByClassName(name of class) => array of element
5- recherche par selector class
document.querySelector(css Selector) => premier element trouve
document.querySelectorAll(css selector) => array : tous les elements trouves

=> interaction avec les elements
- contenu de la balise: innerText et innerHTML
NB: innerHTML interprete le contenu tandis que innerText le fait pas
====> evitez le innerHTML pour des raisons de securite

- les attributs: setAttribute(name,value)
                getAttribute(name)
                removeAttribute(name)
-les class: element.classList.add(class1,class2,class3)
element.classList.remove(class1,class2)
element.classList.toggle(class)

- auto destruction : element.remove()

- creation dynamique: document.createElement(element name)
- association pere fils: parent.appendChild(fils)