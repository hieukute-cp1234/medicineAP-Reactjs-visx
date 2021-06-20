import { api } from './api';

export const getProcess = () => {
  const url = '/processes';
  const response = api.get(url);
  return response;
};

export const postProcess = async (data) => {
  const url = '/processes';
  const response = await api.post(url, data);
  return response.data;
};
