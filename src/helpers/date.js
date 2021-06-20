import moment from 'moment';
import { FORMAT_DATE } from '../constants/date';

export const disabledDate = (current) => current && current < moment().endOf('day');

export const configDate = (data) => moment(data, FORMAT_DATE);

export const formatDate = (value) => value.format(FORMAT_DATE);