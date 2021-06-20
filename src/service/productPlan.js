import { api } from './api';

export const getProductionPlanData = () => {
  const url = '/plans';
  return api.get(url);
}

export const postProductionPlan = async (data) => {
  const url = '/plans';
  const response = await api.post(url, data);
  const result = await response.status === 200 ? await response.data : [];
  return result;
}

export const putProductionPlan = async (id, data) => {
  const url = `/plans/${id}`;
  const response = await api.put(url, data);
  const result = await response.status === 200 ? await response.data : [];
  return result;
}
