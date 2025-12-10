//Abre e fecha div do campo disconto

function toggleDiscount() {
  const discountBody = document.getElementById('apply-discount-body');
  const icon = document.getElementById('toggle-icon');

  if (
    discountBody.style.display === 'none' ||
    discountBody.style.display === ''
  ) {
    discountBody.style.display = 'block';
    icon.classList.add('bxs-chevron-up');
    icon.classList.remove('bxs-chevron-down');
  } else {
    discountBody.style.display = 'none';
    icon.classList.remove('bxs-chevron-up');
    icon.classList.add('bxs-chevron-down');
  }
}

//Função aplicar desconto
const discountCupons = {
  DESCONTO10: 0.1, //10% desconto
  DESCONTO20: 0.2, //20% desconto
  DESCONTO50: 0.5, //50% desconto
};

function applyDiscount() {
  const discountCode = document
    .getElementById('discount-code')
    .value.trim()
    .toUpperCase();
  const mensagemDesconto = document.getElementById('discount-message');
  const totalPriceElement = document.getElementById('total-price');

  if (discountCupons[discountCode]) {
    const discount = discountCupons[discountCode];
    const originalPrice = 1200;
    const discountedPrice = originalPrice * (1 - discount);

    totalPriceElement.innerText = `Preço Total: R$ ${discountedPrice.toFixed(2)} `;

    //ARMAZENAR CUPOM NO localStorage

    localStorage.setItem('discount', discountCode);

    //Exibir menssagem de desconto

    mensagemDesconto.innerText = `Desconto de ${discountCode} aplicado!`;
    mensagemDesconto.style.color = 'green';

    //Limpar campo Input

    document.getElementById('discount-code').value = '';
  } else {
    mensagemDesconto.innerText = `Cupom Inválido`;
    mensagemDesconto.style.color = 'red';
  }
}

function checkStoredDiscount() {
  const storedDiscount = localStorage.getItem('discount');
  const mensagemDesconto = document.getElementById('discount-message');

  if (storedDiscount) {
    localStorage.removeItem('discount');
  }

  mensagemDesconto.innerText = '';
}

window.onload = checkStoredDiscount();
