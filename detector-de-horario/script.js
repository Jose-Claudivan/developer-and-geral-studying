function verificarHora() {
  var mensagem = window.document.querySelector("#mensagem");
  var imagem = window.document.querySelector("#imagem");
  window.document
    .getElementById("resultado")
    .removeChild(window.document.querySelector("#botao"));

  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();

  if (hora > 0 && hora < 12) {
    mensagem.innerHTML = `Bom Dia! São exatamente <strong>${hora}:${minuto}.</strong>`;
    imagem.src = "img/manha.jpg";
    window.document.body.style.background = '#fcf380'

  } else if (hora < 18) {
    mensagem.innerHTML = `Boa Tarde! São exatamente <strong>${hora}:${minuto}.</strong>`;
    imagem.src = "img/tarde.jpg";
    window.document.body.style.background = '#ffdd1f'

  } else {
    mensagem.innerHTML = `Boa Noite! São exatamente <strong>${hora}:${minuto}.</strong>`;
    imagem.src = "img/noite.jpg";
    window.document.body.style.background = '#636363'
  }
}

