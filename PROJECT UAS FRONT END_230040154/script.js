// Handle 'Masuk' button click
document.querySelector('.enter-btn').addEventListener('click', () => {
    // Hide landing page
    document.querySelector('.landing-page').style.display = 'none';

    // Show shop section
    document.getElementById('shop').style.display = 'block';
});
document.getElementById('discussionForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Pesan Anda telah dikirim! Terima kasih telah berdiskusi dengan kami.');
    this.reset();
});

// Modal and Cart Handling
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.getElementById('cartItems');
const totalPriceElement = document.getElementById('totalPrice');
const modalCloseButton = document.querySelector('.modal-close');
let cart = [];

// Open Modal Function
function openCartModal() {
    cartModal.style.display = 'flex';
    updateCartUI();
}

// Close Modal Function
modalCloseButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseInt(productElement.getAttribute('data-price'));

        // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        openCartModal();
    });
});

// Update Cart UI
function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} x ${item.quantity} - Rp. ${item.price * item.quantity}`;
        cartItemsContainer.appendChild(itemElement);

        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: Rp. ${totalPrice}`;
}
