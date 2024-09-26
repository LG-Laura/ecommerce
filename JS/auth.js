// Función para registrar un usuario
function registerUser() {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { name, lastName, telefono, email, password };
    
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el usuario ya está registrado
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        alert("El usuario ya está registrado");
        return;
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Usuario registrado con éxito");

    window.location.href = 'login.html';  // Redirigir al login
}

// Función para iniciar sesión
function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert("Inicio de sesión exitoso");
        window.location.href = 'products.html';  // Redirigir al catálogo
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

// Función para cerrar sesión
function logoutUser() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';  // Redirigir al login
}

// Verificar si hay un usuario logueado
function checkUserLoggedIn() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.querySelector('.shopping-icon p').innerText = `Hola, ${loggedInUser.name}`;
    }
}
