import { ChangeEvent, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { RegistrationCardProps } from "~/pages/UserPage/ListUser/components";
import { Routes, StatusColumns } from "~/types";
import { RegistrationProps, useUser } from "./useUser";
import { ModalContext } from "~/context";

interface useUserPageResponse {
  goToNewAdmissionPage: () => void
  refreshPage: () => void
  onFilterByCpf: (e: ChangeEvent<HTMLInputElement>) => void
  registrationsCard: Array<RegistrationCardProps>
}

export const useUserPage = (): useUserPageResponse => {
  const history = useHistory();
  const { showModal } = useContext(ModalContext);
  const { registrations } = useUser();
  const [registrationsFiltered, setRegistrationFiltered] = useState<Array<RegistrationProps>>(registrations);

  const goToNewAdmissionPage = () => {
    history.push(Routes.NEW_USER);
  };

  const refreshPage = () => {
    history.go(0);
  }

  const onFilterByCpf = (e: ChangeEvent<HTMLInputElement>) => {
    const filtered = registrations.filter(registration => registration.cpf === e.target.value)
    setRegistrationFiltered(filtered)
  }

  const onClickAction = (item: string, status: StatusColumns) => {
    console.log(item, status);
  }

  const onClickRemove = (item: string) => {
    console.log(item);
  }

  const onConfirmAction = (item: string, status: StatusColumns) => {
    showModal({
      title: 'Atenção',
      description: 'Tem certeza que deseja realizar essa ação',
      confirm: 'sim',
      onClickConfirm: () => onClickAction(item, status),
    });
  }

  const onConfirmRemove = (item: string) => {
    showModal({
      title: 'Atenção',
      description: 'Tem certeza que deseja remover esse usuário',
      confirm: 'sim',
      onClickConfirm: () => onClickRemove(item),
    });
  }

  const registrationsCard = registrationsFiltered.map(registration => ({
    ...registration,
    onClickAction: onConfirmAction,
    onClickRemove: onConfirmRemove
  }));

  return {
    goToNewAdmissionPage,
    refreshPage,
    onFilterByCpf,
    registrationsCard,
  }
}