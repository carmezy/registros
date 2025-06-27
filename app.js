document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se envíe el formulario

    // Obtén los valores de los campos
    const nombre = document.querySelector('input[placeholder="Nombre"]').value;
    const contrasena = document.querySelector('input[placeholder="contraseña"]').value;
    const telefono = document.querySelector('input[placeholder="telefono"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const comentario = document.querySelector('#comentario').value;
    const color = document.querySelector('input[type="color"]').value;
    const esPersona = document.querySelector('input[type="checkbox"]').checked;
    const genero = document.querySelectorAll('input[type="radio"][name="opcion"]');
    let generoSeleccionado = '';
    genero.forEach(radio => { if(radio.checked) generoSeleccionado = radio.parentElement.textContent.trim(); });
    const pais = document.querySelector('select').value;

    // Crea un objeto con los datos
    const datos = {
        nombre,
        contrasena,
        telefono,
        email,
        comentario,
        color,
        esPersona,
        genero: generoSeleccionado,
        pais
    };

    // Guarda en localStorage
    localStorage.setItem('registro', JSON.stringify(datos));
    alert('Datos guardados en Local Storage');
});