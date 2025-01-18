// script.js

// ============================================
// Sidebar Functionality
// ============================================
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

// Add active class to the clicked menu item
allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    });
});

// Toggle sidebar on menu bar click
menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

// ============================================
// Search Functionality
// ============================================
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');
const searchInput = document.querySelector('#content nav form .form-input input');

searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    } else {
        // Perform search
        const searchTerm = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll('.table-data .order table tbody tr');
        rows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            if (rowText.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
});

// ============================================
// Dark Mode Toggle
// ============================================
const switchMode = document.getElementById('switch-mode');

if (switchMode) {
    switchMode.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
}

// ============================================
// Product Management
// ============================================
function saveProduct(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

function deleteProduct(productName) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products = products.filter(product => product.title !== productName);
    localStorage.setItem('products', JSON.stringify(products));
}

function editProduct(index) {
    window.location.href = `editproduct.html?index=${index}`;
}

function displayProducts() {
    const tableBody = document.querySelector('.table-data .order table tbody');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Clear existing rows
    tableBody.innerHTML = '';

    // Add each product to the table
    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.image}" alt="${product.title}" width="50"></td>
            <td>${product.title}</td>
            <td>${product.regularPrice} DH</td>
            <td>${product.category}</td>
            <td>Vichy</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td>
                <i class='bx bx-edit' style="cursor: pointer;" onclick="editProduct(${index})"></i>
                <i class='bx bx-trash' style="cursor: pointer;" onclick="deleteProduct('${product.title}')"></i>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// ============================================
// Order Management
// ============================================
function saveOrder(order) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function deleteOrder(orderId) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders = orders.filter(order => order.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function displayOrders() {
    const ordersTableBody = document.getElementById('orders-table-body');
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Clear existing rows
    ordersTableBody.innerHTML = '';

    // Add each order to the table
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${order.id}</td>
            <td>${order.products.map(p => p.name).join(', ')}</td>
            <td>${order.total} DH</td>
            <td>${order.date}</td>
            <td><span class="status ${order.status.toLowerCase()}">${order.status}</span></td>
        `;
        ordersTableBody.appendChild(row);
    });
}

// ============================================
// User Management
// ============================================
function saveUser(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function deleteUser(userName) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(user => user.name !== userName);
    localStorage.setItem('users', JSON.stringify(users));
}

function displayUsers() {
    const tableBody = document.getElementById('user-table-body');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Clear existing rows
    tableBody.innerHTML = '';

    // Add each user to the table
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.address}</td>
            <td>${user.postalCode}</td>
            <td>
                <i class='bx bx-edit' style="cursor: pointer;" onclick="editUser('${user.name}')"></i>
                <i class='bx bx-trash' style="cursor: pointer;" onclick="deleteUser('${user.name}')"></i>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// ============================================
// Shopping Cart Functionality
// ============================================
let cart = [];

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} DH`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `${total} DH`;
}

function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const order = {
        id: Date.now(),
        products: cart,
        total: cart.reduce((sum, item) => sum + item.price, 0),
        date: new Date().toLocaleDateString(),
        status: 'Pending'
    };

    saveOrder(order);

    // Clear cart
    cart = [];
    updateCartUI();
    alert('Order placed successfully!');
    window.location.href = 'orders.html';
}

// ============================================
// Initialize Pages
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.table-data .order table tbody')) {
        displayProducts();
    }
    if (document.getElementById('orders-table-body')) {
        displayOrders();
    }
    if (document.getElementById('user-table-body')) {
        displayUsers();
    }
    if (document.getElementById('product-list')) {
        displayProducts();
    }
});

function clearCart() {
    if (cart.length === 0) {
        alert('Your cart is already empty!');
        return;
    }

    // Confirm with the user before clearing the cart
    const confirmClear = confirm('Are you sure you want to clear your cart?');
    if (confirmClear) {
        cart = []; // Clear the cart array
        updateCartUI(); // Update the cart UI
        alert('Cart cleared successfully!');
    }
}

// Function to delete a product
function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        window.location.reload();
    }
}

// Function to edit a product
function editProduct(index) {
    window.location.href = `editproduct.html?index=${index}`;
}