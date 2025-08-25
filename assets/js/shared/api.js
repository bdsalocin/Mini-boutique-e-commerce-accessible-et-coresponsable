// ------------------------------------------
// On récupère les détails du produit depuis le JSON
// ------------------------------------------

export const fetchProductDetails = async (productId) => {
  try {
    const response = await fetch("./assets/data/products.json");
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const products = await response.json();
    return products.find((product) => product.id === parseInt(productId));
  } catch (error) {
    console.error("La récupération du produit a échoué:", error);
    return null;
  }
};

// ------------------------------------------
