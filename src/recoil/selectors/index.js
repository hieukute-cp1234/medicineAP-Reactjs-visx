import { selector } from 'recoil';
import * as key from './selector';
import * as atom from '../atom/index';
import { getElement } from '../../service/element';
import { getMedicineData } from '../../service/medicine';
import { getProcess } from '../../service/process';
import { getProductionPlanData, putProductionPlan } from '../../service/productPlan';
import { message } from 'antd';

export const getDataMedicines = selector({
  key: key.GET_MEDICINE_DATA,
  get: async () => {
    const response = await getMedicineData();
    const result = await response.status === 200 ? await response.data : []
    return result;
  }
});

export const getDataElements = selector({
  key: key.GET_ELEMENT_DATA,
  get: async () => {
    const response = await getElement();
    const result = await response.status === 200 ? await response.data : [];
    return result;
  }
});

export const getMedicineById = selector({
  key: key.GET_MEDICINE_BY_ID,
  get: ({ get }) => {
    const medicine = get(atom.medicineData);
    const id = get(atom.medicineById);
    const newData = medicine.filter((item) => item._id === id);
    return newData;
  }
});

export const getProccessById = selector({
  key: key.GET_PROCESS_BY_ID,
  get: async ({ get }) => {
    const id = get(atom.medicineById);
    const response = await getProcess();
    const { data } = response;
    const idProcess = data.data.filter((item) => item.medicine._id === id);
    return idProcess;
  }
});

export const createPlan = selector({
  key: key.GET_PLAN_DATA,
  get: async () => {
    const response = await getProductionPlanData();
    const result = await response.status === 200 ? await response.data : [];
    return result.data;
  }
});

export const editPlan = selector({
  key: key.PUT_PLAN_DATA,
  get: (id, dataPut) =>
    async ({ get }) => {
      const response = await putProductionPlan(id, dataPut);
      const result = await response.status === 200 ? await response.data : [];
      const { data } = result;
      return data;
    }

})