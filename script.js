// ===================================================================
//
//               SCRIPT JRS - Lógica de Tablas
//
// ===================================================================

// Usamos 'let' en lugar de 'const' solo si planeas modificar el array entero
// (por ejemplo, cargar nuevos datos desde una API). Si solo modificas los objetos
// internos, 'const' está bien, pero 'let' es más seguro si la estructura cambia.

// --- Estructura de Datos Base (Se recomienda cargar estos datos desde un archivo JSON o una base de datos)
let equipos = [
  { nombre: "Machetitos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Cornudos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "White Phanter Kings", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Calyndra", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Banfield", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 }, // Corregido: 'pe' antes de 'pg'
  { nombre: "Valunir", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Loan", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Laira", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "El Rejunte De Amigos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Wanderers", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Joga Bonito", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Bristol", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 }
];

let goleadores = [
  { jugador: "Goleador A", equipo: "Machetitos", goles: 5 },
  { jugador: "Goleador B", equipo: "Cornudos", goles: 4 },
  { jugador: "Goleador C", equipo: "White Phanter Kings", goles: 4 },
  { jugador: "Goleador D", equipo: "Calyndra", goles: 3 },
  { jugador: "Goleador E", equipo: "Banfield", goles: 3 }
];

// -------------------------------------------------------------------

/**
 * Función que renderiza la tabla de posiciones en el DOM.
 * Incluye lógica de desempate secundaria (por partidos ganados).
 */
function mostrarTablaPosiciones() {
  // 1. Mejor práctica: Usar querySelector para obtener el cuerpo de la tabla.
  const tbody = document.querySelector("#tablaPosiciones tbody");
  if (!tbody) return; // Si no existe el elemento, salimos de la función.

  // 2. Lógica de Ordenamiento Avanzada (Pts y luego PG)
