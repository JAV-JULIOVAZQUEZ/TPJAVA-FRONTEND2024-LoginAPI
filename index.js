document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '' || password === '') {
        errorMessage.textContent = 'Ambos campos son obligatorios.';
        errorMessage.style.display = 'block';
    } else if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Por favor, ingrese un correo electrónico válido.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        
        alert('INGRESO EXITOSO');
        
        window.location.href = '../index.html';
    }
});

