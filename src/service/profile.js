import { api } from "./api";

export const getProfile = async () => {
  const url = "/profiles";
  const response = await api.get(url);
  const result = (await response.status) === 200 ? await response.data : [];
  return result;
};

export const postProfile = async (data) => {
  const url = "/profiles";
  const response = await api.post(url, data);
  const result = (await response.status) === 200 ? await response.data : [];
  return result;
};

export const putProfile = async (id, data) => {
  const url = `/profiles/${id}`;
  const response = await api.put(url, data);
  const result = (await response.status) === 200 ? await response.data : [];
  return result;
};
