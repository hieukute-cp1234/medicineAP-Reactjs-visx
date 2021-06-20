export const style = (length) => ({
  process: {
    border: '1px solid black',
    height: length > 4 ? '400px' : 'none',
    overflowY: length > 4 ? 'scroll' : 'hidden',
  },
  card: {
    width: '100%',
  },
  step: {
    border: '1px solid black',
    height: '450px',
    overflowY: length > 6 ? 'scroll' : 'hidden',
  },
  noData: {
    padding: '5% 0',
    size: '50px'
  },
  button: {
    marginTop: '10px'
  },
  modal: {
    padding: '30px 30px 0 30px',
    textAlign: 'center'
  },
  center: {
    textAlign: 'center'
  }
})