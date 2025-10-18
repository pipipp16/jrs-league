// ===================================
// DATOS DE LA LIGA ⚽ (Con Equipo en jugadores)
// ===================================

const teams = [
    "valunir", "banfield", "bristol", "joga bonito", "white phanter kings",
    "laira", "el rejunte de amigos", "loan", "machetitos",
    "cornudos", "wanderers", "mamas fc"
];

// Datos iniciales de la tabla (Sirven como base para el ADMIN)
let leagueStats = {
    "valunir":              { PJ: 5, PG: 3, PE: 1, PP: 1, GF: 10, GC: 5, Pts: 0 },
    "banfield":             { PJ: 5, PG: 3, PE: 0, PP: 2, GF: 15, GC: 8, Pts: 0 },
    "bristol":              { PJ: 5, PG: 2, PE: 3, PP: 0, GF: 7, GC: 3, Pts: 0 },
    "joga bonito":          { PJ: 5, PG: 2, PE: 2, PP: 1, GF: 8, GC: 6, Pts: 0 },
    "white phanter kings":  { PJ: 5, PG: 2, PE: 1, PP: 2, GF: 9, GC: 7, Pts: 0 },
    "laira":                { PJ: 5, PG: 1, PE: 4, PP: 0, GF: 5, GC: 5, Pts: 0 },
    "el rejunte de amigos": { PJ: 5, PG: 1, PE: 3, PP: 1, GF: 4, GC: 5, Pts: 0 },
    "loan":                 { PJ: 5, PG: 1, PE: 2, PP: 2, GF: 7, GC: 11, Pts: 0 },
    "machetitos":           { PJ: 5, PG: 1, PE: 1, PP: 3, GF: 4, GC: 10, Pts: 0 },
    "cornudos":             { PJ: 5, PG: 0, PE: 3, PP: 2, GF: 2, GC: 5, Pts: 0 },
    "wanderers":            { PJ: 5, PG: 0, PE: 4, PP: 1, GF: 3, GC: 4, Pts: 0 },
    "mamas fc":             { PJ: 5, PG: 0, PE: 2, PP: 3, GF: 4, GC: 9, Pts: 0 }
};

// Datos para goleadores y asistidores (Ahora incluyen el equipo)
let goleadores = [
    { jugador: "Jugador A", equipo: "valunir", goles: 10 },
    { jugador: "Jugador B", equipo: "banfield", goles: 8 },
    { jugador: "Jugador C", equipo: "bristol", goles: 7 },
    { jugador: "Jugador D", equipo: "joga bonito", goles: 6 },
    { jugador: "Jugador E", equipo: "valunir", goles: 5 },
];

let asistidores = [
    { jugador: "Jugador X", equipo: "loan", asistencias: 8 },
    { jugador: "Jugador Y", equipo: "mamas fc", asistencias: 6 },
    { jugador: "Jugador Z", equipo: "bristol", asistencias: 5 },
    { jugador: "Jugador WE", equipo: "valunir", asistencias: 7 },
    { jugador: "Jugador F", equipo: "banfield", asistencias: 7 },
];


