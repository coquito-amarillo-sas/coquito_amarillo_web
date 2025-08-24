function iniciar() {
  const nombre = document.getElementById("nombre").value;

  if (nombre.trim() === "") {
    alert("Por favor ingresa tu nombre");
    return;
  }

  // Guardar nombre para usarlo en el cuestionario
  localStorage.setItem("usuario", nombre);

  // Redirigir al cuestionario
  window.location.href = "src/cuestionario.html";
}
function guardarRespuestas() {
  // Aquí vas leyendo los inputs del cuestionario
  const salud = document.getElementById("salud").value;
  const trabajo = document.getElementById("trabajo").value;
  const familia = document.getElementById("familia").value;

  // Validación básica
  if (!salud || !trabajo || !familia) {
    alert("Por favor responde todas las preguntas");
    return;
  }

  // Guardar en localStorage
  localStorage.setItem("salud", salud);
  localStorage.setItem("trabajo", trabajo);
  localStorage.setItem("familia", familia);

  // Ir al resultado
  window.location.href = "resultado.html";
}

