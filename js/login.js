let inicioSesion = document.getElementById("iniciarSesion")

inicioSesion.addEventListener('submit',function(evento){
    
    evento.preventDefault();

    let email = document.getElementById("exampleInputEmail1").value;
    
    let contraseña = document.getElementById("exampleInputPassword1").value;

    let datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    
    if (datosUsuario && datosUsuario.email === email && datosUsuario.contraseña === contraseña) {
        alert('Inicio de sesion exitoso')
        
    } else{
        alert('Datos incorrectos intente de nuevo')
    }

})