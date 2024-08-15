import { StatusColumns } from "./statusColumns"

export interface RegistrationsProps {
  id?: string
  email?: string
  employeeName?: string
  admissionDate?: string
  status?: StatusColumns
  cpf?: string
}