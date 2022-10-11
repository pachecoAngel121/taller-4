function EnviarDatos() {
    var cedula = document.getElementById(cedula).value;
    var apellido = document.getElementById(apellido).value;
    var nombre = document.getElementById(nombre).value;
    var estadocivil = document.getElementById(estadocivil).value;
    var sexo = document.getElementById(sexo).value;
    var ciudad = document.getElementById(ciudad).value;
    var direccion = document.getElementById(direccion).value;
    var telefono = document.getElementById(telefono).value;
    var correo = document.getElementById(correo).value;
    var entrar = false; 

if (cedula.length < 9) {
    alert("Error al digitar su numero de cédula");
    entrar = true;
    document.getElementById("cedula").focus();
}
if (apellido == "") {
    alert("El apellido es obligatorio");
    entrar = true;
    document.getElementById("apellido").focus();
}
if (nombre == "") {
    alert("El nombre es obligatorio");
    entrar = true;
    document.getElementById("nombre").focus();
}
if (estadocivil == "") {
    alert("Seleccione su estado civil");
    entrar = true;
    document.getElementById("estadocivil").focus();
}
if (sexo == "") {
    alert("Seleccione su sexo es obligatorio");
    entrar = true;
    document.getElementById("sexo").focus();
}
if (ciudad == "") {
    alert("Ingrese la ciudad donde reside es obligatorio");
    entrar = true;
    document.getElementById("ciudad").focus();
}
if (direccion == "") {
    alert("Su direccion es obligatorio");
    entrar = true;
    document.getElementById("direccion").focus();
}
if (telefono.length < 8) {
    alert("Error al digitar su número telefónico");
    entrar = true;
    document.getElementById("telefono").focus();
}
if (correo == "") {
    alert("Su correo electronico es obligatorio");
    entrar = true;
    document.getElementById("correo").focus();
}
if (!entrar) {
    alert("sus datos fueron enviados!!");
}

console.log(cedula + " " + apellido + " " + nombre + " " + estadocivil + " " + sexo + " " + ciudad + " " + direccion + " " +
 telefono + " " + correo) ;
}