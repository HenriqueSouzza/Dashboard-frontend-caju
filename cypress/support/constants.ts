export enum Columns {
  REVIEW = 'Pronto para revisar',
  APROVED = 'Aprovado',
  REPROVED = 'Reprovado'
}

export enum Actions {
  APROVE = 'Aprovar',
  REVIEWTRY = 'Revisar novamente',
  REPROVE = 'Reprovar'
}

export const Values = {
  invalid: {
    employeeName: 'teste cypress',
    email: 'teste@teste',
    cpf: '012345671110',
    admissionDate: '2020-10-05'
  },
  valid: {
    employeeName: 'teste cypress',
    email: 'teste@teste.com',
    cpf: '01234567890',
    admissionDate: '2020-10-05'
  }
}