function onMouseOver() {
  document.querySelector("p").style.color = "red";
}

function clickButton() {
  alert("Botão clicado!");
}

function handleFocus(input) {
  input.value = "Campo em foco";
}

function handleBlur(input) {
  input.value = "";
}

function trocaImagem() {
 document.getElementById("imagem").src = "./img/imagem2.png";
}