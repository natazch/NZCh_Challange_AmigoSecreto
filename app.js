// El principal objetivo de este desafío es 
// fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigo =[];
nombreElegido="";

//funcion para agregar nombres a la lista
function agregarAmigo(){
    let nuevoNombre;
    //agrega el valor de la caja de texto en variable temporal nuevoNombre
    nuevoNombre = document.getElementById('amigo').value;

    //validar si el valor ingresado es diferente a vacio
    if (nuevoNombre!= "") {
          //agrega el valor de nuevoNombre a la lista listaAmigo
      listaAmigo.push(nuevoNombre);

      //borrar valor de la variable nuevoNombre
      nuevoNombre="";
      //borra contenido de la caja de texto
      document.getElementById('amigo').value = "";

      //muestra valor de la lista
      console.log (listaAmigo);

      //agrega lista en pantalla
      let listaHTML = document.getElementById('listaAmigos');
      listaHTML.innerHTML = ""; //limpia lista antes de actualizar
      
      listaAmigo.forEach(amigo => {
              let li = document.createElement('li');
              li.textContent = amigo;
              listaHTML.appendChild(li);
      });
    } else {
    alert("Debe ingresar un nombre");
    }
}


// funcion para sortear
function sortearAmigo() {
  // obtener un índice aleatorio dentro de la lista
  let indiceAleatorio = Math.floor(Math.random() * listaAmigo.length);
  
  // obtener el nombre en el índice aleatorio
  let nombreElegido = listaAmigo[indiceAleatorio];

  console.log("El nombre elegido es:", nombreElegido);

  //devuelve nombre
  let listaHTML = document.getElementById('listaAmigos');
  listaHTML.innerHTML = ""; // Limpiar lista
  listaHTML.innerHTML = "El nombre elegido es: " + nombreElegido; //muestra el nombre

}

// Llamar a la función y mostrar el resultado
let nombreElegido = sortearAmigo();




