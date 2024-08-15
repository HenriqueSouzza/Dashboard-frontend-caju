import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RegistrationCardProps } from "~/pages/UserPage/ListUser/components";
import { RegistrationsProps, Routes } from "~/types";
import { useUser } from "./useUser";
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
  const { registrations, getRegistrations, udpdateRegistrations, deleteRegistrations } = useUser();
  const [registrationsFiltered, setRegistrationFiltered] = useState<Array<RegistrationsProps>>(registrations);

  useEffect(() => {
    getRegistrations();
  }, [getRegistrations]);

  useEffect(() => {
    setRegistrationFiltered(registrations);
  }, [registrations]);

  const goToNewAdmissionPage = () => {
    history.push(Routes.NEW_USER);
  };

  const refreshPage = () => {
    history.go(0);
  }

  const onFilterByCpf = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const filtered = !value ? registrations : registrations.filter(registration => registration.cpf === value)
    setRegistrationFiltered(filtered)
  }

  const onClickAction = (data: RegistrationsProps) => {
    udpdateRegistrations(data);
  }

  const onClickRemove = (id: string) => {
    deleteRegistrations(id)
  }

  const onConfirmAction = (data: RegistrationsProps) => {
    showModal({
      title: 'Atenção',
      description: 'Tem certeza que deseja realizar essa ação',
      confirm: 'sim',
      onClickConfirm: () => onClickAction(data),
    });
  }

  const onConfirmRemove = (id: string) => {
    showModal({
      title: 'Atenção',
      description: 'Tem certeza que deseja remover esse usuário',
      confirm: 'sim',
      onClickConfirm: () => onClickRemove(id),
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