function registerUser() {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Crear objeto con los datos del usuario
    const userData = {
        nombre: name,
        apellido: lastName,
        telefono,
        email,
        password
    };

    // Hacer la solicitud POST a la API de registro
    fetch('http://localhost:5000/api/auth/register', { // Cambia el puerto si es necesario
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en el registro');
        }
        return response.json();
    })
    .then(data => {
        alert(data.msg); // Mostrar mensaje de éxito
        window.location.href = 'login.html'; // Redirigir a la página de login
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al registrar el usuario. Intenta nuevamente.');
    });
}

function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Crear objeto con las credenciales del usuario
    const loginData = {
        email,
        password
    };

    // Hacer la solicitud POST a la API de login
    fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en el login');
        }
        return response.json();
    })
    .then(data => {
        // Verifica que el backend esté devolviendo el token y otros campos
        console.log(data); // Para ver qué campos se están devolviendo realmente

        // Asegúrate de que 'data.token' tiene un valor antes de almacenarlo
        if (data.token) {
            // Almacenar el token en el localStorage
            localStorage.setItem('token', data.token); // Almacena el token JWT
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', data.user.nombre); // Asegúrate de que 'data.user.nombre' exista
            localStorage.setItem('cartCount', 0);

            // Redirigir a la página de inicio
            window.location.href = 'index.html';
        } else {
            throw new Error('No se ha recibido el token del servidor.');
        }
    })
    .catch(error => {
        console.error('Error al iniciar sesión:', error.message);
        alert('Acceso denegado. Por favor, revisa tus credenciales.');
    });
}

// Función para obtener datos protegidos
function fetchProtectedData() {
    const token = localStorage.getItem('token');

    fetch('http://localhost:5000/api/auth/protected', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, // Asegúrate de que el token esté presente aquí
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al acceder a la ruta protegida');
        }
        return response.json();
    })
    .then(data => {
        console.log('Datos protegidos:', data);
        // Aquí puedes manejar los datos recibidos
    })
    .catch(error => {
        console.error('Error al acceder a la ruta protegida:', error.message);
    });
}

function logoutUser() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('username');
    localStorage.removeItem('cartCount');
    window.location.href = 'login.html';
}
