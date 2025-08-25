// ------------------------------------------
// Fonctions pour gérer le panier
// ------------------------------------------

export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

// ------------------------------------------

// ------------------------------------------
// On convertit les éléments en chaine de caractère
// ------------------------------------------

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// ------------------------------------------

// ------------------------------------------
// La fonction pour mettre à jour le panier
// ------------------------------------------

export const updateCartCount = (cartCountSpan) => {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountSpan) {
    cartCountSpan.textContent = totalItems > 0 ? totalItems : "";
  }
};

// ------------------------------------------

// ------------------------------------------
// La fonction pour ajouter au panier
// ------------------------------------------

export const addToCart = (product, quantity) => {
  let cart = getCart();
  let foundProduct = cart.find((item) => item.id === product.id);

  if (foundProduct) {
    if (foundProduct.quantity + quantity <= product.stock) {
      foundProduct.quantity += quantity;
    } else {
      alert(`Le stock maximum de cet article est ${product.stock} !`);
    }
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    });
  }
  saveCart(cart);
};

// ------------------------------------------
