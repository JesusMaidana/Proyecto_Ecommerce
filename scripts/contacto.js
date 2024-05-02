const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const city = document.getElementById('city');
const sucursal1 = document.getElementById('sucursal1');
const sucursal2 = document.getElementById('sucursal2');
const domicilio = document.getElementById('domicilio');
const coupon = document.getElementById('coupon');
const submitButton = document.getElementById('submitButton');
const enviadoMensaje = document.getElementById('enviadoMensaje');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  // Eliminar la clase 'success' del inputControl
  inputControl.classList.remove('success');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const sucursal1Value = sucursal1.checked;
  const sucursal2Value = sucursal2.checked;
  const domicilioValue = domicilio.checked;
  // const couponValue = coupon.value.trim();

  if (firstnameValue === '') {
    setError(firstname, 'El nombre es obligatorio');
  } else {
    setSuccess(firstname);
  }

  if (lastnameValue === '') {
    setError(lastname, 'El apellido es obligatorio');
  } else {
    setSuccess(lastname);
  }

  if (emailValue === '') {
    setError(email, 'El correo electrónico es obligatorio');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Proporcione una dirección de correo electrónico válida');
  } else {
    setSuccess(email);
  }

  if (phoneValue === '') {
    setError(phone, 'El teléfono es obligatorio');
  } else {
    setSuccess(phone);
  }

  if (addressValue === '') {
    setError(address, 'La dirección es obligatoria');
  } else {
    setSuccess(address);
  }

  if (cityValue === '') {
    setError(city, 'La ciudad es obligatoria');
  } else {
    setSuccess(city);
  }

  if (!sucursal1Value && !sucursal2Value && !domicilioValue) {
    setError(sucursal1, 'Seleccione una opción de entrega');
    setError(sucursal2, '');
    setError(domicilio, '');
  } else {
    setSuccess(sucursal1);
    setSuccess(sucursal2);
    setSuccess(domicilio);
  }

  // Verificar si todos los campos son válidos antes de mostrar el mensaje
  const allInputsValid = document.querySelectorAll('.input-control.error').length === 0;

  if (allInputsValid) {
    enviadoMensaje.style.display = 'block'; // Mostrar el mensaje enviado
    submitButton.style.display = 'none'; // Ocultar el botón de "Hacer Pedido"
    form.reset(); // Limpiar los campos del formulario
  }
};
