# Mini-boutique-e-commerce-accessible-et-coresponsable

principe de boutique en ligne permettant d'acheter des produits filtrables par catégorie, et accessibles via une barre de recherche, avec panier dynamique, formulaire de livraison et simulation de paiement.
appli optimisée sur l'accessibilitée, l'eco responsabilité, développée en mobile first.

l'utilisateur
-pourra consulter les produits, ajouter une quantité d'achat pour chaque produit, l'ajouter au panier, le supprimer de son panier, visualiser sa derniere commande.
-quitter et revenir sur l'appli tout en gardant son panier actif.
-il devra saisir ses informations de livraison et de paiement, confirmer la commande afin de pouvoir acheter le produit.
-il pourra filtrer les produits par catégorie, et effectuer une recherche par nom à l'aide d'une barre de recherche.
-le panier ainsi que son montant sont mis a jour en temps reel.
-le stock produit doit etre affiché en temps réel avec des couleurs selon le nombre de produit qu'il reste.

# Langages utilisés:

-html5
-css3
-javascript vanilla

# structure:

│
├── index.html  
├── product.html  
├── cart.html  
├── checkout.html  
│
├── assets/  
│
├── css/
│ └── style.css  
│
├── js/
│ ├── shared
│ │ ├── api.js  
│ │ ├── state.js  
│ │ ├── domain.js  
│ │ └── utils.js  
│ │
│ ├── pages/
│ │ ├── index.js  
│ │ ├── product.js  
│ │ ├── cart.js  
│ │ └── checkout.js
│
├── data/
│ └── products.json  
│
├── docs/  
│ ├── use-cases.pdf  
│ ├── user-stories.pdf
│ ├── zoning.pdf  
│ ├── wireframes.pdf  
│ └── mockups.pdf  
│
└── README.md
