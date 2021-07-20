import { api } from './api';

export const login = async (data) => {
  const url = '/login';
  const response = await api.post(url, data);
  return response.data;
};

export const register = async (data) => {
  const url = '/register';
  const response = await api.post(url, data);
  return response.data;
};
