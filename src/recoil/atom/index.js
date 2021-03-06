import { atom } from "recoil";
import * as key from "./atom";

export const medicineData = atom({
  key: key.GET_MEDICINES,
  default: [],
});

export const getIdRecipe = atom({
  key: key.GET_ID_RECIPE,
  default: null,
});

export const productionPlan = atom({
  key: key.GET_PRODUCITON_PLAN,
  default: [],
});

export const elementData = atom({
  key: key.GET_ELEMENTS_DATA,
  default: [],
});

export const newProcess = atom({
  key: key.NEW_PROCESS,
  default: {},
});

export const medicineById = atom({
  key: key.MEDICINE_BY_ID,
  default: "",
});

export const HelpById = atom({
  key: "helpers",
  default: "60d6926b4a70c19367914086",
});

export const profileById = atom({
  key: key.GET_PROFILE,
  default: {},
});
