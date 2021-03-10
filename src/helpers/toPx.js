export default (value = 0) => {
  return typeof value === 'number' && value === 0 ? 0 : `${value}px`
}
