const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Aquí puedes agregar código para validar los campos del formulario
  // y enviar los datos a un servidor (si lo necesitas)

  alert("¡Formulario enviado!"); // Muestra un mensaje de confirmación
});

const formularioGoogle = document.querySelector(".contacto iframe");

formularioGoogle.onload = function () {
  // Obtiene el formulario dentro del iframe
  const formularioGoogle = this.contentWindow.document.querySelector("form");

  // Añade un event listener al formulario de Google
  formularioGoogle.addEventListener("submit", function () {
    // Recarga la sección del formulario después de 1 segundo
    setTimeout(function () {
      document.querySelector(".contacto").innerHTML = formulario.outerHTML;
    }, 1000);
  });
};

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
