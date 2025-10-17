// ===================================
// DATOS DE LA LIGA ⚽ (Calyndra Eliminada)
// ===================================

const teams = [
    "valunir", "banfield", "bristol", "joga bonito", "white phanter kings", 
    "laira", "el rejunte de amigos", "loan", "machetitos", 
    "cornudos", "wanderers", "mamas fc"
];

// Datos de ejemplo para la tabla (PJ, PG, PE, PP, GF, GC, Pts)
const initialStats = {
    "valunir":              { PJ: 5, PG: 3, PE: 1, PP: 1, GF: 10, GC: 5, Pts: 0 },
    "banfield":             { PJ: 5, PG: 3, PE: 0, PP: 2, GF: 15, GC: 8, Pts: 0 },
    "bristol":              { PJ: 5, PG: 2, PE: 3, PP: 0, GF: 7, GC: 3, Pts: 0 },
    "joga bonito":          { PJ: 5, PG: 2, PE: 2, PP: 1, GF: 8, GC: 6, Pts: 0 },
    "white phanter kings":  { PJ: 5, PG: 2, PE: 1, PP: 2, GF: 9, GC: 7, Pts: 0 },
    "laira":                { PJ: 5, PG: 1, PE: 4, PP: 0, GF: 5, GC: 5, Pts: 0 },
    "el rejunte de amigos": { PJ: 5, PG: 1, PE: 3, PP: 1, GF: 4, GC: 5, Pts: 0 },
    "loan":                 { PJ: 5, PG: 1, PE: 2, PP: 2, GF: 7, GC: 11, Pts: 0 },
    // "calyndra":           { PJ: 5, PG: 1, PE: 1, PP: 3, GF: 6, GC: 10, Pts: 0 }, <-- Eliminado
    "machetitos":           { PJ: 5, PG: 1, PE: 1, PP: 3, GF: 4, GC: 10, Pts: 0 },
    "cornudos":             { PJ: 5, PG: 0, PE: 3, PP: 2, GF: 2, GC: 5, Pts: 0 },
    "wanderers":            { PJ: 5, PG: 0, PE: 4, PP: 1, GF: 3, GC: 4, Pts: 0 },
    "mamas fc":             { PJ: 5, PG: 0, PE: 2, PP: 3, GF: 4, GC: 9, Pts: 0 }
};

// Datos para goleadores y asistidores (Usamos un array de objetos para ordenar)
const goleadores = [
    { jugador: "Jugador A", goles: 10 },
    { jugador: "Jugador B", goles: 8 },
    { jugador: "Jugador C", goles: 7 },
    { jugador: "Jugador D", goles: 6 },
    { jugador: "Jugador E", goles: 5 }, // El HTML tenía un error, lo corregí a E/5
];

const asistidores = [
    { jugador: "Jugador X", asistencias: 8 },
    { jugador: "Jugador Y", asistencias: 6 },
    { jugador: "Jugador Z", asistencias: 5 },
    { jugador: "Jugador WE", asistencias: 7 },
    { jugador: "Jugador F", asistencias: 7 },
];


// Calendario de partidos por fecha (Calyndra Eliminada de partidos)
const fixture = [
    // FECHA 1
    [
        { local: "valunir", visitante: "banfield", resultado: "2 - 1" },
        { local: "bristol", visitante: "joga bonito", resultado: "1 - 1" },
        { local: "white phanter kings", visitante: "laira", resultado: "3 - 0" },
        { local: "el rejunte de amigos", visitante: "loan", resultado: "0 - 0" },
        // { local: "calyndra", visitante: "machetitos", resultado: "3 - 1" }, <-- Eliminado
        { local: "cornudos", visitante: "wanderers", resultado: "0 - 0" },
        { local: "mamas fc", visitante: "valunir", resultado: "0 - 1" }
    ],
    // FECHA 2
    [
        { local: "loan", visitante: "mamas fc", resultado: "1 - 0" },
        // { local: "wanderers", visitante: "calyndra", resultado: "1 - 1" }, <-- Eliminado
        { local: "machetitos", visitante: "el rejunte de amigos", resultado: "2 - 1" },
        { local: "laira", visitante: "cornudos", resultado: "2 - 2" },
        { local: "joga bonito", visitante: "white phanter kings", resultado: "2 - 0" },
        { local: "banfield", visitante: "bristol", resultado: "3 - 2" },
        { local: "valunir", visitante: "loan", resultado: "4 - 0" }
    ],
    // FECHA 3
    [
        { local: "bristol", visitante: "valunir", resultado: "2 - 1" },
        { local: "white phanter kings", visitante: "banfield", resultado: "2 - 4" },
        { local: "cornudos", visitante: "joga bonito", resultado: "0 - 0" },
        { local: "el rejunte de amigos", visitante: "laira", resultado: "1 - 1" },
        // { local: "calyndra", visitante: "loan", resultado: "0 - 3" }, <-- Eliminado
        { local: "machetitos", visitante: "mamas fc", resultado: "1 - 0" },
        { local: "wanderers", visitante: "valunir", resultado: "1 - 1" }
    ]
    // ... Puedes añadir más fechas aquí ...
];

