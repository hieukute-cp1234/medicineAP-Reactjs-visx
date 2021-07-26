export const handleStatus = (data) => {
  for (let i = 0; i < data.length; i++) {
    if(data[i].status === 1) return 'Box';
    return 'Jar';
  }
};
