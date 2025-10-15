// ===================================
// DATOS DE LA LIGA ⚽
// ===================================

const teams = [
    "valunir", "banfield", "bristol", "joga bonito", "white phanter kings", 
    "laira", "el rejunte de amigos", "loan", "calyndra", "machetitos", 
    "cornudos", "wanderers", "mamas fc"
];

// Datos de ejemplo para la tabla (PJ, PG, PE, PP, GF, GC, Pts)
// La columna DG (Diferencia de Gol) y el total de Puntos se calculan.
const initialStats = {
    "valunir":              { PJ: 5, PG: 3, PE: 1, PP: 1, GF: 10, GC: 5, Pts: 0 },
    "banfield":             { PJ: 5, PG: 3, PE: 0, PP: 2, GF: 15, GC: 8, Pts: 0 },
    "bristol":              { PJ: 5, PG: 2, PE: 3, PP: 0, GF: 7, GC: 3, Pts: 0 },
    "joga bonito":          { PJ: 5, PG: 2, PE: 2, PP: 1, GF: 8, GC: 6, Pts: 0 },
    "white phanter kings":  { PJ: 5, PG: 2, PE: 1, PP: 2, GF: 9, GC: 7, Pts: 0 },
    "laira":                { PJ: 5, PG: 1, PE: 4, PP: 0, GF: 5, GC: 5, Pts: 0 },
    "el rejunte de amigos": { PJ: 5, PG: 1, PE: 3, PP: 1, GF: 4, GC: 5, Pts: 0 },
    "loan":                 { PJ: 5, PG: 1, PE: 2, PP: 2, GF: 7, GC: 11, Pts: 0 },
    "calyndra":             { PJ: 5, PG: 1, PE: 1, PP: 3, GF: 6, GC: 10, Pts: 0 },
    "machetitos":           { PJ: 5, PG: 1, PE: 1, PP: 3, GF: 4, GC: 10, Pts: 0 },
    "cornudos":             { PJ: 5, PG: 0, PE: 3, PP: 2, GF: 2, GC: 5, Pts: 0 },
    "wanderers":            { PJ: 5, PG: 0, PE: 4, PP: 1, GF: 3, GC: 4, Pts: 0 },
    "mamas fc":             { PJ: 5, PG: 0, PE: 2, PP: 3, GF: 4, GC: 9, Pts: 0 }
};

// Calendario de partidos por fecha (Ejemplo de 3 fechas)
const fixture = [
    // FECHA 1
    [
        { local: "valunir", visitante: "banfield", resultado: "2 - 1" },
        { local: "bristol", visitante: "joga bonito", resultado: "1 - 1" },
        { local: "white phanter kings", visitante: "laira", resultado: "3 - 0" },
        { local: "el rejunte de amigos", visitante: "loan", resultado: "0 - 0" },
        { local: "calyndra", visitante: "machetitos", resultado: "3 - 1" },
        { local: "cornudos", visitante: "wanderers", resultado: "0 - 0" },
        { local: "mamas fc", visitante: "valunir", resultado: "0 - 1" }
    ],
    // FECHA 2
    [
        { local: "loan", visitante: "mamas fc", resultado: "1 - 0" },
        { local: "wanderers", visitante: "calyndra", resultado: "1 - 1" },
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
        { local: "calyndra", visitante: "loan", resultado: "0 - 3" },
        { local: "machetitos", visitante: "mamas fc", resultado: "1 - 0" },
        { local: "wanderers", visitante: "valunir", resultado: "1 - 1" }
    ]
    // ... Puedes añadir más fechas aquí ...
];

// ===================================
// LÓGICA DE TABLA DE POSICIONES
// ===================================

let leagueTable = [];

// 1. Calcular Puntos y Diferencia de Gol (DG)
function calculateStats() {
    leagueTable = teams.map(teamName => {
        const stats = initialStats[teamName];
        // Calcular Puntos (PG*3 + PE*1)
        const Pts = (stats.PG * 3) + stats.PE;
        // Calcular Diferencia de Gol (GF - GC)
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

// 2. Lógica de Ordenamiento
// Prioridad: 1. Puntos (descendente), 2. Diferencia de Gol (descendente), 3. Goles a Favor (descendente)
function sortTable() {
    leagueTable.sort((a, b) => {
        // Criterio 1: Puntos
        if (b.Pts !== a.Pts) {
            return b.Pts - a.Pts;
        }
        // Criterio 2: Diferencia de Gol
        if (b.DG !== a.DG) {
            return b.DG - a.DG;
        }
        // Criterio 3: Goles a Favor
        return b.GF - a.GF;
    });
}

// 3. Renderizar la tabla en HTML
function renderTable() {
    const tableBody = document.querySelector('#tabla-posiciones tbody');
    tableBody.innerHTML = ''; // Limpiar la tabla

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
// LÓGICA DE FECHAS INTERACTIVA
// ===================================

let currentFecha = 0; // Empieza en la fecha 1 (índice 0)

function renderFecha(fechaIndex) {
    const fechaData = fixture[fechaIndex];
    const container = document.getElementById('partidos-container');
    const title = document.getElementById('fecha-titulo');
    
    // Validar el índice
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
// LÓGICA DE INTERFAZ Y MODAL
// ===================================

// Función para cambiar de sección (Inicio/Liga)
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Lógica del modal de Redes
const redesBtn = document.getElementById('redes-btn');
const modal = document.getElementById('redes-modal');
const closeBtn = document.querySelector('.close-btn');

redesBtn.addEventListener('click', () => {
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

// ===================================
// INICIALIZACIÓN (Al cargar la página)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Construir y mostrar la tabla de posiciones ordenada
    calculateStats();
    sortTable();
    renderTable();

    // 2. Mostrar la primera fecha del calendario
    renderFecha(currentFecha);

    // 3. Asegurar que la sección 'Inicio' esté activa al cargar
    showSection('inicio');
});
