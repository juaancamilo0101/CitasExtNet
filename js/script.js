const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Aquí puedes agregar código para validar los campos del formulario
  // y enviar los datos a un servidor (si lo necesitas)

  alert('¡Formulario enviado!'); // Muestra un mensaje de confirmación
});