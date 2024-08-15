import { RegistrationsProps } from "~/types"
import { service } from "./axios"

const get = async (params?: string): Promise<Array<RegistrationsProps>> => {
  const response = await service.get(`/registrations${params || ''}`)
  return response.data;
};

const post = async (data: RegistrationsProps) => await service.post('/registrations', { ...data });

const put = async (id: string, data: RegistrationsProps) => await service.put(`/registrations/${id}`, { ...data });

const del = async (id: string) => await service.delete(`/registrations/${id}`);

export const RegistrationsService = {
  get,
  post,
  put,
  delete: del,
}