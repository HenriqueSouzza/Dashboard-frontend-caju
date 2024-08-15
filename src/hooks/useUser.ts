import { useCallback, useState } from "react";
import { RegistrationsService } from "~/services";
import { RegistrationsProps } from "~/types";

interface useUserResponseProps {
  registrations: Array<RegistrationsProps>
  getRegistrations: () => void
  udpdateRegistrations: (data: RegistrationsProps) => void
  deleteRegistrations: (id: string) => void
}

export const useUser = (): useUserResponseProps => {
  const [registrations, setRegistrations] = useState<Array<RegistrationsProps>>([]);

  const getRegistrations = useCallback(async () => {
    setRegistrations(await RegistrationsService.get());
  }, []);

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
    getRegistrations,
    udpdateRegistrations,
    deleteRegistrations
  }
}