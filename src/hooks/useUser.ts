import { StatusColumns } from "~/types";

export interface RegistrationProps {
  id: number
  employeeName: string
  email: string
  cpf: string
  admissionDate: string
  status: StatusColumns
}

interface useUserResponseProps {
  registrations: Array<RegistrationProps>
}

export const useUser = (): useUserResponseProps => {
  const registrations = [{
    id: 1,
    employeeName: 'teste',
    cpf: '0123456781',
    email: 'teste@teste.com',
    admissionDate: '10/10/2020',
    status: StatusColumns.REVIEW,
  },
  {
    id: 2,
    employeeName: 'teste',
    cpf: '0123456789',
    email: 'teste@teste.com',
    admissionDate: '10/10/2020',
    status: StatusColumns.APPROVED,
  }];

  return {
    registrations
  }
}