let bdyFont = document.querySelector('fondo')
let textoFont = document.querySelector('letraFont')
let buttonChange = document.getElementById('cambiarColor')

buttonChange.addEventListener('click', function(){
    if (htmlFont == 'white' && letraFont == 'black') {
        bdyFont.style.backgroundColor = 'black';
        textoFont.style.backgroundColor = 'white';
    } else {
        bdyFont.style.backgroundColor = 'white';
        textoFont.style.backgroundColor = 'black';
    }
})