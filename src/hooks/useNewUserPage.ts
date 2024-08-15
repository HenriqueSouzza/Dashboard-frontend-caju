import { useHistory } from "react-router-dom"
import { RegistrationsProps, Routes, StatusColumns } from "~/types"
import { Convert, Messages, Validations } from "~/utils"
import { useForm, useUser } from '.';
import { Control } from "react-hook-form";
import { useCallback, useContext } from "react";
import { ModalContext } from "~/context";

interface DataNewUserProps {
  employeeName?: string
  cpf?: string
  email?: string
  admissionDate?: string
}

interface useNewUserPageResponseProps {
  onSubmit: () => void
  goToHome: () => void
  validate: {
    email: (value: string) => string | boolean
    employeeName: (value: string) => string | boolean
    cpf: (value: string) => string | boolean
    required: string
  }
  control: Control
}

const { required, nameUncomplete, invalidaEmail, invalidCpf } = Messages.error;
const { IsFullName, isEmailValid, isCpfValid } = Validations;

export const useNewUserPage = (): useNewUserPageResponseProps => {
  const history = useHistory();
  const { showModal } = useContext(ModalContext);
  const { createRegistrations, loading } = useUser();
  const { handleSubmit, control } = useForm<DataNewUserProps>({ mode: "onChange" });

  const goToHome = useCallback(() => {
    if (!loading) {
      history.push(Routes.LIST_USER);
    }
  }, [loading, history])

  const onNewUser = (formData: RegistrationsProps) => {
    if (formData?.admissionDate) {
      formData.admissionDate = Convert.convertDate(formData.admissionDate)
    }
    formData.status = StatusColumns.REVIEW;
    createRegistrations(formData);
    goToHome();
  }

  const validate = {
    email: (value: string) => isEmailValid(value) || invalidaEmail,
    employeeName: (value: string) => IsFullName(value) || nameUncomplete,
    cpf: (value: string) => isCpfValid(value) || invalidCpf,
    required
  };

  const onConfirm = (value: DataNewUserProps) => {
    showModal({
      title: 'Atenção',
      description: 'Tem certeza que deseja realizar essa ação',
      confirm: 'sim',
      onClickConfirm: () => onNewUser(value)
    });
  };

  return {
    goToHome,
    onSubmit: handleSubmit(onConfirm),
    control,
    validate
  }
}