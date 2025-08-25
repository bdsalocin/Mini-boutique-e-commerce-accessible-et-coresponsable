import { fetchAllProducts } from "../shared/api.js";
import { addToCart, updateCartCount } from "../shared/state.js";

// ------------------------------------------
// Déclaration des fonctions pour afficher les contenaires des produits et la barre de recherche
// ------------------------------------------

const productsContainer = document.getElementById("products-container");
const searchBar = document.getElementById("search-bar");
const filterButton = document.getElementById("filter-button");
const categoryList = document.getElementById("category-list");

// ------------------------------------------

// ------------------------------------------
// On récupère l'icône du panier et on crée une balise pour le nombre d'articles
// ------------------------------------------

const cartIcon = document.getElementById("cart");
const cartCountSpan = document.createElement("span");
cartCountSpan.classList.add("cart-count");
cartIcon.appendChild(cartCountSpan);

// ------------------------------------------

// ------------------------------------------
// Mon tableau de produits et mon objet de filtres
// ------------------------------------------

let myProducts = [];
const filters = {
  searchTerm: "",
  category: "",
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
  // On applique le style low stock si le stock d´article < 10
  // ------------------------------------------

  product.stock < 10 && stockSpan.classList.add("low-stock");

  priceAndStock.textContent = `${priceText}`;
  priceAndStock.appendChild(stockSpan);

  // ------------------------------------------

  // ------------------------------------------
  // On crée la div des deux boutons
  // ------------------------------------------

  const buttonsBottom = document.createElement("div");
  buttonsBottom.classList.add("button-group");

  // ------------------------------------------

  // ------------------------------------------
  // On crée le bouton voir produit
  // ------------------------------------------

  const viewButton = document.createElement("a");
  viewButton.textContent = "Voir produit";
  viewButton.href = `product.html?id=${product.id}`;
  viewButton.classList.add("button-link");

  // ------------------------------------------

  // ------------------------------------------
  // On crée le bouton ajouter au panier
  // ------------------------------------------

  const addButton = document.createElement("button");
  addButton.textContent = "Ajouter au panier";
  addButton.onclick = () => {
    addToCart(product, 1);
    updateCartCount();
  };

  buttonsBottom.append(viewButton, addButton);

  card.append(image, name, description, priceAndStock, buttonsBottom);
  return card;
};

// ------------------------------------------
// Fonction pour afficher une liste de produits dans le conteneur
// ------------------------------------------

const listProducts = (productsToDisplay) => {
  productsContainer.textContent = "";
  productsToDisplay.forEach((product) => {
    productsContainer.appendChild(createProductCard(product));
  });
};

// ------------------------------------------
// On rempli dynamiquement les catégories
// ------------------------------------------

const fillCategories = (products) => {
  const allCategories = products.map((product) => product.category);
  const uniqueCategories = new Set(allCategories);

  const allButton = document.createElement("button");
  allButton.classList.add("list-option");
  allButton.dataset.category = "";
  allButton.textContent = "Toutes les catégories";
  categoryList.appendChild(allButton);

  uniqueCategories.forEach((category) => {
    const button = document.createElement("button");
    button.classList.add("list-option");
    button.dataset.category = category;
    button.textContent = category;
    categoryList.appendChild(button);
  });
};

// ------------------------------------------
// On filtre les produits
// ------------------------------------------

const filterAndListProducts = () => {
  let filtered = myProducts;

  if (filters.category) {
    filtered = filtered.filter(
      (product) => product.category === filters.category
    );
  }

  if (filters.searchTerm) {
    const lowerCaseSearchItem = filters.searchTerm.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseSearchItem) ||
        product.description.toLowerCase().includes(lowerCaseSearchItem)
    );
  }

  listProducts(filtered);
};

// ------------------------------------------
// On initialise les événements
// ------------------------------------------

const setupEventListeners = () => {
  filterButton.addEventListener("click", () => {
    categoryList.classList.toggle("visible");
  });

  categoryList.addEventListener("click", (e) => {
    if (e.target.classList.contains("list-option")) {
      filters.category = e.target.dataset.category;
      categoryList.classList.remove("visible");
      filterAndListProducts();
    }
  });

  searchBar.addEventListener("input", (e) => {
    filters.searchTerm = e.target.value;
    filterAndListProducts();
  });
};

// ------------------------------------------

// ------------------------------------------
// On initialise finalement la page
// ------------------------------------------

const initializePage = async () => {
  myProducts = await fetchAllProducts();
  fillCategories(myProducts);
  setupEventListeners();
  filterAndListProducts();
  updateCartCount();
};
// ------------------------------------------

// ------------------------------------------
// Et on lance le script
// ------------------------------------------

initializePage();
