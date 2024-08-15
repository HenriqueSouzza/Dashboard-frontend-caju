const isNotEmpty = (value: string) => value.length > 0;

const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);

const IsFullName = (name: string) => {
  name = name.trim();

  const firstCharacter = name.substring(0, 1);
  if (!isNaN(Number(firstCharacter))) {
    return false;
  }

  return name.includes(' ');
}

const isCpfValid = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf === '') {
    return false;
  };

  if (cpf.length !== 11) {
    return false;
  }

  const cpfListInvalid = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  if (cpfListInvalid.find(cpfInvalid => cpfInvalid === cpf)) {
    return false;
  }

  // Valida 1o digito	
  let add = 0;
  for (let i = 0; i < 9; i++) {
    add += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) {
    rev = 0;
  }

  if (rev != parseInt(cpf.charAt(9))) {
    return false;
  }

  // Valida 2o digito	
  add = 0;
  for (let i = 0; i < 10; i++) {
    add += parseInt(cpf.charAt(i)) * (11 - i);
  }

  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) {
    rev = 0;
  }

  if (rev != parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
}

export const Validations = {
  isEmailValid,
  IsFullName,
  isCpfValid,
  isNotEmpty
};