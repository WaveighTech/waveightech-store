let cart = [];
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');
const cartItemsContainer = document.getElementById('cartItems');
const totalAmount = document.getElementById('totalAmount');
const checkoutButton = document.getElementById('checkoutButton');

const updateCart = () => {
    let total = 0;
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(cartItem);
        total += parseFloat(item.price);
    });

    totalAmount.textContent = `Total: $${total.toFixed(2)}`;
    cartButton.textContent = `Cart (${cart.length})`;
};

const openCart = () => {
    cartModal.style.display = 'block';
};

const closeCart = () => {
    cartModal.style.display = 'none';
};

const addToCart = (product) => {
    cart.push(product);
    updateCart();
};

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = {
            id: e.target.dataset.id,
            name: e.target.dataset.name,
            price: e.target.dataset.price,
        };
        addToCart(product);
    });
});

cartButton.addEventListener('click', openCart);
closeModal.addEventListener('click', closeCart);
checkoutButton.addEventListener('click', () => {
    alert('Proceeding to Checkout...');
    cart = [];
    updateCart();
});
