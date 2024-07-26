let inicioSesion = document.getElementById("botonLogin")

let email = document.getElementById("exampleInputEmail1");

let contrasenia = document.getElementById("exampleInputPassword1");

inicioSesion.addEventListener('click',function(evento){
    
    evento.preventDefault();

    let datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(datosUsuario);

    if(datosUsuario){
        if (datosUsuario.email == email.value && datosUsuario.contrasenia == contrasenia.value) {
            alert('Inicio de sesion exitoso')
        } else{
            alert('Datos incorrectos intente de nuevo')
            
        }
    }else{
        alert('No hay datos')
    }

})