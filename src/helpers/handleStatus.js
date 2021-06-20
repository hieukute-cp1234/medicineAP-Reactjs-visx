import { status } from '../constants/status';

export const handleStatus = (id) =>
  id === 0
    ? status.OPEN
    : id === 1
      ? status.IN_PROGRESS
      : status.CLOSE


