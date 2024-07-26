let registrar = document.getElementById("registroCuenta")
let email = document.getElementById("exampleInputEmail1");
let contrasenia = document.getElementById("exampleInputPassword1");

let users = [];

registrar.addEventListener('submit',function (evento) {
    evento.preventDefault();
    if (email.value == '' || email.value == null || contrasenia.value == '' || contrasenia.value == null) {
        alert('Datos ingresados incorrectos')
        email.value = "";
        contrasenia.value = "";
    } else {
        

        let objectUser = {
            userName: email.value,
            password: contrasenia.value
        }

        users.push(objectUser);    
    
        //let datosUsuario = [email, contrasenia];
        localStorage.setItem('usuario', JSON.stringify(users));

        email.value = "";
        contrasenia.value = "";

        alert('Registro exitoso. ¡Ahora puedes iniciar sesión')
    }
    
})