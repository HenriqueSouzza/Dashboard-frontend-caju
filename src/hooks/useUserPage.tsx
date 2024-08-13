import { ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "~/types";
import { Convert } from "~/utils";

interface DataUserProps {
  email?: string
  name?: string
  cpf?: string
  admissionDate?: string
}

interface useUserPageResponse {
  goToNewAdmissionPage: () => void
  refreshPage: () => void
  onFilterByCpf: (e: ChangeEvent<HTMLInputElement>) => void
  goToHome: () => void
  onSubmitNewUser: (formData: DataUserProps) => void
}

export const useUserPage = (): useUserPageResponse => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(Routes.NEW_USER);
  };

  const refreshPage = () => {
    history.go(0);
  }

  const goToHome = () => {
    history.push(Routes.LIST_USER);
  }

  const onFilterByCpf = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const onSubmitNewUser = (formData: DataUserProps) => {
    if (formData?.admissionDate) {
      formData.admissionDate = Convert.convertDate(formData.admissionDate)
    }

    console.log(formData)
  }

  return {
    goToNewAdmissionPage,
    refreshPage,
    onFilterByCpf,
    goToHome,
    onSubmitNewUser
  }
}