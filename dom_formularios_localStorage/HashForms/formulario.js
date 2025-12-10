//Dados do Formulário

const formulario = document.getElementById('formulario');

//Função para verificar se o valor contém apenas letras e espaços (Validação para o campo Nome)
function isValidName(string) {
  for (let index = 0; index < string.length; index++) {
    let char = string[index];

    if (
      !(
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        char === ' '
      )
    ) {
      return false;
    }
  }
  return true;
}

// Função para validar o CPF (11 digitos numérico)
function isValidCPF(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}

//Função para validar o telefone (11 digitos numéricos)
function isValidPhone(phone) {
  return phone.length === 11 && !isNaN(phone);
}

// Função para validar o CEP (8 digitos numérico)
function isValidCEP(cep) {
  return cep.length === 8 && !isNaN(cep);
}

// Validação do formulário - Estado (2 letras maiúsculas)
function isValidState(state) {
  return (
    state.length === 2 &&
    state.toUpperCase() === state &&
    state >= 'AA' &&
    state <= 'ZZ'
  );
}

function ValidarEGuardarFormulario(evento) {
  evento.preventDefault();

  //Obter valor dos campos input do formulário

  const nome = document.getElementById('nome').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const cep = document.getElementById('cep').value.trim();
  const rua = document.getElementById('rua').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const complemento = document.getElementById('complemento').value.trim();
  const bairro = document.getElementById('bairro').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const estado = document.getElementById('estado').value.trim();

  //Verrificação se todos os campos estão preenchidos

  if (
    !nome ||
    !cpf ||
    !telefone ||
    !cep ||
    !rua ||
    !numero ||
    !bairro ||
    !cidade ||
    !estado
  ) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  if (!isValidName(nome)) {
    alert('Insira um nome válido. Apenas nomes e espaços são permitidos.');
    return;
  }

  if (!isValidCPF(cpf)) {
    alert('Insira um CPF válido. Deve conter 11 dígitos numéricos');
    return;
  }

  if (!isValidPhone(telefone)) {
    alert('Insira um telefone válido. Deve conter 11 dígitos numéricos');
    return;
  }

  if (!isValidCEP(cep)) {
    alert('Insira um CEP válido. Deve conter 8 dígitos numéricos');
    return;
  }

  if (!isValidState(estado)) {
    alert('O Estado deve conter 2 letras maiúsculas.');
    return;
  }

  //Se o usuário preencheu corretamente todos os campos, os dados serão armazenados no localStorage

  const dadosFormulario = {
    nome,
    cpf,
    telefone,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };

  localStorage.setItem('dadosFormulario', JSON.stringify(dadosFormulario));
  formulario.reset();

  alert('Dados salvos com sucesso!');
}

//Adicionar evento de submissao ao formulario

formulario.addEventListener('submit', ValidarEGuardarFormulario);
