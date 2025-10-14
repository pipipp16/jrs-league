// ==== TABLA DE POSICIONES ====
const equipos = [
  { nombre: "Machetitos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Cornudos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "White Phanter Kings", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Calyndra", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Banfield", pts: 0, pj: 0, pe: 0, pg: 0, pp: 0 },
  { nombre: "Valunir", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Loan", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Laira", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "El Rejunte De Amigos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Wanderers", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Joga Bonito", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 },
  { nombre: "Bristol", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0 }
];

// ==== GOLEADORES ====
const goleadores = [
  { jugador: "Sin datos", equipo: "-", goles: 0 },
  { jugador: "Sin datos", equipo: "-", goles: 0 },
  { jugador: "Sin datos", equipo: "-", goles: 0 },
  { jugador: "Sin datos", equipo: "-", goles: 0 },
  { jugador: "Sin datos", equipo: "-", goles: 0 }
];

// ==== FUNCIONES ====
function mostrarTablaPosiciones() {
  const tbody = document.querySelector("#tablaPosiciones tbody");
  tbody.innerHTML = "";

  equipos.sort((a, b) => b.pts - a.pts);

  equipos.forEach((eq, i) => {
    const fila = `
      <tr>
        <td>${i + 1}</td>
        <td>${eq.nombre}</td>
        <td>${eq.pts}</td>
        <td>${eq.pj}</td>
        <td>${eq.pg}</td>
        <td>${eq.pe}</td>
        <td>${eq.pp}</td>
      </tr>`;
    tbody.innerHTML += fila;
  });
}

function mostrarGoleadores() {
  const tbody = document.querySelector("#tablaGoleadores tbody");
  tbody.innerHTML = "";

  goleadores.sort((a, b) => b.goles - a.goles);

  goleadores.forEach((jug, i) => {
    const fila = `
      <tr>
        <td>${i + 1}</td>
        <td>${jug.jugador}</td>
        <td>${jug.equipo}</td>
        <td>${jug.goles}</td>
      </tr>`;
    tbody.innerHTML += fila;
  });
}

// ==== CARGAR DATOS AL INICIAR ====
mostrarTablaPosiciones();
mostrarGoleadores();
