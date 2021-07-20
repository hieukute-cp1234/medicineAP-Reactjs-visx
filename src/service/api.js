import axios from 'axios';
import { BASE_API } from '../constants/configAPI';

const token = '';

export const api = axios.create({
  baseURL: BASE_API,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});
