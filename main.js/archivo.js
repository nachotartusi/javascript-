

// declaro clases

class Persona {
    constructor (nombre,edad,telefono,nroCliente) {
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
        this.telefono = telefono;
        this.consultas= 0;
        this.nroCliente=nroCliente;
        this.recaudacion=0;
    }

    agregarCosultas(){
        let pack = parseInt(prompt("Que pack desea agregar? \n 1: Primera vistia \n 2: Consulta unica \n 3: Pack mensual"));
        if(pack === 1){
            if(this.recaudacion === 0){
                this.consultas = 1;
                this.recaudacion = precio/2;
                alert("Debera abonar: $" + precio/2);
            }
            else{
                alert("No fue posible agregar este pack porque no es su primer visita");
            }
        }
        else if(pack === 2){
            this.consultas = this.consultas + 1;
            this.recaudacion = this.recaudacion + precio;
            alert("Debera abonar: $" + precio);
        }
        else if(pack === 3){
            this.consultas = this.consultas + 8;
            this.recaudacion = this.recaudacion + precio*6;
            alert("Debera abonar: $" + precio*6);

        }
        else{
            alert("El pack seleccionado no existe, vuelva a intentarlo");
        }
    }

    quitarConsultas(){
        if(this.consultas > 0){
            this.consultas = this.consultas - 1;
            alert("El paciente " + this.nombre + " tiene " + this.consultas + " consultas");
        }
        else{
            alert("Usted debe abonar al menos una consulta para realizar esta accion");
        }
    }

    editarinfo(){
        let op= parseInt(prompt("Indique el dato que quiere modificar: \n 1- Nombre \n 2- Edad \n 3- Telefono"));
        if(op === 1){
            let nombre = prompt("Ingrese el nuevo nombre:");
            this.nombre = nombre;
        }
        else if(op === 2){
            let edad = prompt("Ingrese la nueva edad:");
            this.edad = edad;
        }
        else if(op === 3){
            let telefono = prompt("Ingrese el nuevo telefono:");
            this.telefono = telefono;
        }
        else{
            alert("opcion no valdida");
        }
    }
}


function registrarPaciente() {
    let nombre = prompt("Ingrese el nombre del paciente: ");
    let edad = prompt("Ingrese la edad del paciente: ");
    let telefono = prompt("Ingrese el telefono del paciente: ");
    const paciente = new Persona(nombre,edad,telefono,nroCliente);
    arrayPersonas.push(paciente);
    alert("Se ha registrado el paciente: " + paciente.nombre + "\nEdad: " + paciente.edad + "\nContacto: " + paciente.telefono + "\n Numero de cliente: " + paciente.nroCliente );
    nroCliente++;
}

function verPaciente() {
    let nro = parseInt(prompt("Ingrese el numero de cliente: "));
    let seEncontro = false;
    for(let i=0; i<arrayPersonas.length; i++){
        if (nro === arrayPersonas[i].nroCliente){
            alert("Se ha encontrado el paciente: " + arrayPersonas[i].nombre + "\nEdad: " + arrayPersonas[i].edad + "\nContacto: " + arrayPersonas[i].telefono + "\nEsta persona cuenta con "+ arrayPersonas[i].consultas + " consultas")
            let op = parseInt(prompt("Digite: \n1- Agregar consultas \n2- Consulta realizada \n3-Editar informacion "));
            if(op === 1){
                arrayPersonas[i].agregarCosultas();
            }
            else if(op === 2){
                arrayPersonas[i].quitarConsultas();
            }
            else if(op === 3){
                arrayPersonas[i].editarinfo();
            }
            else{
                alert("Opcion no valida");
            }
            seEncontro = true;
        }
    }
    if(!seEncontro){
        alert("No se econtro ningun paciente con ese numero");
    }
   
}

function mostrarPrecios() {
    alert("CONSULTA UNICA: $" + precio + "\n\nPRIMERA CONSULTA: 50% de descuento \n\nPACK MENSUAL: 8 consulas por el precio de 6")
}

function eliminarPaciente(){
    let nro = parseInt(prompt("Indique el numero de cliente que desea eliminar:"));
    for(let i=0; i<arrayPersonas.length; i++){
        if (nro === arrayPersonas[i].nroCliente){
            arrayPersonas.splice(i, 1);
            alert("Se ha eliminado correctamente")
        }
    }
}


// declaro variables 
let nroCliente=0;
const precio = 1700;

//defino mis array
const arrayPersonas = [];
do {
    let opcion = prompt("Buenas Tades, que desea Hacer? \n\n1) Ingresar nuevo paciente. \n2) Consultar Paciente \n3) Ver Precios \n4) Eliminar paciente");
    if (opcion === '1') {
    registrarPaciente();
    }
    else if (opcion === '2') {
        verPaciente();
    }     
    else if (opcion === '3') {
        mostrarPrecios();
    }
    else if( opcion === '4'){
        eliminarPaciente();
    }
    else {
        alert ("Opcion no valida");
    }
} while ( true )



