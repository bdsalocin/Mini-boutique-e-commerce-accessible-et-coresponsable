// ------------------------------------------
//  Déclaration des fonctions pour afficher les contenaires des produits et la barre de recherche
// ------------------------------------------

const productsContainer = document.getElementById("products-container");
const searchBar = document.getElementById("search-bar");

// ------------------------------------------

// ------------------------------------------
// Mon tableau de produits
// ------------------------------------------

let myProducts = [];

// ------------------------------------------
// On récupère les produits depuis le fichier JSON
// ------------------------------------------

const fetchMyProducts = async () => {
  try {
    const response = await fetch("../../assets/docs/products.json");
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("La récupération des produits a échoué:", error);
    return [];
  }
};

// ------------------------------------------

// ------------------------------------------
// Fonction pour créer une carte produit HTML
// ------------------------------------------

const createProductCard = (product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  // ------------------------------------------

  // ------------------------------------------
  // Pour les images
  // ------------------------------------------

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = `Image de ${product.name}`;

  // ------------------------------------------

  // ------------------------------------------
  // Pour les noms
  // ------------------------------------------

  const name = document.createElement("h3");
  name.textContent = product.name;

  // ------------------------------------------

  // ------------------------------------------
  // Pour les descriptions
  // ------------------------------------------

  const description = document.createElement("p");
  description.textContent = product.description;
  // ------------------------------------------

  // ------------------------------------------
  // Pour le prix et le stock
  // ------------------------------------------

  const priceAndStock = document.createElement("p");
  const priceText = `${product.price.toFixed(2)} €  | `;
  const stockText = `Stock: ${product.stock}`;

  // ------------------------------------------

  // ------------------------------------------
  // On crée la balise pour le stock
  // ------------------------------------------

  const stockSpan = document.createElement("span");
  stockSpan.textContent = stockText;
  stockSpan.classList.add("stock-info");

  // ------------------------------------------

  // ------------------------------------------
  // On applique le style "stock faible" si le stock d´article < 10
  // ------------------------------------------

  product.stock < 10 && stockSpan.classList.add("low-stock");

  priceAndStock.textContent = `${priceText}`;
  priceAndStock.appendChild(stockSpan);