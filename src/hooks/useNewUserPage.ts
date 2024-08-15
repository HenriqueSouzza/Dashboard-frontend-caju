import { useHistory } from "react-router-dom"
import { Routes } from "~/types"
import { Convert, Messages, Validations } from "~/utils"
import { useForm } from '.';
import { Control } from "react-hook-form";

interface DataNewUserProps {
  name?: string
  cpf?: string
  email?: string
  admissionDate?: string
}

interface useNewUserPageResponseProps {
  onSubmit: () => void
  goToHome: () => void
  validate: {
    email: (value: string) => string | boolean
    name: (value: string) => string | boolean
    cpf: (value: string) => string | boolean
    required: string
  }
  control: Control
}

const { required, nameUncomplete, invalidaEmail, invalidCpf } = Messages.error;
const { IsFullName, isEmailValid, isCpfValid } = Validations;

export const useNewUserPage = (): useNewUserPageResponseProps => {
  const history = useHistory();
  const { handleSubmit, control } = useForm<DataNewUserProps>({ mode: "onChange" });

  const goToHome = () => {
    history.push(Routes.LIST_USER);
  }

  const onNewUser = (formData: DataNewUserProps) => {
    if (formData?.admissionDate) {
      formData.admissionDate = Convert.convertDate(formData.admissionDate)
    }
    console.log(formData);
  }

  const validate = {
    email: (value: string) => isEmailValid(value) || invalidaEmail,
    name: (value: string) => IsFullName(value) || nameUncomplete,
    cpf: (value: string) => isCpfValid(value) || invalidCpf,
    required
  }

  return {
    goToHome,
    onSubmit: handleSubmit(onNewUser),
    control,
    validate
  }
}