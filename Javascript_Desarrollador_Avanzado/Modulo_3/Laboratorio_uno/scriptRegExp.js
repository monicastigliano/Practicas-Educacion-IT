let inputs = document.querySelectorAll("input,textarea")
		inputs.forEach(function(input){
			input.addEventListener("focus",function(e){
				e.target.parentNode.children[0].classList.add("subir")
				e.target.parentNode.classList.add("animacionBorde")
			})

			input.addEventListener("blur",function(e){
				if(e.target.value.length <= 0){
					e.target.parentNode.children[0].classList.remove("subir")
				}
				e.target.parentNode.classList.add("animacionBorde")
			})
		})

 //Continuando con una extension del formulario de la clase pasada, esta vez ademas de animarlo vamos a intentar validarlo
        //1)Asignarle un evento de blur a cada input del formulario de manera tal que se cumplan las siguientes validaciones sin usar expresiones regulares :
            //1.1)nombre : El nombre debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos dos letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.

let inputNombre = document.getElementById('nombre')

inputNombre.addEventListener('blur', function(e){
    let cadena = inputNombre.value.split(' ')
    let regExp = /^([a-zA-Z]{2,15}\s?[a-zA-Z]{2,15}|[a-zA-Z]{2,15})$/
    if(cadena.length > 2){
        cadena = cadena.slice(0,2)
    } 
    cadena = cadena.join(' ')
    let valor = (regExp.test(cadena))
    if(valor){ 
        inputNombre.setCustomValidity('')
        inputNombre.classList.remove('error')
        inputNombre.classList.add('success')
        inputNombre.value = cadena
    } else {
        inputNombre.setCustomValidity('"El nombre debe ser de una o dos palabras como máximo. Cada palabra debe tener por lo menos dos letras."')
        inputNombre.classList.add('error')
        inputNombre.classList.remove('success')
        }
})

//1.2)apellido : El apellido debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos cuatro letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.

let inputApellido = document.getElementById('apellido')

inputApellido.addEventListener('blur', function(e){
    let cadena = inputApellido.value.split(' ')
    let regExp = /^([a-zA-Z]{4,15}\s?[a-zA-Z]{4,15}|[a-zA-Z]{4,15})$/
    if(cadena.length > 2){
        cadena = cadena.slice(0,2)
    } 
    cadena = cadena.join(' ')
    let valor = (regExp.test(cadena))
    if(valor){ 
        inputApellido.setCustomValidity('')
        inputApellido.classList.remove('error')
        inputApellido.classList.add('success')
        inputApellido.value = cadena
    } else {
        inputApellido.setCustomValidity('"El Apellido debe ser de una o dos palabras como máximo. Cada palabra debe tener por lo menos cuatro letras."')
        inputApellido.classList.add('error')
        inputApellido.classList.remove('success')
        }
})
        
//1.3)email : El email debe respetar el formato nombre@dominio.com pudiendo contener el nombre caracteres especiales como -_.  

let inputEmail = document.getElementById('email')

inputEmail.addEventListener('blur', function(){
    let cadenaEmail = inputEmail.value
    let nombre = /^[a-zA-Z._-]+(?<!\.)@[a-zA-Z._-]+\.[a-zA-Z]{2,4}$/
    let vale = nombre.test(cadenaEmail) // Mientras esta variable sea true se va ir cumpliendo el formato de mail
    if(vale) {
        inputEmail.classList.remove('error')
        inputEmail.classList.add('success')
        inputEmail.setCustomValidity('');
    } else {
        inputEmail.classList.add('error')
        inputEmail.classList.remove('success')
        inputEmail.setCustomValidity('El email debe respetar el formato nombre@dominio.com pudiendo contener el nombre caracteres especiales como -_');
    }
})

//1.4)reemail : Su valor debe ser identico al de email

let inputReeMail = document.getElementById('reemail')

inputReeMail.addEventListener('blur', function(){
    if (inputEmail.value === inputReeMail.value){
        inputReeMail.classList.remove('error')
        inputReeMail.classList.add('success')
        inputReeMail.setCustomValidity('')
    } else {
        inputReeMail.classList.add('error')
        inputReeMail.classList.remove('success')
        inputReeMail.setCustomValidity('Su valor debe ser identico al de email')
    }
})

//1.5)contraseña : La contraseña debe tener como mínimo 6 letras sin espacios y los caracteres especiales que se pueden usar son ?!_-.

let password = document.getElementById('password')

password.addEventListener('blur', function(){
    let cadenaContraseña = password.value
    let caracteres = /^[a-zAZ0-9]{6,15}$/
    let valido = caracteres.test(cadenaContraseña)
    if(valido) {
        password.classList.remove('error')
        password.classList.add('success')
        password.setCustomValidity('')
    } else {
        password.classList.add('error')
        password.classList.remove('success')
        password.setCustomValidity('La contraseña debe tener como mínimo 6 letras sin espacios y los caracteres especiales que se pueden usar son ? ! _ - ')
    }
})

//1.6)titulo : El titulo puede ser opcional. Si el mismo está faltante, se debe usar el string "Post Anonimo"

let titulo = document.getElementById('titulo')

titulo.addEventListener('blur', function(){
    let texto = titulo.value
    if(texto.length <= 0) titulo.value = 'Post Anónimo'
    titulo.setCustomValidity('')
    titulo.classList.add('success')
    
})


//1.7)mensaje : El mensaje debe tener como mínimo una letra. Puede ser cualquier caracter siempre y cuando el mismo no se imprima en pantalla sin ser escapado, de lo contrario podríamos tener un ataque XSS.

let mensaje = document.getElementById('mensaje')


mensaje.addEventListener('blur', function(){
    let textoMensaje = mensaje.value
    let regExpr = /^[\w*\W?\s?]+$/
    if(regExpr.test(textoMensaje)) {
        let textoMensajeEncode = encodeURIComponent(textoMensaje)
        mensaje.classList.add('success')
        mensaje.setCustomValidity('')
    }
    else mensaje.setCustomValidity('El mensaje debe tener como mínimo una letra.')
})


//2)Si no cumplieran con lo requerido, los mismos deberán mostrar un mensaje de error customizado utilizando la API de validación de HTML5 que le corresponda en cada caso. El elemento deberá además tener la clase error. [LISTO]

//3)Si cumplieran con lo requerido deberán tener la clase success. [LISTO]

//4)Realizar las mismas operaciones pero esta vez dentro de un evento submit que deberá estar registrado en el formulario. [LISTO]

let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    e.stopPropagation()
    console.log(inputNombre.value, inputApellido.value, inputEmail.value, titulo.value, encodeURIComponent(mensaje.value))
    inputNombre.value = ''
    inputApellido.value = ''
    inputEmail.value = ''
    inputReeMail.value = ''
    password.value = ''
    titulo.value = ''
    mensaje.value = ''
})