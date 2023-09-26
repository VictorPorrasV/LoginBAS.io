
    // Obtiene una referencia a los elementos por sus IDs
    const joinButton = document.getElementById('joinButton');
    const usernameInput = document.getElementById('username');
    const lastnameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    // Agrega un controlador de eventos de clic al botón
    joinButton.addEventListener('click', () => {
        // Obtiene el valor de los campos de nombre, apellido, correo electrónico y número de teléfono, y los trima para eliminar espacios en blanco
        const usernameValue = usernameInput.value.trim();
        const lastnameValue = lastnameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const phoneValue = phoneInput.value.trim();

        // Obtén referencias a los elementos div con las clases "form-control"
        const usernameFormControl = usernameInput.parentElement;
        const lastnameFormControl = lastnameInput.parentElement;
        const emailFormControl = emailInput.parentElement;
        const phoneFormControl = phoneInput.parentElement;
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        if (usernameValue === '') {
            // El campo de nombre está vacío, agrega la clase "error" y quita la clase "success"
            usernameFormControl.classList.remove('success');
            usernameFormControl.classList.add('error');
        } else {
            // El campo de nombre no está vacío, agrega la clase "success" y quita la clase "error"
            usernameFormControl.classList.remove('error');
            usernameFormControl.classList.add('success');
        }

        if (lastnameValue === '') {
            // El campo de apellido está vacío, agrega la clase "error" y quita la clase "success"
            lastnameFormControl.classList.remove('success');
            lastnameFormControl.classList.add('error');
        } else {
            // El campo de apellido no está vacío, agrega la clase "success" y quita la clase "error"
            lastnameFormControl.classList.remove('error');
            lastnameFormControl.classList.add('success');
        }

        if (emailValue === '') {
            // El correo electrónico está vacío, agrega la clase "error" y quita la clase "success"
            emailFormControl.classList.remove('success');
            emailFormControl.classList.add('error');
        } else if (!emailRegex.test(emailValue)) {
            // El correo electrónico no tiene un formato válido, agrega la clase "error" y quita la clase "success"
            emailFormControl.classList.remove('success');
            emailFormControl.classList.add('error');
            // Muestra un mensaje de error específico
            emailFormControl.querySelector('small').textContent = 'El correo electrónico no es válido. Debe tener el formato: ejemplo@betanysports.com';
        } else {
            // El correo electrónico tiene un formato válido, agrega la clase "success" y quita la clase "error"
            emailFormControl.classList.remove('error');
            emailFormControl.classList.add('success');
        }

        if (phoneValue === '') {
            // El número de teléfono está vacío, agrega la clase "error" y quita la clase "success"
            phoneFormControl.classList.remove('success');
            phoneFormControl.classList.add('error');
        } else {
            // El número de teléfono tiene un formato válido, agrega la clase "success" y quita la clase "error"
            phoneFormControl.classList.remove('error');
            phoneFormControl.classList.add('success');
        }
    });
