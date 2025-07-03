// Expresiones regulares para validar los campos
const nameRegex = /^[A-Za-z]+$/; // Solo letras
const passwordRegex = /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/; // Letras y números, 6-16 caracteres
const emailRegex = /^\S+@\S+\.\S+$/; // Formato de email básico
const phoneRegex = /^[0-9]{11,11}$/; // Exactamente 11 dígitos

// Selección de elementos del formulario
const form = document.querySelector('form');
const nameInput = form.querySelector('input[type="text"]');
const passwordInput = form.querySelector('input[type="password"]');
const phoneInput = form.querySelector('input[placeholder="telefono"]');
const emailInput = form.querySelector('input[type="email"]');

// Validación en tiempo real para el campo nombre
nameInput.addEventListener('input', e => {
    if (nameRegex.test(e.target.value)) {
        nameInput.classList.add('correct');    // Aplica borde verde si es válido
        nameInput.classList.remove('incorrect');
    } else {
        nameInput.classList.add('incorrect');  // Aplica borde rojo si es inválido
        nameInput.classList.remove('correct');
    }
});

// Validación en tiempo real para el campo contraseña
passwordInput.addEventListener('input', e => {
    if (passwordRegex.test(e.target.value)) {
        passwordInput.classList.add('correct');
        passwordInput.classList.remove('incorrect');
    } else {
        passwordInput.classList.add('incorrect');
        passwordInput.classList.remove('correct');
    }
});

// Validación en tiempo real para el campo teléfono
phoneInput.addEventListener('input', e => {
    if (phoneRegex.test(e.target.value)) {
        phoneInput.classList.add('correct');
        phoneInput.classList.remove('incorrect');
    } else {
        phoneInput.classList.add('incorrect');
        phoneInput.classList.remove('correct');
    }
});

// Validación en tiempo real para el campo email
emailInput.addEventListener('input', e => {
    if (emailRegex.test(e.target.value)) {
        emailInput.classList.add('correct');
        emailInput.classList.remove('incorrect');
    } else {
        emailInput.classList.add('incorrect');
        emailInput.classList.remove('correct');
    }
});

// Evento al enviar el formulario: guarda los datos en localStorage
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se envíe el formulario

    // Obtiene los valores de los campos por placeholder
    const nombre = document.querySelector('input[placeholder="Nombre"]').value;
    const contrasena = document.querySelector('input[placeholder="contraseña"]').value;
    const telefono = document.querySelector('input[placeholder="telefono"]').value;
    const email = document.querySelector('input[type="email"]').value;

    // (Opcional) Obtiene el género seleccionado y país si existen en el formulario
    let generoSeleccionado = '';
    genero.forEach(radio => { if(radio.checked) generoSeleccionado = radio.parentElement.textContent.trim(); });
    const pais = document.querySelector('select').value;

    // Crea un objeto con los datos del usuario
    const datos = {
        nombre,
        contrasena,
        telefono,
        email
    };

    // Guarda los datos en localStorage
    localStorage.setItem('registro', JSON.stringify(datos));
    alert('Datos guardados en Local Storage');
});