// ===================================
// LÓGICA DE TABLA DE POSICIONES
// ===================================

let leagueTable = [];

// Calcula Puntos, DG y construye la tabla
function calculateStats() {
    leagueTable = teams.map(teamName => {
        const stats = initialStats[teamName];
        const Pts = (stats.PG * 3) + stats.PE;
        const DG = stats.GF - stats.GC;

        return {
            nombre: teamName.toUpperCase(),
            PJ: stats.PJ,
            PG: stats.PG,
            PE: stats.PE,
            PP: stats.PP,
            GF: stats.GF,
            GC: stats.GC,
            DG: DG,
            Pts: Pts
        };
    });
}

// Lógica de Ordenamiento
function sortTable() {
    leagueTable.sort((a, b) => {
        if (b.Pts !== a.Pts) {
            return b.Pts - a.Pts;
        }
        if (b.DG !== a.DG) {
            return b.DG - a.DG;
        }
        return b.GF - a.GF;
    });
}

// Renderiza la tabla de posiciones en HTML
function renderTable() {
    const tableBody = document.querySelector('#tabla-posiciones tbody');
    tableBody.innerHTML = ''; 

    leagueTable.forEach((team, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${team.nombre}</td>
            <td>${team.PJ}</td>
            <td>${team.PG}</td>
            <td>${team.PE}</td>
            <td>${team.PP}</td>
            <td>${team.GF}</td>
            <td>${team.GC}</td>
            <td>${team.DG}</td>
            <td><strong>${team.Pts}</strong></td>
        `;
    });
}

// ===================================
// LÓGICA DE GOLEADORES Y ASISTIDORES (NUEVA LÓGICA DE ORDENAMIENTO)
// ===================================

function sortAndRenderLeaders() {
    // Ordenar Goleadores (por Goles, de mayor a menor)
    goleadores.sort((a, b) => b.goles - a.goles);
    
    const goleadoresBody = document.querySelector('#tabla-goleadores tbody');
    goleadoresBody.innerHTML = '';
    goleadores.forEach(player => {
        const row = goleadoresBody.insertRow();
        row.innerHTML = `<td>${player.jugador}</td><td>${player.goles}</td>`;
    });

    // Ordenar Asistidores (por Asistencias, de mayor a menor)
    asistidores.sort((a, b) => {
        if (b.asistencias !== a.asistencias) {
            return b.asistencias - a.asistencias;
        }
        // Desempate por nombre si tienen las mismas asistencias
        return a.jugador.localeCompare(b.jugador); 
    });

    const asistidoresBody = document.querySelector('#tabla-asistidores tbody');
    asistidoresBody.innerHTML = '';
    asistidores.forEach(player => {
        const row = asistidoresBody.insertRow();
        row.innerHTML = `<td>${player.jugador}</td><td>${player.asistencias}</td>`;
    });
}


// ===================================
// LÓGICA DE FECHAS INTERACTIVA
// ===================================

let currentFecha = 0; 

function renderFecha(fechaIndex) {
    const fechaData = fixture[fechaIndex];
    const container = document.getElementById('partidos-container');
    const title = document.getElementById('fecha-titulo');
    
    if (!fechaData) {
        container.innerHTML = `<p style="text-align:center; color: var(--color-secondary);">No hay datos para esta fecha.</p>`;
        title.textContent = `FECHA DESCONOCIDA`;
        return;
    }

    title.textContent = `FECHA ${fechaIndex + 1}`;
    container.innerHTML = '';

    fechaData.forEach(match => {
        const matchDiv = document.createElement('div');
        matchDiv.classList.add('match');
        
        matchDiv.innerHTML = `
            <span>${match.local.toUpperCase()}</span>
            <span class="match-score">${match.resultado}</span>
            <span>${match.visitante.toUpperCase()}</span>
        `;
        container.appendChild(matchDiv);
    });
}

function nextFecha() {
    if (currentFecha < fixture.length - 1) {
        currentFecha++;
        renderFecha(currentFecha);
    }
}

function prevFecha() {
    if (currentFecha > 0) {
        currentFecha--;
        renderFecha(currentFecha);
    }
}

// ===================================
// LÓGICA DE INTERFAZ Y MODAL (Se mantiene)
// ===================================

function showSection(id) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

const redesBtn = document.getElementById('redes-btn');
const modal = document.getElementById('redes-modal');
const closeBtn = document.querySelector('.close-btn');

redesBtn.addEventListener('click', () => {
    // Importante: Usar 'flex' para centrar el modal con el CSS
    modal.style.display = 'flex'; 
});

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.closeModal = closeModal; // Hacemos la función global para el onclick del HTML

// ===================================
// INICIALIZACIÓN (Al cargar la página)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Construir y mostrar la tabla de posiciones ordenada
    calculateStats();
    sortTable();
    renderTable();

    // 2. Ordenar y mostrar goleadores y asistidores
    sortAndRenderLeaders();

    // 3. Mostrar la primera fecha del calendario
    renderFecha(currentFecha);

    // 4. Asegurar que la sección 'Inicio' esté activa al cargar
    showSection('inicio');
});
