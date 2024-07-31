let registrar = document.getElementById("registroCuenta")

registrar.addEventListener('submit', (event)=>{
    event.preventDefault()
    const email = document.querySelector('#exampleInputEmail1').value
    const contrasenia = document.querySelector('#exampleInputPassword1').value

    const users = JSON.parse(localStorage.getItem('users')) || []
    const userRegistered = users.find(user => user.email === email)
    if (userRegistered) {
        return alert('Usuario ya registrado')
        
    }

    users.push({email: email, contrasenia: contrasenia  })
    localStorage.setItem('users', JSON.stringify(users))
    alert('registro exitoso')

    window.location.href = 'login.html'
})