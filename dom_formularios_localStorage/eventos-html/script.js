function onMouseOver() {
  document.querySelector("p").style.color = "red";
}
function onMouseOut() {
  document.querySelector("p").style.color = "black";
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

function voltaImagem() {
  document.getElementById("imagem").src = "./img/imagem1.png";
 }
 