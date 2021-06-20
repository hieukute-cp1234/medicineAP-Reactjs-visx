import axios from 'axios';
import { BASE_API } from '../constants/configAPI';

export const api = axios.create({
  baseURL: BASE_API,
  headers: {
    Authorization: "Bearer ",
    "Content-Type": "application/json",
  },
});
