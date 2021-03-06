import { message } from "antd";

export const configResult = (res) => {
  const result = res.status === 200 ? res.data : [];
  return result.data;
};

export const configMessage = (res) =>
  res.code === 200
    ? message.success(res.message, 2)
    : message.error(res.message, 2);
