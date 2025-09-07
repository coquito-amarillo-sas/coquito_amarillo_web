// tests/app.test.js

function validarRespuestas(datos) {
  return Object.values(datos).every(v => v >= 1 && v <= 10);
}

test("Todas las respuestas deben estar entre 1 y 10", () => {
  const mockData = { salud: 5, finanzas: 7, carrera: 10, desarrollo: 8 };
  expect(validarRespuestas(mockData)).toBe(true);
});

test("Respuestas fuera de rango deben fallar", () => {
  const mockData = { salud: 0, finanzas: 12 };
  expect(validarRespuestas(mockData)).toBe(false);
});
