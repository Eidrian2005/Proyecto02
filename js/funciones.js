/// inicio de la zona de tareas///

const tarea = document.getElementById("tarea")
const prioridad = document.getElementById("prioridad")
const agregar = document.getElementById("agregar")
const contenedorTarea = document.getElementById("contenedorTarea")

///zona de recuperacion de datos de localstorage///

let recuperacion; //lista a la espera de ser llamada
let listaGuardada = localStorage.getItem("lista")
if (listaGuardada) {
    recuperacion = JSON.parse(listaGuardada)
} else{
    recuperacion = []
}
console.log(listaGuardada);

///fin de la zona de recuperacion de datos de localstorage///

///comienzo de la zona de eventos para agregar las tareas///

agregar.addEventListener("click",function() {

if (tarea.value != null && tarea.value != '' && prioridad.value != null && prioridad.value != '') {

    let objetoTarea = {  //lista de objetos donde se guardan los datos de prioridad y tareas
        tarea: tarea.value,
        prioridad: prioridad.value
    }
    
    recuperacion.push(objetoTarea)
    localStorage.setItem("lista", JSON.stringify(recuperacion))

    
    mostrarTareas()

} else{
    console.log('no hay datos para registrar');
}

})


mostrarTareas();

function mostrarTareas() {

    contenedorTarea.innerHTML = ''

    recuperacion.forEach((tareas,indice) => {

        let tareaF = tareas.tarea
    let prioridadF = tareas.prioridad
    let pTarea = document.createElement("p")
    let prioridadTexto = document.createElement("p")
    let btnEliminar = document.createElement("button")
    let btnEditar = document.createElement("button")


    btnEliminar.innerHTML = "Eliminar"
    btnEditar.innerHTML = "Editar"
    pTarea.innerHTML = tareaF
    prioridadTexto.innerHTML = prioridadF
    pTarea.id = "parrafoT"
    pTarea.className = "color"

btnEliminar.classList.add("chicharron");
btnEditar.classList.add("btnEditar");
prioridadTexto.classList.add("prioridadTexto");
contenedorTarea.appendChild(pTarea)
contenedorTarea.appendChild(prioridadTexto)
contenedorTarea.appendChild(btnEliminar)
contenedorTarea.appendChild(btnEditar)

btnEditar.addEventListener('click', () => { // para ahorrarse lineas de codigo
    const nuevaTarea = prompt('Edita la tarea:', pTarea.innerHTML);
    if (nuevaTarea !== null) {
        pTarea.innerHTML = nuevaTarea;
        prioridadTexto.innerHTML = prompt('Edita la prioridad:', prioridadTexto.innerHTML);
        alert('Tarea y prioridad actualizadas correctamente.');

        // Actualizar los datos en el localStorage
        recuperacion[indice].tarea = nuevaTarea;
        recuperacion[indice].prioridad = prioridadTexto.innerHTML;
        localStorage.setItem('lista', JSON.stringify(recuperacion));
    } else {
        alert('Edición cancelada.');
    }
});

btnEliminar.addEventListener("click", function(){
    
    recuperacion.splice(indice,1);	
    localStorage.setItem("lista", JSON.stringify(recuperacion))

    console.log("hay que quitar");
    pTarea.remove(this)
    prioridadTexto.remove(this)
    btnEliminar.remove(this)
    btnEditar.remove(this)
    if (btnEliminar) {
        alert("usted esta eliminando una tarea")
        
    } 

})
    });

} //cierra la funcion no cofundir

/// fin de zona de tareas///


///inicio de zona de eventos///

const fecha = document.getElementById("fecha")
const eventos = document.getElementById("Eventos")
const agregarEventos = document.getElementById("agregarEventos")
const contenedorEventos = document.getElementById("contenedorEventos")

let recuperacion2;
let listaGuardada2 = localStorage.getItem("lista2")
if (listaGuardada2) {
    recuperacion2 = JSON.parse(listaGuardada2)
} else {
    recuperacion2 = []
}

agregarEventos.addEventListener("click",function() {
    if (eventos.value != null && eventos.value != '' && fecha.value != null && fecha.value != '') {
        
        let objetoEvento = {
            evento: eventos.value,
            fecha: fecha.value
        }
        
        recuperacion2.push(objetoEvento)
        localStorage.setItem("lista2", JSON.stringify(recuperacion2))
    
        mostrarEventos()

    }else{
        console.log('no hay datos para registrar');
    }
    })

    mostrarEventos()

function mostrarEventos() {

    contenedorEventos.innerHTML = ''

    recuperacion2.forEach((eventos,indice2) => {
        let eventoF = eventos.evento
    let fechaF = eventos.fecha
    let pEvento = document.createElement("p")
    let fechaTexto = document.createElement ("p")
    let btnEliminar2 = document.createElement("button")
    let btnEditar2 = document.createElement("button")

    
    btnEliminar2.innerHTML = "Eliminar"
    btnEditar2.innerHTML = "Editar"
    fechaTexto.innerHTML = fechaF
    pEvento.innerHTML = eventoF
    pEvento.id = "parrafoT"
    pEvento.className = "color"

    
btnEliminar2.classList.add("chicharron");
btnEditar2.classList.add("btnEditar");
fechaTexto.classList.add("fechaTexto")
contenedorEventos.appendChild(pEvento)
contenedorEventos.appendChild(fechaTexto)
contenedorEventos.appendChild(btnEliminar2)
contenedorEventos.appendChild(btnEditar2)


btnEditar2.addEventListener('click', () => {
const nuevaTarea = prompt('Edita el Evento:', pEvento.innerHTML);
if (nuevaTarea !== null) {
    pEvento.innerHTML = nuevaTarea;
    fechaTexto.innerHTML = prompt('Edita la Fecha:', fechaTexto.innerHTML);
    alert('Evento y Fecha actualizadas correctamente.');

    // Actualiza los datos en el localStorage
    recuperacion2[indice2].evento = nuevaTarea;
    recuperacion2[indice2].fecha = fechaTexto.innerHTML;
    localStorage.setItem('lista2', JSON.stringify(recuperacion2));
} else {
    alert('Edición cancelada.');
}
});


btnEliminar2.addEventListener("click", function(){

    recuperacion2.splice(indice2,1)
    localStorage.setItem("lista2", JSON.stringify(recuperacion2))


    console.log("hay que quitar");
    pEvento.remove(this)
    btnEliminar2.remove(this)
    btnEditar2.remove(this)
    fechaTexto.remove(this)
    if (btnEliminar2) {
        alert("usted esta eliminando un Evento")
        
    } 
    
})
    });

}