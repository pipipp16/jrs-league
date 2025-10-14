// ===================================================================
//
//               SCRIPT JRS - Lógica de Tablas y Datos
//
// ===================================================================

// --- Datos de Tablas (VALORES DE PRUEBA: ESTOS DEBEN SER CARGADOS)
let equipos = [
  { nombre: "Machetitos", pts: 10, pj: 4, pg: 3, pe: 1, pp: 0 },
  { nombre: "Cornudos", pts: 8, pj: 4, pg: 2, pe: 2, pp: 0 },
  { nombre: "White Phanter Kings", pts: 6, pj: 4, pg: 2, pe: 0, pp: 2 },
  { nombre: "Calyndra", pts: 6, pj: 4, pg: 1, pe: 3, pp: 0 },
  { nombre: "Banfield", pts: 4, pj: 4, pg: 1, pe: 1, pp: 2 },
  { nombre: "Valunir", pts: 3, pj: 4, pg: 1, pe: 0, pp: 3 },
  { nombre: "Loan", pts: 3, pj: 4, pg: 0, pe: 3, pp: 1 },
  { nombre: "Laira", pts: 2, pj: 4, pg: 0, pe: 2, pp: 2 },
  { nombre: "El Rejunte De Amigos", pts: 2, pj: 5, pg: 0, pe: 2, pp: 3 },
  { nombre: "Bristol", pts: 0, pj: 4, pg: 0, pe: 0, pp: 4 },
  { nombre: "Joga Bonito", pts: 0, pj: 4, pg: 0, pe: 0, pp: 4 },
  { nombre: "Wanderers", pts: 0, pj: 4, pg: 4, pe: 0, pp: 0 },
];

let goleadores = [
  { jugador: "Goleador A", equipo: "Machetitos", goles: 9 },
  { jugador: "Goleador B", equipo: "Cornudos", goles: 7 },
  { jugador: "Goleador C", equipo: "White Phanter Kings", goles: 7 },
  { jugador: "Goleador D", equipo: "Calyndra", goles: 5 },
  { jugador: "Goleador E", equipo: "Banfield", goles: 4 }
];

let asistencias = [
  { jugador: "Asistente X", equipo: "Machetitos", asis: 8 },
  { jugador: "Asistente Y", equipo: "Calyndra", asis: 6 },
  { jugador: "Asistente Z", equipo: "Banfield", asis: 5 },
  { jugador: "Asistente W", equipo: "Cornudos", asis: 4 },
  { jugador: "Asistente Q", equipo: "Loan", asis: 3 }
];

// --- Datos de Resultados
const resultadosFechas = {
    "1": `
        <p><strong>Resultados Fecha 1:</strong></p>
        <ul class="score-list">
            <li>Machetitos 3 - 1 Cornudos</li>
            <li>Calyndra 2 - 2 Banfield</li>
            <li>Loan 0 - 1 Laira</li>
        </ul>
    `,
    "2": `
        <p><strong>Resultados Fecha 2:</strong></p>
        <ul class="score-list">
            <li>Joga Bonito 1 - 0 Bristol</li>
            <li>Wanderers 4 - 3 Valunir</li>
        </ul>
    `,
    "3": `<p class="placeholder-text">¡Resultados de la Fecha 3, pendientes!</p>`
};

// ===================================================================
//                            FUNCIONES DE RENDERIZADO
// ===================================================================

function mostrarTablaPosiciones() {
  const tbody = document.querySelector("#tablaPosiciones tbody");
  if (!tbody) return;

  equipos.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    return b.pg - a.pg;
  });

  const filasHTML = equipos.map((eq, i) => {
    const claseFila = (i < 3) ? 'top-three' : '';

    return `
      <tr class="${claseFila}">
        <td>${i + 1}</td>
        <td>${eq.nombre}</td>
        <td>${eq.pts}</td>
        <td>${eq.pj}</td>
        <td>${eq.pg}</td>
        <td>${eq.pe}</td>
        <td>${eq.pp}</td>
      </tr>
    `;
  }).join('');

  tbody.innerHTML = filasHTML;
}

function mostrarGoleadores() {
  const tbody = document.querySelector("#tablaGoleadores tbody");
  if (!tbody) return;

  goleadores.sort((a, b) => b.goles - a.goles);

  const filasHTML = goleadores.map((jug, i) => {
    return `
      <tr>
        <td>${i + 1}</td>
        <td>${jug.jugador}</td>
        <td>${jug.equipo}</td>
        <td>${jug.goles}</td>
      </tr>
    `;
  }).join('');

  tbody.innerHTML = filasHTML;
}

function mostrarAsistencias() {
  const tbody = document.querySelector("#tablaAsistencias tbody");
  if (!tbody) return;

  asistencias.sort((a, b) => b.asis - a.asis);

  const filasHTML = asistencias.map((jug, i) => {
    return `
      <tr>
        <td>${i + 1}</td>
        <td>${jug.jugador}</td>
        <td>${jug.equipo}</td>
        <td>${jug.asis}</td>
      </tr>
    `;
  }).join('');

  tbody.innerHTML = filasHTML;
}

function configurarBotonesFechas() {
    const botones = document.querySelectorAll('.date-buttons .date-btn');
    const contenidoResultados = document.getElementById('resultadosFecha');

    botones.forEach(btn => {
        btn.addEventListener('click', function() {
            botones.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const fechaID = this.getAttribute('data-fecha');
            
            contenidoResultados.innerHTML = resultadosFechas[fechaID] || 
                                            `<p class="placeholder-text">Aún no hay resultados para la Fecha ${fechaID}.</p>`;
        });
    });

    // Carga la Fecha 1 automáticamente al iniciar
    if (botones.length > 0) {
        botones[0].click(); 
    }
}

// ===================================================================
//                            INICIALIZACIÓN
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  mostrarTablaPosiciones();
  mostrarGoleadores();
  mostrarAsistencias();
  configurarBotonesFechas();
  
  const discordButton = document.getElementById('discordBtn');
  if(discordButton) {
      discordButton.addEventListener('click', () => {
          // *** REEMPLAZA ESTE LINK CON TU ENLACE REAL DE DISCORD ***
          window.open('https://discord.gg/ejemplodeinvitacion', '_blank'); 
      });
  }
});
