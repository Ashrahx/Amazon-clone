document.addEventListener('DOMContentLoaded', function () {

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

  let cart = [];

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
      productBadge.className = 'product-badge'
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
      productName.className = 'product-name';
      productName.textContent = `${product.name}`;
      productInfo.appendChild(productPrice);
      productInfo.appendChild(productName);


      const addButton = document.createElement('a');
      addButton.className = 'add-button';
      addButton.textContent = 'Add cart';
      addButton.addEventListener('click', () => addCart(product));
      productInfo.appendChild(addButton);



      productCard.appendChild(productImage);
      productCard.appendChild(productInfo);
      productsContainer.appendChild(productCard);
    });
  }


  // Add products to cart

  function addCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCart();
  }


  function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-left');
    cartItemsContainer.innerHTML = '';
    const cartTitle = document.createElement('h1');
    cartTitle.textContent = 'Shopping cart'
    const cartLine = document.createElement('hr');
    let total = 0;

    cartItemsContainer.appendChild(cartTitle);
    cartItemsContainer.appendChild(cartLine);

    // Create cart products

    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'product-cart-list';
      cartItemsContainer.appendChild(cartItem);

      const itemImg = document.createElement('img');
      itemImg.src = item.img;
      itemImg.alt = item.name;
      itemImg.style.width = '180px'
      itemImg.style.height = 'auto'
      cartItem.appendChild(itemImg)

      const itemInfoContainer = document.createElement('div');
      cartItem.appendChild(itemInfoContainer);

      const itemTitleContainer = document.createElement('div');
      itemTitleContainer.className = 'product-title-price'
      itemInfoContainer.appendChild(itemTitleContainer);

      const itemTitle = document.createElement('p');
      itemTitle.textContent = item.name;
      itemTitleContainer.appendChild(itemTitle);
    
      const itemPriceContainer = document.createElement('p');
      const itemPriceStrong = document.createElement('b');
      itemPriceStrong.textContent = `$${item.price * item.quantity}`;
      itemPriceContainer.appendChild(itemPriceStrong);

      itemTitleContainer.appendChild(itemTitle);
      itemTitleContainer.appendChild(itemPriceContainer);


      const itemSeller = document.createElement('p');
      itemSeller.className = 'product-cart-bestseller';
      const itemSellerName = document.createElement('span');
      itemSellerName.textContent = '#1 Best seller';
      itemSeller.appendChild(itemSellerName);
      itemInfoContainer.appendChild(itemSeller);

      const itemStock = document.createElement('p');
      itemStock.className = 'product-cart-stock';
      itemStock.textContent= 'In Stock';
      itemInfoContainer.appendChild(itemStock);

      const itemDelivery = document.createElement('p');
      itemDelivery.className = 'product-cart-delivery';
      itemDelivery.innerHTML= `FREE delivery <b>Mon, ${item.delivery}</b> available in checkout</p>`;
      itemInfoContainer.appendChild(itemDelivery);

      const itemReturns = document.createElement('p');
      itemReturns.className = 'product-cart-returns';
      itemReturns.innerHTML= 'FREE Returns &#11191';
      itemInfoContainer.appendChild(itemReturns);

      const itemGift = document.createElement('p');
      itemGift.className = 'product-cart-gift';
      itemGift.textContent= 'Gift options not available.';
      const itemGiftSpan = document.createElement('span');
      itemGiftSpan.textContent = 'Learn more';
      itemGift.appendChild(itemGiftSpan);
      itemInfoContainer.appendChild(itemGift);

      
      const itemListAction = document.createElement('div');
      itemListAction.className = 'product-cart-list-action'
      itemInfoContainer.appendChild(itemListAction);

      // Decrease the amount of product
      const decrementButton = document.createElement('button');
      decrementButton.textContent = '-';
      decrementButton.addEventListener('click', () => {
        if (item.quantity > 1) {
          item.quantity -= 1;
          updateCart();
        }
      });
      itemListAction.appendChild(decrementButton);

      const itemQuantity = document.createElement('p');
      itemQuantity.textContent = item.quantity;
      itemListAction.appendChild(itemQuantity);
      
      // Increases product quantity
      const incrementButton = document.createElement('button');
      incrementButton.textContent = '+';
      incrementButton.addEventListener('click', () => {
        item.quantity += 1;
        updateCart();
      });
      itemListAction.appendChild(incrementButton);


      const cartLine = document.createElement('hr');
      itemListAction.appendChild(cartLine);

      const actionButtonDelete = document.createElement('p');
      actionButtonDelete.className = 'action-btn';
      actionButtonDelete.textContent = 'Delete';
      actionButtonDelete.addEventListener('click', () => {
        removeCart(item.id);
      });
      itemListAction.appendChild(actionButtonDelete)

      const cartLineTwo = document.createElement('hr');
      itemListAction.appendChild(cartLineTwo);

      const actionButtonSave = document.createElement('p');
      actionButtonSave.className = 'action-btn';
      actionButtonSave.textContent = 'Save for later';
      itemListAction.appendChild(actionButtonSave);

      const cartLineThree = document.createElement('hr');
      itemListAction.appendChild(cartLineThree);

      const actionButtonCompare = document.createElement('p');
      actionButtonCompare.className = 'action-btn';
      actionButtonCompare.textContent = 'Compare with similar items';
      itemListAction.appendChild(actionButtonCompare)

      const cartLineFour = document.createElement('hr');
      itemListAction.appendChild(cartLineFour);

      const actionButtonShare = document.createElement('p');
      actionButtonShare.className = 'action-btn';
      actionButtonShare.textContent = 'Share';
      itemListAction.appendChild(actionButtonShare);

      const cartLineEnd = document.createElement('hr');
      cartItemsContainer.appendChild(cartLineEnd);

    });
    
  }

  function removeCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
      cart.splice(productIndex, 1);
      updateCart();
    }
  }

  // Show shopping cart|
  document.getElementById('nav-cart').onclick = function() {
  document.getElementById('cart-modal').style.display = "block";
}

document.getElementById('modal-close').onclick = function() {
  document.getElementById('cart-modal').style.display = "none";
}

  showProducts();
});