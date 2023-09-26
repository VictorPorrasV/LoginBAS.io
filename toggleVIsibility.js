function togglePinVisibility() {
    var pinInput = document.getElementById("pin");
    var toggleButton = document.querySelector(".toggle-pin");

    if (pinInput.type === "password") {
        pinInput.type = "text";
        toggleButton.innerHTML = '<i class="fas fa-eye-slash "></i>';

       
    } else {
        pinInput.type = "password";
        toggleButton.innerHTML = '<i class="fas fa-eye "></i>'
    }
    var pinInput = document.getElementById("pin");
    pinInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '').slice(0,4);
    })
    
}











function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.innerHTML = '<i class="fas fa-eye-slash "></i>';
    } else {
        passwordInput.type = "password";
        toggleButton.innerHTML = '<i class="fas fa-eye "></i>';
    }
}

// Función para validar y aplicar clases al campo de contraseña
function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordFormControl = passwordInput.parentElement.parentElement;
    const passwordIconDiv = passwordFormControl.querySelector('.icono');

    if (passwordInput.value.trim() === '') {
        // La contraseña está vacía, agrega la clase "error" al icono y a los divs padre
        passwordIconDiv.classList.remove('success');
        passwordIconDiv.classList.add('error');
        passwordFormControl.classList.add('error');
    } else if (passwordInput.value.trim().length < 8) {
        // La contraseña no cumple con los requisitos de longitud, agrega la clase "error" al icono y a los divs padre
        passwordIconDiv.classList.remove('success');
        passwordIconDiv.classList.add('error');
        passwordFormControl.classList.add('error');
    } else {
        // La contraseña cumple con los requisitos, agrega la clase "success" al icono y quita la clase "error" de los divs padre
        passwordIconDiv.classList.remove('error');
        passwordIconDiv.classList.add('success');
        passwordFormControl.classList.remove('error');
        passwordFormControl.classList.add('add');
    }

    const pinInput = document.getElementById('pin');
    const pinFormControl = pinInput.parentElement.parentElement;
    const pinIconDiv = pinFormControl.querySelector('.icono');

    if (pinInput.value.trim() === '') {
        // El campo del PIN está vacío, agrega la clase "error" al icono y a los divs padre
        pinIconDiv.classList.remove('success');
        pinIconDiv.classList.add('error');
        pinFormControl.classList.add('error');
    } else if (!/^[0-9]{4}$/.test(pinInput.value.trim())) {
        // El PIN no cumple con los requisitos de 4 dígitos, agrega la clase "error" al icono y a los divs padre
        pinIconDiv.classList.remove('success');
        pinIconDiv.classList.add('error');
        pinFormControl.classList.add('error');
    } else {
        // El PIN cumple con los requisitos, agrega la clase "success" al icono y quita la clase "error" de los divs padre
        pinIconDiv.classList.remove('error');
        pinIconDiv.classList.add('success');
        pinFormControl.classList.remove('error');
        pinFormControl.classList.add('success')
    }

   
    // Obtiene una referencia al botón "Join Now"
    const joinButton = document.getElementById('joinButton');

    // Agrega un controlador de eventos al botón para llamar a la función de validación
    joinButton.addEventListener('click', validatePassword);
}



