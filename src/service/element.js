import { api } from './api';

export const getElement = () => {
  const url = `/elements`;
  const response = api.get(url);
  return response;
}
