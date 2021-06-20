import { api } from './api';

export const getMedicineData = () => {
  const url = `/medicines`;
  const response = api.get(url);
  return response;
}