import axios from 'axios'

export const getMedicineData = async()=>{
  const url = `https://608302895dbd2c001757b052.mockapi.io/medicine`
  const response = await axios.get(url)
  const result = await response.status === 200 ? await response.data : []
  return result
}