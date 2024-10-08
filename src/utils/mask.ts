const cpfMask = (cpf: string) => {
  return cpf
    .replace(/\D+/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2');
}

export const Mask = {
  cpfMask
}