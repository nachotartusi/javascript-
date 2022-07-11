
//cass cliente

class Persona {
    constructor (nombre,edad,telefono,nroCliente) {
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
        this.telefono = telefono;
        this.consultas= 0;
        this.nroCliente=nroCliente;
        this.recaudacion=0;
    }
   
} 

// capturo el boton enviar info median un event listener y keydown

let boton = document.getElementById ("botonIngresar");
boton.addEventListener("click", cargarCliente);
let enter = document.getElementById("numCliente");
enter.addEventListener(cargarCliente);
 

//defino mi array
const arrayPersonas = [];

//cargo clientes mediante una funcion
function cargarCliente() {
    let nombre = document.getElementById("nombre").value; 
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("tel").value;
    let nroCliente = document.getElementById("numCliente").value;
    let paciente = new Persona(nombre,edad,telefono,nroCliente);
    //arrayPersonas.push(pacienteNuevo);
    console.log(paciente);
    listaPaciente (paciente);
}
//vacio el formulario
function listaPaciente (Persona) {
    let formulario = document.getElementById ("form");
    let nuevoPaciente = document.createElement ("div");
    //nuevoPaciente.innerHTML = alert (`Has ingresado el siguiente paciente:  ${Persona.nombre} edad: ${Persona.edad}`);
    nuevoPaciente.className = "nuevoPaciente";
    nuevoPaciente.innerHTML = ` Paciente Numero ${Persona.nroCliente} Nombre: ${Persona.nombre} edad: ${Persona.edad} telefono: ${Persona.telefono} `;
    formulario.appendChild(nuevoPaciente);
}
