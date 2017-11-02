###DOM: document object model

Estructura del sitio web, conformada por elementos llamados **nodos**.

Consta de sus elementos primarios head, body ( que dentro de si mismos contienes otros elementos).

Cada *nodo* es un objeto.

Se accede a los elementos con dom mediante etiquetas , la etiqueta script va al final del body.

** document.getElementsByTagName("p");
** document.getElementById("segundo");

###CREANDO NODOS EN EL DOM

Se puede agregar un elemento del html, por ej agregar un h2 bajo h1, los cambios se van a borrar a no ser q se guarde en una base de datos.

Pasos: 1.-crear elemento

**var elemento = document.createElement("h2"); // para crear el elemento en el parentesis va el elemento a crear//

2.- crear un nodo texto

**var contenido = document.createTextNode("texto a agregar")

3.- Añadir el nodo de texto al elemento

**elemento.appendChild(contenido); 

4.-agregar atributos al elemento

**elemento.serAtribute("align","center");

5.-agregar el elemento al documento

**document.getElementById("subtitulo").appendChild(elemento);

###COMO POSICIONAR NODOS EN DONDE SE NECESITE (antes o depues de...)
###COMO MODIFICAR TANTO EL CONTENIDO DEL NODO.
###ELIMINAR Y REEMPLAZAR.

1.-crear el elemento: var elemento = documento.crealeElement("li"),
2.-			  contenido = document.createTextNode("nuevo texto") crear el texto para nuestro elemento)

3.- juntarlos : elemento.appendChild(contenido);

4.- agregar donde lo necesitemos: decir que elemento queremos agregar y luego donde los vamos agregar:

**insertBefore** al inicio dentro del padre, debe tener una referencia ¿que quede antes de que?




