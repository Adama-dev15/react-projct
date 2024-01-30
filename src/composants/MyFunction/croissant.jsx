/* export function Croissant(data) {
  return [...data].sort((a, b) => a.price - b.price);
} */

export function Croissant(data) {
  return [...data].filter((produit, index, array) => {
    if (index === 0) {
      return true;
    }
    return produit.price > array[index - 1].price;
  });
}
