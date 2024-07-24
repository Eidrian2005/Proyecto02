const tarea = document.getElementById("tarea")
const agregar = document.getElementById("agregar")
const contenedorTarea = document.getElementById("contenedorTarea")




agregar.addEventListener("click",function() {
if (tarea.value != null && tarea.value != '') {
    
    



    let tareaF = tarea.value
    let pTarea = document.createElement("p")
    let btnEliminar = document.createElement("button")
    let btnEditar = document.createElement("button")


    btnEliminar.innerHTML = "Eliminar"
    btnEditar.innerHTML = "Editar"
    pTarea.innerHTML = tareaF
    pTarea.id = "parrafoT"
    pTarea.className = "color"


contenedorTarea.appendChild(pTarea)
contenedorTarea.appendChild(btnEliminar)
contenedorTarea.appendChild(btnEditar)

btnEliminar.addEventListener("click", function(){

    console.log("hay que quitar");
    pTarea.remove(this)
    btnEliminar.remove(this)
    btnEditar.remove(this)
    if (btnEliminar) {
        alert("usted esta eliminando una tarea")
        
    }

    
})
}else{
    console.log('no hay datos para registrar');
}
})