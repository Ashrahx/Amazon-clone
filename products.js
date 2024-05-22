document.addEventListener('DOMContentLoaded', function() {
  const products = [
    {
      id: 1,
      name: "Amazon Basics 5-Blade",
      description: "Descripción del producto 1",
      img: "./assets/images/product-1.jpg",
      price: 16.79,
      delivery: "May 25",
      offer: "19%",
      deal: true,
    },
    {
      id: 2,
      name: "N-Bone Puppy Teething",
      description: "Descripción del producto 1",
      img: "./assets/images/product-2.jpg",
      price: 23.15,
      delivery: "May 26",
      offer: "15%",
      deal: true,
    },
    {
      id: 3,
      name: "The Blast from the Past",
      description: "Descripción del producto 1",
      img: "./assets/images/product-3.jpg",
      price: 15.19,
      delivery: "May 27",
      offer: "20%",
      deal: true,
    },
    {
      id: 4,
      name: "Fisher-Price Baby",
      description: "Descripción del producto 1",
      img: "./assets/images/product-4.jpg",
      price: 14.39,
      delivery: "May 29",
      offer: "20%",
      deal: true,
    },
    {
      id: 5,
      name: "Pyle Premium Direct Injection",
      description: "Descripción del producto 1",
      img: "./assets/images/product-5.jpg",
      price: 12.21,
      delivery: "May 28",
      offer: "39%",
      deal: true,
    },
    {
      id: 6,
      name: "ABC Wooden Block Cart",
      description: "Descripción del producto 1",
      img: "./assets/images/product-6.jpg",
      price: 13.29,
      delivery: "May 30",
      offer: "30%",
      deal: true,
    },
    {
      id: 7,
      name: "Philips Led Flicker Free",
      description: "Descripción del producto 1",
      img: "./assets/images/product-7.jpg",
      price: 11.19,
      delivery: "August 2",
      offer: "20%",
      deal: true,
    },
    {
      id: 8,
      name: "Caldwell Flash Bang",
      description: "Descripción del producto 1",
      img: "./assets/images/product-8.jpg",
      price: 23.99,
      delivery: "July 10",
      offer: "20%",
      deal: true,
    },
    {
      id: 9,
      name: "Funko Bittys Pop!: FNAF",
      description: "Descripción del producto 1",
      img: "./assets/images/product-9.jpg",
      price: 13.52,
      delivery: "June 13",
      offer: "10%",
      deal: true,
    },
    {
      id: 10,
      name: "My First Paint With Water",
      description: "Descripción del producto 1",
      img: "./assets/images/product-10.jpg",
      price: 16.79,
      delivery: "May 31",
      offer: "30%",
      deal: true,
    },
    {
      id: 11,
      name: "SAMSUNG Galaxy S23",
      description: "Descripción del producto 1",
      img: "./assets/images/product-11.jpg",
      price: 559.99,
      delivery: "May 31",
      offer: "15%",
      deal: true,
    },

  ];

  function showProducts() {
      const productsContainer = document.getElementById('products');
      products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card';

          const productImage = document.createElement('div');
          productImage.className = 'product-image';
          const productImg = document.createElement('img');
          productImg.src = product.img;
          productImg.alt = product.name;
          productImage.appendChild(productImg);

          const productInfo = document.createElement('div');
          productInfo.className = 'product-info';
          const productBadge = document.createElement('p');
          productBadge.textContent = `${product.offer} off`;
          
          const productPrice = document.createElement('p');
          productPrice.textContent = `$${product.price}`;
          productInfo.appendChild(productBadge);
          if (product.deal) {
            const spanDeal = document.createElement('span');
            spanDeal.textContent = ' Limited time deal';
            productInfo.appendChild(spanDeal);
        }
        const productName = document.createElement('p');
          productName.textContent = `${product.name}`;
          productInfo.appendChild(productPrice);
          productInfo.appendChild(productName);
          

          productCard.appendChild(productImage);
          productCard.appendChild(productInfo);
          productsContainer.appendChild(productCard);
      });
  }


  showProducts();
});