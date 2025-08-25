// ------------------------------------------
// On récupère les détails du produit depuis le JSON
// ------------------------------------------

export const fetchAllProducts = async () => {
  try {
    const response = await fetch("/assets/data/products.json");

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("La récupération de tous les produits a échoué:", error);
    return [];
  }
};

// ------------------------------------------
