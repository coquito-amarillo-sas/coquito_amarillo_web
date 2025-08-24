function iniciar() {
  const nombre = document.getElementById("nombre").value;

  if (nombre.trim() === "") {
    alert("Por favor ingresa tu nombre");
    return;
  }

  // Guardar nombre para usarlo en el cuestionario
  localStorage.setItem("usuario", nombre);

  // Redirigir al cuestionario
  window.location.href = "cuestionario.html";
}
