import { api } from './api';

export const getStep = async () => {
  const url = '/steps';
  const response = await api.get(url);
  const result = await response.status === 200 ? await response.data : [];
  return result?.data;
}