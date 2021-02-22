export const itemsToRender = (array, component) => {
  return array.reduce((acc, item) => {
    return acc += component(item);
  }, '')
}
