//alert("Hola mundo");

//const nombre = prompt("cual es su nombre");
//alert("Tu nombre es:" + nombre);

const nombre = document.getElementById ("Nombre");

const Apellido = document.getElementById ("Apellido");

const email = document.getElementById ("Correo");

const Contraseña = document.getElementById ("Contraseña");

const  contrasena = document.getElementById("confimar contrasena");

const btn = document.getElementById("btn");
btn.addEventListener("click" , (e) => {
e.preventDefault();
 console.log("Tu nombre es:" +nombre.value);
 console.log("Tu apellido es:" +Apellido.value);
 console.log("Tu Correo es:" +email.value);
 console.log("Tu contraseña es:"+Contraseña.value);
 nombre.value = ""
 Apellido.value = ""
 email.value = ""
 Contraseña.value = ""

});




//const nombre = "Wanyer De Jesus";
//alert(nombre);