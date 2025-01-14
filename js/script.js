const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Aquí puedes agregar código para validar los campos del formulario
  // y enviar los datos a un servidor (si lo necesitas)

  alert("¡Formulario enviado!"); // Muestra un mensaje de confirmación
});

//validar solo numeros en formulario contacto
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("keypress", function (event) {
  const charCode = event.which ? event.which : event.keyCode;

  // Permitir solo números (códigos ASCII del 48 al 57)
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    event.preventDefault();
  }
});

// js para Informacion.html

const acordeones = document.querySelectorAll('.accordion');

acordeones.forEach(accordion => {
  accordion.addEventListener('show.bs.collapse', function (event) {
    // Detener la propagación del evento para que no afecte a otros acordeones
    event.stopPropagation();

    const colapsoActual = event.target;
    const elementosColapso = accordion.querySelectorAll('.accordion-collapse');

    elementosColapso.forEach(elemento => {
      if (elemento !== colapsoActual && elemento.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(elemento, {
          toggle: false
        });
        bsCollapse.hide();
      }
    });
  });
});



const formularioContacto = document.getElementById('formulario-contacto');
const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    formulario.addEventListener('submit', function(event) {
      event.preventDefault();

      // Envía el formulario con EmailJS
      emailjs.sendForm('service_lsgxslh', 'template_01vbe8a', this)
        .then(function() {
            console.log('SUCCESS!');
            // Oculta el formulario
            formulario.style.display = 'none';
            // Muestra el mensaje de confirmación
            mensajeConfirmacion.style.display = 'block';
            formulario.reset(); 
        }, function(error) {
            console.log('FAILED...', error);
            alert('Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
        });
    });
