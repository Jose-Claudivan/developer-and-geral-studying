function verificarHora() {
    var mensagem = window.document.querySelector('#mensagem')
    var imagem = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    hora = 20

    if (hora > 0 && hora < 12) {
        mensagem.innerHTML = `Bom Dia! São exatamente <strong>${hora}:${minuto}.</strong>`
        imagem.src = 'img/manha.jpg'
    } else if(hora < 18) {
        mensagem.innerHTML = `Boa Tarde! São exatamente <strong>${hora}:${minuto}.</strong>`
        imagem.src = 'img/tarde.jpg'
    } else {
        mensagem.innerHTML = `Boa Noite! São exatamente <strong>${hora}:${minuto}.</strong>`
        imagem.src = 'img/noite.jpg'
    }
}


