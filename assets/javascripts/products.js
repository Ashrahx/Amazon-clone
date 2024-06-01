document.addEventListener('DOMContentLoaded', function () {

  const products = [
    {
      id: 1,
      name: "Amazon Basics 5-Blade",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-1.jpg",
      price: 16.79,
      delivery: "May 25",
      offer: "19%",
      deal: true,
    },
    {
      id: 2,
      name: "N-Bone Puppy Teething",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-2.jpg",
      price: 23.15,
      delivery: "May 26",
      offer: "15%",
      deal: true,
    },
    {
      id: 3,
      name: "The Blast from the Past",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-3.jpg",
      price: 15.19,
      delivery: "May 27",
      offer: "20%",
      deal: true,
    },
    {
      id: 4,
      name: "Fisher-Price Baby",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-4.jpg",
      price: 14.39,
      delivery: "May 29",
      offer: "20%",
      deal: true,
    },
    {
      id: 5,
      name: "Pyle Premium Direct Injection",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-5.jpg",
      price: 12.21,
      delivery: "May 28",
      offer: "39%",
      deal: true,
    },
    {
      id: 6,
      name: "ABC Wooden Block Cart",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-6.jpg",
      price: 13.29,
      delivery: "May 30",
      offer: "30%",
      deal: true,
    },
    {
      id: 7,
      name: "Philips Led Flicker Free",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-7.jpg",
      price: 11.19,
      delivery: "August 2",
      offer: "20%",
      deal: true,
    },
    {
      id: 8,
      name: "Caldwell Flash Bang",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-8.jpg",
      price: 23.99,
      delivery: "July 10",
      offer: "20%",
      deal: true,
    },
    {
      id: 9,
      name: "Funko Bittys Pop!: FNAF",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-9.jpg",
      price: 13.52,
      delivery: "June 13",
      offer: "10%",
      deal: true,
    },
    {
      id: 10,
      name: "My First Paint With Water",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-10.jpg",
      price: 16.79,
      delivery: "May 31",
      offer: "30%",
      deal: true,
    },
    {
      id: 11,
      name: "SAMSUNG Galaxy S23",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-11.jpg",
      price: 559.99,
      delivery: "May 31",
      offer: "15%",
      deal: true,
    },
    {
      id: 12,
      name: "Meta Quest 2 — VR",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-12.jpg",
      price: 150.00,
      delivery: "Jun 20",
      offer: "20%",
      deal: true,
    },
    {
      id: 13,
      name: "Nintendo Switch™",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-13.jpg",
      price: 296.65,
      delivery: "Aug 02",
      offer: "10%",
      deal: true,
    },
    {
      id: 14,
      name: "GeForce RTX 4060",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-14.jpg",
      price: 559.99,
      delivery: "Dec 10",
      offer: "5%",
      deal: true,
    },
    {
      id: 15,
      name: "PlayStation 5 Console",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-15.jpg",
      price: 514.99,
      delivery: "Jul 12",
      offer: "8%",
      deal: true,
    },
    {
      id: 16,
      name: "Controller Interactive Screen",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-16.jpg",
      price: 69.99,
      delivery: "Jun 23",
      offer: "15%",
      deal: true,
    },
    {
      id: 17,
      name: "Valve Steam Deck 1TB ",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-17.jpg",
      price: 562.99,
      delivery: "Jun 31",
      offer: "5%",
      deal: true,
    },
    {
      id: 18,
      name: "Rechargeable Tracker",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-18.jpg",
      price: 189,
      delivery: "Jun 15",
      offer: "5%",
      deal: true,
    },
    {
      id: 19,
      name: "Mechanical Keyboard",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-19.jpg",
      price: 29.99,
      delivery: "Jun 20",
      offer: "19%",
      deal: true,
    },
    {
      id: 20,
      name: "GoPro HERO12 Black",
      description: "FREE Returns &#11191",
      img: "./assets/images/product-20.jpg",
      price: 299.99,
      delivery: "Jun 31",
      offer: "25%",
      deal: true,
    },

  ];

  let cart = [];

  function updateCartState() {
    const emptyCartDiv = document.querySelector('.empty-cart');
    if (cart.length === 0) {
      emptyCartDiv.style.display = 'flex'; // Muestra el div si el carrito está vacío
    } else {
      emptyCartDiv.style.display = 'none'; // Oculta el div si hay productos en el carrito
    }
  }


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
      cart.push({...product, quantity: 1 });
    }
    updateCart();
    updateTotalProductsDisplay();
    updateCartState(); 
  }

  function calculateTotalProducts() {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity;
    });
    return total;
  }

  function calculateSubtotal() {
    let subtotal = 0;
    cart.forEach(item => {
      subtotal += parseFloat(item.price) * item.quantity;
    });
    return subtotal.toFixed(2);

  }
  
  function updateTotalProductsDisplay() {
    const totalProductsElement = document.getElementById('total-products');
    const totalProducts = calculateTotalProducts();
    totalProductsElement.textContent = `${totalProducts}`;
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

    const displaySubtotal = document.getElementById('subtotal-products');
    displaySubtotal.textContent = `$${calculateSubtotal()}`;
  

    // Create cart products

    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'product-cart-list';
      cartItemsContainer.appendChild(cartItem);

      const itemImg = document.createElement('img');
      itemImg.src = item.img;
      itemImg.alt = item.name;
      itemImg.style.width = '180px'
      itemImg.style.height = '200px'
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
      itemPriceStrong.textContent = `$${(parseFloat(item.price) * item.quantity).toFixed(2)}`;
      itemPriceContainer.appendChild(itemPriceStrong);


      itemTitleContainer.appendChild(itemTitle);
      itemTitleContainer.appendChild(itemPriceContainer);


      const itemSeller = document.createElement('p');
      itemSeller.className = 'product-cart-bestseller';
      itemSeller.innerHTML = `<span>#1 Best seller</span> in Amazon`
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
      itemReturns.innerHTML= item.description;
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
      decrementButton.className = 'amount-button';
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
      incrementButton.className = 'amount-button';
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
      updateTotalProductsDisplay();
      updateCartState(); 
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
  updateCartState(); 
});