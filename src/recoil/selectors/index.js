import { selector } from 'recoil';
import * as key from './selector';
import * as atom from '../atom/index';

export const newData = selector({
  key: key.GET_ITEM_DATA,
  get: ({ get }) => {
    const data = get(atom.getMedicineData);
    return data;
  }
});

export const recipeItem = selector({
  key: key.RECIPE_ITEM,
  get: ({ get }) => {
    const data = get(atom.getMedicineData);
    const id = get(atom.getIdRecipe);
    data.filter(item => item.id === id);
    return data[0]
  }
});