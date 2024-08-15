import { ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { RegistrationCardProps } from "~/pages/UserPage/ListUser/components";
import { Routes, StatusColumns } from "~/types";
import { useUser } from "./useUser";

interface useUserPageResponse {
  goToNewAdmissionPage: () => void
  refreshPage: () => void
  onFilterByCpf: (e: ChangeEvent<HTMLInputElement>) => void
  registrationsCard: Array<RegistrationCardProps>
}

export const useUserPage = (): useUserPageResponse => {
  const history = useHistory();
  const { registrations } = useUser();

  const goToNewAdmissionPage = () => {
    history.push(Routes.NEW_USER);
  };

  const refreshPage = () => {
    history.go(0);
  }

  const onFilterByCpf = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const onClickAction = (item: string, status: StatusColumns) => {
    console.log(item, status);
  }

  const onClickRemove = (item: string) => {
    console.log(item);
  }

  const registrationsCard = registrations.map(registration => ({ ...registration, onClickAction, onClickRemove }));

  return {
    goToNewAdmissionPage,
    refreshPage,
    onFilterByCpf,
    registrationsCard,
  }
}