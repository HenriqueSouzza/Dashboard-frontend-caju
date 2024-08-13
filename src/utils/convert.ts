const convertDate = (date: string) => new Date(date.replace('-', '/')).toLocaleDateString('pt-br');

export const Convert = {
  convertDate
}