// Calendario de partidos por fecha (Ahora también almacena los resultados como números para el admin)
let fixture = [
    // FECHA 1
    [
        { local: "valunir", visitante: "banfield", scoreLocal: 2, scoreVisitante: 1 },
        { local: "bristol", visitante: "joga bonito", scoreLocal: 1, scoreVisitante: 1 },
        { local: "white phanter kings", visitante: "laira", scoreLocal: 3, scoreVisitante: 0 },
        { local: "el rejunte de amigos", visitante: "loan", scoreLocal: 0, scoreVisitante: 0 },
        { local: "cornudos", visitante: "wanderers", scoreLocal: 0, scoreVisitante: 0 },
        { local: "mamas fc", visitante: "valunir", scoreLocal: 0, scoreVisitante: 1 }
    ],
    // FECHA 2
    [
        { local: "loan", visitante: "mamas fc", scoreLocal: 1, scoreVisitante: 0 },
        { local: "machetitos", visitante: "el rejunte de amigos", scoreLocal: 2, scoreVisitante: 1 },
        { local: "laira", visitante: "cornudos", scoreLocal: 2, scoreVisitante: 2 },
        { local: "joga bonito", visitante: "white phanter kings", scoreLocal: 2, scoreVisitante: 0 },
        { local: "banfield", visitante: "bristol", scoreLocal: 3, scoreVisitante: 2 },
        { local: "valunir", visitante: "loan", scoreLocal: 4, scoreVisitante: 0 }
    ],
    // FECHA 3
    [
        { local: "bristol", visitante: "valunir", scoreLocal: 2, scoreVisitante: 1 },
        { local: "white phanter kings", visitante: "banfield", scoreLocal: 2, scoreVisitante: 4 },
        { local: "cornudos", visitante: "joga bonito", scoreLocal: 0, scoreVisitante: 0 },
        { local: "el rejunte de amigos", visitante: "laira", scoreLocal: 1, scoreVisitante: 1 },
        { local: "machetitos", visitante: "mamas fc", scoreLocal: 1, scoreVisitante: 0 },
        { local: "wanderers", visitante: "valunir", scoreLocal: 1, scoreVisitante: 1 }
    ]
];

// ===================================
// LÓGICA DE TABLA DE POSICIONES
// ===================================

let leagueTable = [];

