export function NombreDeMot(nomProduct, nombreLimite){
    if(nomProduct.length > nombreLimite){
        return nomProduct.substring(0, nombreLimite) + '...';
    }
    return nomProduct;
}