const loginForm = document.querySelector('#iniciarSesion')

loginForm.addEventListener('submit', (events) =>{
    events.preventDefault

    const email = document.querySelector('#exampleInputEmail1').value
    const contrasenia = document.querySelector('#exampleInputPassword1').value
    const users = JSON.parse(localStorage.getItem('users')) || []

    const validUser = users.find(users => users.email === email && users.contrasenia === contrasenia)
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos')
    }
    alert('bienvenido a Task administre')
    
    window.location.href = 'index.html'

})