function calculateStats() {
    // Calcula Puntos y DG
    leagueTable = teams.map(teamName => {
        const stats = leagueStats[teamName];
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

function sortTable() {
    // Criterios de ordenamiento: 1. Puntos, 2. Diferencia de Goles (DG), 3. Goles a Favor (GF)
    leagueTable.sort((a, b) => {
        if (b.Pts !== a.Pts) {
            return b.Pts - a.Pts; // Mayor Pts primero
        }
        if (b.DG !== a.DG) {
            return b.DG - a.DG; // Mayor DG primero
        }
        return b.GF - a.GF; // Mayor GF primero
    });
}

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
// LÓGICA DE GOLEADORES Y ASISTIDORES
// ===================================

function sortAndRenderLeaders() {
    // Ordenar Goleadores (por Goles)
    goleadores.sort((a, b) => b.goles - a.goles);

    const goleadoresBody = document.querySelector('#tabla-goleadores tbody');
    goleadoresBody.innerHTML = '';
    goleadores.slice(0, 5).forEach(player => { // Mostrar solo 5
        const row = goleadoresBody.insertRow();
        row.innerHTML = `<td>${player.jugador}</td><td>${player.equipo.toUpperCase()}</td><td>${player.goles}</td>`;
    });

    // Ordenar Asistidores (por Asistencias)
    asistidores.sort((a, b) => b.asistencias - a.asistencias);

    const asistidoresBody = document.querySelector('#tabla-asistidores tbody');
    asistidoresBody.innerHTML = '';
    asistidores.slice(0, 5).forEach(player => { // Mostrar solo 5
        const row = asistidoresBody.insertRow();
        row.innerHTML = `<td>${player.jugador}</td><td>${player.equipo.toUpperCase()}</td><td>${player.asistencias}</td>`;
    });
}


// ===================================
// LÓGICA DE FECHAS INTERACTIVA (Público)
// ===================================

let currentFecha = 0;

function renderFecha(fechaIndex) {
    const fechaData = fixture[fechaIndex];
    const container = document.getElementById('partidos-container');
    const title = document.getElementById('fecha-titulo');

    if (!fechaData) {
        container.innerHTML = `<p style="text-align:center; color: var(--color-primary);">No hay datos para esta fecha.</p>`;
        title.textContent = `FECHA DESCONOCIDA`;
        return;
    }

    title.textContent = `FECHA ${fechaIndex + 1}`;
    container.innerHTML = '';

    fechaData.forEach(match => {
        const matchDiv = document.createElement('div');
        matchDiv.classList.add('match');
        const resultado = `${match.scoreLocal} - ${match.scoreVisitante}`;

        matchDiv.innerHTML = `
            <span>${match.local.toUpperCase()}</span>
            <span class="match-score">${resultado}</span>
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
// LÓGICA DE INTERFAZ (Tabs y Modals)
// ===================================

function showSection(id) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Eventos de botones del Header
document.getElementById('redes-btn').addEventListener('click', () => {
    openModal('redes-modal');
});

document.getElementById('admin-btn').addEventListener('click', () => {
    // Limpiar campos antes de abrir
    document.getElementById('admin-password').value = '';
    document.getElementById('password-message').textContent = '';
    openModal('admin-login-modal');
});

// Cerrar modales al hacer click fuera
window.onclick = function(event) {
    if (event.target.id === 'redes-modal' || event.target.id === 'admin-login-modal') {
        event.target.style.display = "none";
    }
}


// ===================================
// LÓGICA DE ADMIN (Funciones Críticas)
// ===================================

const ADMIN_PASSWORD = "ligajrs";

function checkAdminPassword() {
    const passwordInput = document.getElementById('admin-password').value;
    const message = document.getElementById('password-message');

    if (passwordInput === ADMIN_PASSWORD) {
        closeModal('admin-login-modal');
        showSection('admin');
        message.textContent = '';
        initAdminPanel();
    } else {
        message.textContent = "Contraseña incorrecta. Inténtalo de nuevo.";
    }
}

function initAdminPanel() {
    // 1. Llenar el selector de Fechas
    const selectFecha = document.getElementById('select-fecha');
    selectFecha.innerHTML = '';
    fixture.forEach((_, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `FECHA ${index + 1}`;
        selectFecha.appendChild(option);
    });
    selectFecha.onchange = () => renderAdminMatches(parseInt(selectFecha.value));

    // 2. Llenar el selector de Jugadores
    const selectJugador = document.getElementById('select-jugador');
    selectJugador.innerHTML = '<option value="">Selecciona un jugador</option>';
    
    // Combinar jugadores de goleadores y asistidores para evitar duplicados
    const allPlayers = {};
    [...goleadores, ...asistidores].forEach(p => {
        allPlayers[p.jugador] = { ...p };
    });

    Object.values(allPlayers).sort((a, b) => a.jugador.localeCompare(b.jugador)).forEach(player => {
        const option = document.createElement('option');
        option.value = player.jugador;
        option.textContent = `${player.jugador.toUpperCase()} (${player.equipo.toUpperCase()})`;
        selectJugador.appendChild(option);
    });
    
    selectJugador.onchange = loadPlayerStats;

    // Cargar la primera fecha por defecto
    if (fixture.length > 0) {
        renderAdminMatches(0);
    }
}

function renderAdminMatches(fechaIndex) {
    const partidosContainer = document.getElementById('admin-partidos');
    partidosContainer.innerHTML = '';
    const fechaData = fixture[fechaIndex];

    if (!fechaData) return;

    fechaData.forEach((match, matchIndex) => {
        const matchDiv = document.createElement('div');
        matchDiv.classList.add('admin-match-edit');

        matchDiv.innerHTML = `
            <span>${match.local.toUpperCase()}</span>
            <div>
                <input type="number" min="0" value="${match.scoreLocal}" data-team="${match.local}" data-match-index="${matchIndex}" data-type="local" onchange="updateMatchScore(${fechaIndex}, ${matchIndex}, this.value, 'local')">
                -
                <input type="number" min="0" value="${match.scoreVisitante}" data-team="${match.visitante}" data-match-index="${matchIndex}" data-type="visitante" onchange="updateMatchScore(${fechaIndex}, ${matchIndex}, this.value, 'visitante')">
            </div>
            <span>${match.visitante.toUpperCase()}</span>
        `;
        partidosContainer.appendChild(matchDiv);
    });
}

function updateMatchScore(fechaIndex, matchIndex, score, type) {
    const newScore = parseInt(score);
    if (isNaN(newScore) || newScore < 0) return;

    if (type === 'local') {
        fixture[fechaIndex][matchIndex].scoreLocal = newScore;
    } else {
        fixture[fechaIndex][matchIndex].scoreVisitante = newScore;
    }
}

function loadPlayerStats() {
    const selectedPlayer = document.getElementById('select-jugador').value;
    const inputGoles = document.getElementById('input-goles');
    const inputAsistencias = document.getElementById('input-asistencias');

    if (!selectedPlayer) {
        inputGoles.value = '';
        inputAsistencias.value = '';
        return;
    }

    // Buscar y cargar goles
    const golData = goleadores.find(p => p.jugador === selectedPlayer);
    inputGoles.value = golData ? golData.goles : 0;

    // Buscar y cargar asistencias
    const asistData = asistidores.find(p => p.jugador === selectedPlayer);
    inputAsistencias.value = asistData ? asistData.asistencias : 0;
}

function savePlayerStats() {
    const selectedPlayer = document.getElementById('select-jugador').value;
    const inputGoles = parseInt(document.getElementById('input-goles').value) || 0;
    const inputAsistencias = parseInt(document.getElementById('input-asistencias').value) || 0;
    const message = document.getElementById('stats-message');

    if (!selectedPlayer) {
        message.textContent = "Selecciona un jugador primero.";
        return;
    }

    // 1. Actualizar Goleadores
    let golIndex = goleadores.findIndex(p => p.jugador === selectedPlayer);
    if (golIndex !== -1) {
        goleadores[golIndex].goles = inputGoles;
    }
    // 2. Actualizar Asistidores
    let asistIndex = asistidores.findIndex(p => p.jugador === selectedPlayer);
    if (asistIndex !== -1) {
        asistidores[asistIndex].asistencias = inputAsistencias;
    }

    message.textContent = `Estadísticas de ${selectedPlayer.toUpperCase()} guardadas localmente. Presiona "GUARDAR TODO" para actualizar la web.`;
}

// ----------------------------------------------------
// LÓGICA DE RECALCULAR TODAS LAS ESTADÍSTICAS
// Esta es la función clave que actualiza la web pública
// ----------------------------------------------------
function recalculateLeagueStats() {
    // Reiniciar estadísticas de equipos
    teams.forEach(team => {
        leagueStats[team] = { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 };
    });

    // Recorrer el fixture y calcular
    fixture.forEach(fecha => {
        fecha.forEach(match => {
            const local = leagueStats[match.local];
            const visitante = leagueStats[match.visitante];
            const scoreL = match.scoreLocal;
            const scoreV = match.scoreVisitante;

            // Actualizar PJ
            local.PJ++;
            visitante.PJ++;

            // Actualizar Goles
            local.GF += scoreL;
            local.GC += scoreV;
            visitante.GF += scoreV;
            visitante.GC += scoreL;

            // Actualizar PG/PE/PP
            if (scoreL > scoreV) {
                local.PG++;
                visitante.PP++;
            } else if (scoreL < scoreV) {
                local.PP++;
                visitante.PG++;
            } else {
                local.PE++;
                visitante.PE++;
            }
        });
    });
}

function saveAllAndRerender() {
    // 1. Recalcular todas las estadísticas de la liga a partir del fixture
    recalculateLeagueStats();

    // 2. Ejecutar las funciones de renderizado
    calculateStats();
    sortTable();
    renderTable();
    sortAndRenderLeaders();
    renderFecha(currentFecha); // Renderiza la fecha actual

    // 3. Notificación
    alert("¡Estadísticas actualizadas con éxito! Los cambios ya son visibles en la sección LIGA.");
}

// ===================================
// INICIALIZACIÓN (Al cargar la página)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Recalcular stats con los datos iniciales y luego renderizar
    recalculateLeagueStats();
    calculateStats();
    sortTable();
    renderTable();

    // Ordenar y mostrar goleadores y asistidores
    sortAndRenderLeaders();

    // Mostrar la primera fecha del calendario
    renderFecha(currentFecha);

    // Asegurar que la sección 'Inicio' esté activa al cargar
    showSection('inicio');
});

// Hacemos las funciones globales para que los botones 'onclick' en el HTML funcionen
window.showSection = showSection;
window.closeModal = closeModal;
window.nextFecha = nextFecha;
window.prevFecha = prevFecha;
window.checkAdminPassword = checkAdminPassword;
window.savePlayerStats = savePlayerStats;
window.saveAllAndRerender = saveAllAndRerender;
window.updateMatchScore = updateMatchScore;
