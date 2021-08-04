import { api } from "./api";

export const getOrder = async () => {
  const url = "/orders";
  const response = await api.get(url);
  const result = (await response.status) === 200 ? await response.data : [];
  return result;
};

export const postOrder = async (data) => {
  const url = "/orders";
  const response = await api.post(url, data);
  const result = (await response.status) === 200 ? await response.data : [];
  return result;
};
