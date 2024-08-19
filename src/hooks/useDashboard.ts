import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RegistrationsProps, Routes } from "~/types";
import { useRegistrations } from "~/hooks";
import { ModalContext } from "~/context";
import { RegistrationCardProps } from "~/pages/Dashboard/Components";

interface useDashboardResponse {
  goToNewAdmissionPage: () => void
  refreshPage: () => void
  onFilterByCpf: (e: ChangeEvent<HTMLInputElement>) => void
  registrationsCard: Array<RegistrationCardProps>
}

export const useDashboard = (): useDashboardResponse => {
  const { push } = useHistory();
  const { showModal } = useContext(ModalContext);
  const { registrations: { list, get, update, remove } } = useRegistrations();
  const [registrationsFiltered, setRegistrationFiltered] = useState<Array<RegistrationsProps>>(list);

  useEffect(() => {
    get();
  }, [get]);

  useEffect(() => {
    setRegistrationFiltered(list);
  }, [list]);

  const goToNewAdmissionPage = () => {
    push(Routes.NEW_REGISTRATION);
  };

  const refreshPage = () => {
    get();
  }

  const onFilterByCpf = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const filtered = !value ? list : list.filter(registration => registration.cpf?.includes(value))
    setRegistrationFiltered(filtered)
  }

  const onClickAction = (data: RegistrationsProps) => {
    update(data);
  }

  const onClickRemove = (id: string) => {
    remove(id);
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