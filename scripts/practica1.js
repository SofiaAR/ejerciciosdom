function add(){
	//tomar el valor// //antes crear una variable q contenga a ese valor//
	var comments = document.getElementById("comment").value; //variable que contiene al valor *value*(node.value)//
	document.getElementById("comment").value = ""; //se toma el elemento creado y se iguala a un elemento vacio////limpa el valor//
	var newComments = document.createElement('div'); //creando un contenedor para lo q viene luego, en este caso un div//
	var cont = document.getElementById('cont'); 

//creando elementos en orden//
	var check = document.createElement('input'); // creando el check-box//
	check.type = 'checkbox'; //input del tipo (type) chekbox)

	var paragraph = document.createElement('p'); //creando parrafo//
	paragraph.classList.add('color'); //agregando color al parrafo//
	var nodoText = document.createTextNode(comments); // le estas diciendo al comentario que es un nodo de texto//
	paragraph.appendChild(nodoText); // le dijimos q p es padre de este nodo de txto//

	var heart = document.createElement('i'); //creando icono corazón//
	heart.classList.add('fa', 'fa-heart','heart');//agregando una clase (classlist)//

	var trash = document.createElement('i'); //creando icono corazón//
	trash.classList.add('fa', 'fa-trash','trash');

	newComments.appendChild(check); //estamos diciendo que new comments es papa de todos estos elementos check, trash etc, ya q estaban sueltos//
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	newComments.appendChild(paragraph);

	//metemos todo nuestro contenido en un solo contenedor q es cont//
	cont.appendChild(newComments);

	check.addEventListener('click',function(){ //estamos creando un escuchador , que cuando escuhe click cambie de color cn toggle//
	paragraph.classList.toggle('strike-out'); // se le dice q a paragraph 	
	
	})

	trash.addEventListener('click',function(){ //trash escuchará click y ejecutará la función//
		cont.removeChild(newComments); //va al contenido y remueve al hijo del contenido//
	})

	heart.addEventListener('click',function(){
		heart.classList.toggle('red');
	})
}
