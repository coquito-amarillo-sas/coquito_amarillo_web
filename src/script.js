document.getElementById("evaluacion-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const datos = {};
  const recomendaciones = [];

  // Obtener los valores del formulario
  for (const input of form.elements) {
    if (input.name && input.value) {
      const valor = parseInt(input.value);
      datos[input.name] = valor;

      if (valor <= 5) {
        recomendaciones.push(`⚠️ Debes prestar más atención al área de: <strong>${input.name}</strong>.`);
      }
    }
  }

  const labels = Object.keys(datos);
  const values = Object.values(datos);

  // Crear el gráfico
  const ctx = document.getElementById("graficoRueda").getContext("2d");

  // Destruir gráfico anterior si existe
  if (window.radarChart) window.radarChart.destroy();

  window.radarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: labels,
      datasets: [{
        label: "Tu evaluación",
        data: values,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        r: {
          beginAtZero: true,
          max: 10
        }
      }
    }
  });

  // Mostrar recomendaciones
  const div = document.getElementById("recomendaciones");
  if (recomendaciones.length > 0) {
    div.innerHTML = "<h3>Recomendaciones:</h3><ul>" +
      recomendaciones.map(r => `<li>${r}</li>`).join("") +
      "</ul>";
  } else {
    div.innerHTML = "<h3>¡Felicidades!</h3><p>Todas tus áreas están bien equilibradas.</p>";
  }
});
