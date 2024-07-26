let registrar = document.getElementById("registroCuenta")


registrar.addEventListener('submit',function (evento) {
    
    
    
    evento.preventDefault();
    
    let email = document.getElementById("exampleInputEmail1").value;
    
    let contraseña = document.getElementById("exampleInputPassword1").value;

    let datosUsuario = [email, contraseña];
    localStorage.setItem('usuario', JSON.stringify(datosUsuario));

    alert('Registro exitoso. ¡Ahora puedes iniciar sesión')
})