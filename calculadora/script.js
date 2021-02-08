function calcular() {
    var numero = window.document.querySelector('#numero').value
    var resultado = window.document.querySelector('#resultado')
    
    if (numero) { 
        for (var i = 1; i <= 10; i++) {
            resultado.innerHTML += `${numero} x ${i} = ${numero*i}<br>`
        }

    } else {
        alert('[ERRO] Valor inválido!')
    }

    
}
