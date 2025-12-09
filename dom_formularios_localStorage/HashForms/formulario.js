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
