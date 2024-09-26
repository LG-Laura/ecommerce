document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.querySelector('.shopping-icon p').innerHTML = `Hola, ${loggedInUser.name} <span id="cart-count">0</span>`;
        updateCartCount();
    }
});
