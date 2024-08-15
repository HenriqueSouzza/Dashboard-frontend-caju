import { useCallback, useContext, useState } from "react";
import { LoadingContext } from "~/context";
import { RegistrationsService } from "~/services";
import { RegistrationsProps } from "~/types";

interface useUserResponseProps {
  registrations: Array<RegistrationsProps>
  getRegistrations: () => void
  udpdateRegistrations: (data: RegistrationsProps) => void
  createRegistrations: (data: RegistrationsProps) => void
  deleteRegistrations: (id: string) => void
  loading: boolean
}

export const useUser = (): useUserResponseProps => {
  const [registrations, setRegistrations] = useState<Array<RegistrationsProps>>([]);
  const { loading, showLoading } = useContext(LoadingContext);

  const getRegistrations = useCallback(() => {
    showLoading(true);
    RegistrationsService.get()
      .then(response => {
        showLoading(false);
        setRegistrations(response)
      });
  }, [showLoading]);

  const createRegistrations = useCallback((data: RegistrationsProps) => {
    showLoading(true);
    RegistrationsService.post(data)
      .then(() => {
        showLoading(false);
      });
  }, [showLoading]);

  const udpdateRegistrations = useCallback(async (data: RegistrationsProps) => {
    await RegistrationsService.put(data.id!, data);
    getRegistrations();
  }, [getRegistrations]);

  const deleteRegistrations = useCallback(async (id: string) => {
    await RegistrationsService.delete(id);
    getRegistrations();
  }, [getRegistrations]);

  return {
    registrations,
    getRegistrations: getRegistrations,
    createRegistrations,
    udpdateRegistrations,
    deleteRegistrations,
    loading,
  }
}