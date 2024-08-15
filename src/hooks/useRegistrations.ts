import { useCallback, useContext, useState } from "react";
import { LoadingContext } from "~/context";
import { RegistrationsService } from "~/services";
import { RegistrationsProps } from "~/types";
import { Messages, toast } from "~/utils";

interface useRegistrations {
  registrations: {
    list: Array<RegistrationsProps>
    get: () => void
    create: (data: RegistrationsProps, callback: () => void) => void
    update: (data: RegistrationsProps) => void
    remove: (id: string) => void
  }
  loading: boolean
}

export const useRegistrations = (): useRegistrations => {
  const [registrations, setRegistrations] = useState<Array<RegistrationsProps>>([]);
  const { loading, showLoading } = useContext(LoadingContext);

  const get = useCallback(() => {
    showLoading(true);
    RegistrationsService.get().then(response => {
      setRegistrations(response)
    }).catch(() => {
      toast(Messages.error.request.get);
    }).finally(() => showLoading(false));
  }, [showLoading]);

  const create = useCallback((data: RegistrationsProps, callback: () => void) => {
    showLoading(true);
    RegistrationsService.post(data).then(() => {
      toast(Messages.success.request.create);
      showLoading(false);
    }).catch(() => {
      toast(Messages.error.request.create);
    }).finally(() => {
      showLoading(false);
      callback();
    });
  }, [showLoading]);

  const update = useCallback(async (data: RegistrationsProps) => {
    RegistrationsService.put(data.id!, data).then(() => {
      toast(Messages.success.request.update);
      get();
    }).catch(() => {
      toast(Messages.error.request.update);
    });
  }, [get]);

  const remove = useCallback(async (id: string) => {
    RegistrationsService.delete(id).then(() => {
      toast(Messages.success.request.remove);
      get();
    }).catch(() => {
      toast(Messages.error.request.remove);
    });
  }, [get]);

  return {
    registrations: {
      list: registrations,
      get,
      create,
      update,
      remove,
    },
    loading
  }
}