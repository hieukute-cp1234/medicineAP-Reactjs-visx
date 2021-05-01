import { atom } from 'recoil'
import * as key from './key'

//định nghĩa các atom hay các state chung

export const getMedicineData = atom({//atom trả về state là một mảng data rỗng
  key:key.getMedicineData,
  default:[]
})


