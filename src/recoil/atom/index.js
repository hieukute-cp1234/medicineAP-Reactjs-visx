import { atom } from 'recoil';
import * as key from './atom';

export const getMedicineData = atom({
  key:key.GET_DATA_MEDICINE,
  default:[]
})

export const getIdRecipe = atom({
  key:key.GET_ID_RECIPE,
  default:null
})