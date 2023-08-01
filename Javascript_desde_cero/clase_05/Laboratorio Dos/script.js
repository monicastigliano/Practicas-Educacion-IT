//Ejercicio 1

// Tu trabajo en este laboratorio será generar una
// pequeña aplicación en la cual puedas ingresar,
// mediante campos de texto, un nombre y un
// apellido. Al hacer clic en un botón, dicho nombre
// y apellido deberá agregarse a una lista debajo.
// Como requisito, deberás utilizar jQuery y
// Handlebars conjuntamente.

class Persona {
  constructor(nom, apell){
    this.nombre = nom;
    this.apellido = apell
  }
}


let nombre = document.getElementById('txtNombre');
let apellido = document.getElementById('txtApellido');
const plantilla = Handlebars.compile(`<ul>

  <li>{{nombre}} {{apellido}}</li>

</ul>`)
$('#btnAgregar').click(function(){
  
  $('#items').before(plantilla({
    nombre: nombre.value,
    apellido: apellido.value
  })) ;
});
