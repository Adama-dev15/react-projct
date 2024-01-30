/* export function Decroissant(data) {
  return [...data].sort((a, b) => b.price - a.price);
} */

export function Decroissant(data) {
  return [...data].filter((produit, index, array) => {
    if (index === 0) {
      return true;
    }
    return produit.price < array[index - 1].price;
  });
}
