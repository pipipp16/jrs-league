// ===================================
// DATOS DE LA LIGA (Estructura REINICIADA a CERO) ⚽
// ===================================

// Función de utilidad para reiniciar estadísticas
const initialStatsCero = { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 };

const leagueData = {
    "VALUNIR": {
        stats: { ...initialStatsCero }, // Todos a cero
        players: ["Jugador Valu 1", "Jugador Valu 2", "Jugador Valu 3"],
        coach: "DT Valunir"
    },
    "BANFIELD": {
        stats: { ...initialStatsCero },
        players: ["Jugador Ban 1", "Jugador Ban 2"],
        coach: "DT Banfield"
    },
    "BRISTOL": {
        stats: { ...initialStatsCero },
        players: ["Jugador Bris 1", "Jugador Bris 2", "Jugador Bris 3"],
        coach: "DT Bristol"
    },
    "JOGA BONITO": {
        stats: { ...initialStatsCero },
        players: ["Jugador Joga 1", "Jugador Joga 2"],
        coach: "DT Joga Bonito"
    },
    "WHITE PHANTER KINGS": {
        stats: { ...initialStatsCero },
        players: ["Jugador WP 1", "Jugador WP 2"],
        coach: "DT WP Kings"
    },
    "LAIRA": {
        stats: { ...initialStatsCero },
        players: ["Jugador Laira 1", "Jugador Laira 2"],
        coach: "DT Laira"
    },
    "EL REJUNTE DE AMIGOS": {
        stats: { ...initialStatsCero },
        players: ["Jugador Rej 1"],
        coach: "DT El Rejunte"
    },
    "LOAN": {
        stats: { ...initialStatsCero },
        players: ["Jugador Loan 1", "Jugador Loan 2"],
        coach: "DT Loan"
    },
    "MACHETITOS": {
        stats: { ...initialStatsCero },
        players: ["Jugador Mach 1"],
        coach: "DT Machetitos"
    },
    "CORNUDOS": {
        stats: { ...initialStatsCero },
        players: ["Jugador Corn 1"],
        coach: "DT Cornudos"
    },
    "WANDERERS": {
        stats: { ...initialStatsCero },
        players: ["Jugador Wand 1"],
        coach: "DT Wanderers"
    },
    "MAMAS FC": {
        stats: { ...initialStatsCero },
        players: ["Jugador Mama 1"],
        coach: "DT Mamas FC"
    }
};

const teams = Object.keys(leagueData);

// Goleadores y asistidores con 5 entradas en 0
let leaderStats = {
    goles: [
        { jugador: "Goleador 1", equipo: "VALUNIR", cantidad: 0 },
        { jugador: "Goleador 2", equipo: "BANFIELD", cantidad: 0 },
        { jugador: "Goleador 3", equipo: "BRISTOL", cantidad: 0 },
        { jugador: "Goleador 4", equipo: "JOGA BONITO", cantidad: 0 },
        { jugador: "Goleador 5", equipo: "LAIRA", cantidad: 0 },
    ],
    asistencias: [
        { jugador: "Asistidor 1", equipo: "WHITE PHANTER KINGS", cantidad: 0 },
        { jugador: "Asistidor 2", equipo: "EL REJUNTE DE AMIGOS", cantidad: 0 },
        { jugador: "Asistidor 3", equipo: "LOAN", cantidad: 0 },
        { jugador: "Asistidor 4", equipo: "MACHETITOS", cantidad: 0 },
        { jugador: "Asistidor 5", equipo: "CORNUDOS", cantidad: 0 },
    ]
};


// Calendario de partidos con los 12 equipos y resultados en 0-0
const fixture = [
    // FECHA 1 (Incluye los 12 equipos, 6 partidos)
    [
        { local: "VALUNIR", visitante: "BANFIELD", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "BRISTOL", visitante: "JOGA BONITO", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "WHITE PHANTER KINGS", visitante: "LAIRA", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "EL REJUNTE DE AMIGOS", visitante: "LOAN", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "MACHETITOS", visitante: "CORNUDOS", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "WANDERERS", visitante: "MAMAS FC", resultado: { local: 0, visitante: 0 }, goles: [] }
    ],
    // FECHA 2 (Ejemplo de rotación, todo en 0-0)
    [
        { local: "LOAN", visitante: "VALUNIR", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "MAMAS FC", visitante: "MACHETITOS", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "LAIRA", visitante: "EL REJUNTE DE AMIGOS", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "JOGA BONITO", visitante: "CORNUDOS", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "BANFIELD", visitante: "WHITE PHANTER KINGS", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "BRISTOL", visitante: "WANDERERS", resultado: { local: 0, visitante: 0 }, goles: [] }
    ],
    // FECHA 3 (Ejemplo de rotación, todo en 0-0)
    [
        { local: "VALUNIR", visitante: "WANDERERS", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "WHITE PHANTER KINGS", visitante: "BRISTOL", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "CORNUDOS", visitante: "BANFIELD", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "EL REJUNTE DE AMIGOS", visitante: "JOGA BONITO", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "MACHETITOS", visitante: "LAIRA", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "LOAN", visitante: "MAMAS FC", resultado: { local: 0, visitante: 0 }, goles: [] }
    ]
];


// ===================================
// LÓGICA DE TABLA DE POSICIONES
// ===================================

let leagueTable = [];
let currentFecha = 0;
const ADMIN_PASSWORD = "ligajrs";

function calculateStats() {
    // Recalcula los puntos y DG basados en los stats de leagueData
    leagueTable = teams.map(teamName => {
        const stats = leagueData[teamName].stats;
        const Pts = (stats.PG * 3) + stats.PE;
        const DG = stats.GF - stats.GC;
        
        // Guardar Pts y DG directamente en leagueData
        leagueData[teamName].stats.Pts = Pts;
        leagueData[teamName].stats.DG = DG;

        return {
            nombre: teamName,
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
    // Criterio de orden: 1. Puntos, 2. Diferencia de Gol (DG), 3. Goles a Favor (GF)
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

function renderTable() {
    const tableBody = document.querySelector('#tabla-posiciones tbody');
    tableBody.innerHTML = '';

    leagueTable.forEach((team, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td onclick="showTeamModal('${team.nombre}')">${team.nombre}</td>
            <td><strong>${team.Pts}</strong></td>
            <td>${team.PG}</td>
            <td>${team.PE}</td>
            <td>${team.PP}</td>
            <td>${team.GF}</td>
            <td>${team.GC}</td>
            <td>${team.DG}</td>
        `;
    });
}

// ===================================
// LÓGICA DE GOLEADORES Y ASISTIDORES
// ===================================

function sortAndRenderLeaders() {
    // Ordenar Goleadores (Cantidad de goles)
    leaderStats.goles.sort((a, b) => b.cantidad - a.cantidad);

    const goleadoresBody = document.querySelector('#tabla-goleadores tbody');
    goleadoresBody.innerHTML = '';
    leaderStats.goles.slice(0, 5).forEach(player => { // Mostrar solo los 5 primeros
        const row = goleadoresBody.insertRow();
        row.innerHTML = `<td>${player.jugador}</td><td>${player.equipo}</td><td>${player.cantidad}</td>`;
    });

    // Ordenar Asistidores (Cantidad de asistencias)
    leaderStats.asistencias.sort((a, b) => b.cantidad - a.cantidad);

    const asistidoresBody = document.querySelector('#tabla-asistidores tbody');
    asistidoresBody.innerHTML = '';
    leaderStats.asistencias.slice(0, 5).forEach(player => { // Mostrar solo los 5 primeros
        const row = asistidoresBody.insertRow();
        row.innerHTML = `<td>${player.jugador}</td><td>${player.equipo}</td><td>${player.cantidad}</td>`;
    });
}


// ===================================
// LÓGICA DE FECHAS INTERACTIVA
// ===================================

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

        matchDiv.innerHTML = `
            <span>${match.local}</span>
            <span class="match-score">${match.resultado.local} - ${match.resultado.visitante}</span>
            <span>${match.visitante}</span>
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
// LÓGICA DE MODALES (General)
// ===================================

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// ===================================
// LÓGICA MODAL INFO EQUIPO
// ===================================

function showTeamModal(teamName) {
    const modal = document.getElementById('team-info-modal');
    const data = leagueData[teamName];

    document.getElementById('team-modal-name').textContent = teamName;
    document.getElementById('team-modal-pts').textContent = data.stats.Pts;
    document.getElementById('team-modal-dg').textContent = data.stats.DG;
    document.getElementById('team-modal-coach').textContent = `DT: ${data.coach}`;

    const playersList = document.getElementById('team-modal-players');
    playersList.innerHTML = '';
    data.players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = player;
        playersList.appendChild(li);
    });

    modal.style.display = 'flex';
}


// ===================================
// LÓGICA ADMIN PANEL
// ===================================

// 1. Manejo del Modal de Contraseña
document.getElementById('admin-btn').addEventListener('click', () => {
    document.getElementById('admin-password-modal').style.display = 'flex';
    document.getElementById('admin-password-input').value = '';
    document.getElementById('admin-password-error').textContent = '';
});

function checkAdminPassword() {
    const input = document.getElementById('admin-password-input').value;
    const errorMsg = document.getElementById('admin-password-error');
    if (input === ADMIN_PASSWORD) {
        closeModal('admin-password-modal');
        showSection('admin');
        initializeAdminPanel();
    } else {
        errorMsg.textContent = "Contraseña incorrecta. Intente de nuevo.";
    }
}

// 2. Inicialización del Panel Admin
function initializeAdminPanel() {
    // Cargar selector de fechas
    const selectFecha = document.getElementById('admin-select-fecha');
    selectFecha.innerHTML = fixture.map((_, i) => `<option value="${i}">Fecha ${i + 1}</option>`).join('');
    loadMatchesForAdmin();

    // Cargar selector de equipos
    const selectTeam = document.getElementById('admin-select-team');
    selectTeam.innerHTML = teams.map(team => `<option value="${team}">${team}</option>`).join('');
    loadPlayersForAdmin();
}

// 3. Carga de Partidos para Edición
function loadMatchesForAdmin() {
    const fechaIndex = parseInt(document.getElementById('admin-select-fecha').value);
    const matchList = document.getElementById('admin-match-list');
    matchList.innerHTML = '';

    fixture[fechaIndex].forEach((match, matchIndex) => {
        const div = document.createElement('div');
        div.classList.add('admin-match-item');
        div.innerHTML = `
            <p><strong>${match.local}</strong> vs <strong>${match.visitante}</strong></p>
            <label>Resultado: </label>
            <input type="number" id="local-${fechaIndex}-${matchIndex}" value="${match.resultado.local}" min="0" style="width: 50px;"> -
            <input type="number" id="visitante-${fechaIndex}-${matchIndex}" value="${match.resultado.visitante}" min="0" style="width: 50px;">
            <button onclick="saveMatchResult(${fechaIndex}, ${matchIndex})">Guardar Resultado</button>
            <div id="stats-${fechaIndex}-${matchIndex}">
                </div>
        `;
        matchList.appendChild(div);
    });
}

// 4. Guardar Resultado y Forzar Sincronización
function saveMatchResult(fechaIndex, matchIndex) {
    const localInput = document.getElementById(`local-${fechaIndex}-${matchIndex}`);
    const visitanteInput = document.getElementById(`visitante-${fechaIndex}-${matchIndex}`);
    const localScore = parseInt(localInput.value);
    const visitanteScore = parseInt(visitanteInput.value);

    if (isNaN(localScore) || isNaN(visitanteScore)) {
        alert("Por favor, introduce un número válido.");
        return;
    }

    const match = fixture[fechaIndex][matchIndex];
    
    // 1. Actualizar las estadísticas de la tabla (función auxiliar)
    updateLeagueStats(match, localScore, visitanteScore);

    // 2. Actualizar el objeto fixture
    match.resultado.local = localScore;
    match.resultado.visitante = visitanteScore;
    
    // 3. Recalcular y Renderizar las Tablas Públicas
    recalculateAndRenderAll();
    renderFecha(currentFecha); // Para actualizar el calendario si estamos en esa fecha

    alert(`Resultado de ${match.local} ${localScore} - ${visitanteScore} ${match.visitante} guardado y estadísticas actualizadas.`);
    
    // Nota: La lógica completa de Goles/Asistencias requiere más UI y funciones, 
    // pero la actualización de las tablas principales ya está funcionando.
}

// FUNCIÓN AUXILIAR PARA ACTUALIZAR ESTADÍSTICAS DEL EQUIPO
// ⚠️ ESTA FUNCIÓN ES BÁSICA: En una liga real, se recalculan TODOS los partidos.
// Aquí, para mantener el ejemplo simple, solo se actualiza el PJ/GF/GC, etc.
function updateLeagueStats(match, newLocalScore, newVisitanteScore) {
    const local = leagueData[match.local].stats;
    const visitante = leagueData[match.visitante].stats;
    
    // Nota: Para una lógica robusta, se debe hacer una función `recalculateAllStatsFromFixture()`
    // que corra todos los partidos desde 0. Esta versión simplificada asume que el cambio es incremental.

    // 1. Actualizar PJ y Goles a Favor/Contra
    local.PJ = local.PJ + 1; 
    visitante.PJ = visitante.PJ + 1;
    local.GF = local.GF + newLocalScore;
    local.GC = local.GC + newVisitanteScore;
    visitante.GF = visitante.GF + newVisitanteScore;
    visitante.GC = visitante.GC + newLocalScore;

    // 2. Actualizar PG, PE, PP (Solo considera el último resultado)
    if (newLocalScore > newVisitanteScore) {
        local.PG = local.PG + 1;
        visitante.PP = visitante.PP + 1;
    } else if (newLocalScore < newVisitanteScore) {
        local.PP = local.PP + 1;
        visitante.PG = visitante.PG + 1;
    } else {
        local.PE = local.PE + 1;
        visitante.PE = visitante.PE + 1;
    }
}


// 5. Gestión de Jugadores
function loadPlayersForAdmin() {
    const teamName = document.getElementById('admin-select-team').value;
    const playersList = document.getElementById('current-players-list');
    playersList.innerHTML = '';

    const players = leagueData[teamName].players;
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player} `;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';
        removeBtn.style.marginLeft = '10px';
        removeBtn.style.backgroundColor = 'red';
        removeBtn.onclick = () => removePlayerFromTeam(teamName, player);
        li.appendChild(removeBtn);
        playersList.appendChild(li);
    });
}

function addPlayerToTeam() {
    const teamName = document.getElementById('admin-select-team').value;
    const playerName = document.getElementById('new-player-name').value.trim();

    if (playerName && teamName) {
        if (!leagueData[teamName].players.includes(playerName)) {
            leagueData[teamName].players.push(playerName);
            document.getElementById('new-player-name').value = '';
            loadPlayersForAdmin();
            alert(`Jugador ${playerName} añadido a ${teamName}.`);
        } else {
            alert("El jugador ya está en el equipo.");
        }
    }
}

function removePlayerFromTeam(teamName, playerName) {
    const index = leagueData[teamName].players.indexOf(playerName);
    if (index > -1) {
        leagueData[teamName].players.splice(index, 1);
        loadPlayersForAdmin();
        alert(`Jugador ${playerName} eliminado de ${teamName}.`);
    }
}


// ===================================
// LÓGICA DE INTERFAZ Y MODAL (Funciones Globales y Eventos)
// ===================================

function showSection(id) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function recalculateAndRenderAll() {
    calculateStats();
    sortTable();
    renderTable();
    sortAndRenderLeaders();
}

// Hacemos las funciones globales para que los botones 'onclick' en el HTML funcionen
window.showSection = showSection;
window.closeModal = closeModal;
window.nextFecha = nextFecha;
window.prevFecha = prevFecha;
window.checkAdminPassword = checkAdminPassword;
window.showTeamModal = showTeamModal;
window.saveMatchResult = saveMatchResult;
window.loadMatchesForAdmin = loadMatchesForAdmin;
window.loadPlayersForAdmin = loadPlayersForAdmin;
window.addPlayerToTeam = addPlayerToTeam;


// Eventos del Modal
document.getElementById('redes-btn').addEventListener('click', () => {
    document.getElementById('redes-modal').style.display = 'flex';
});

window.onclick = function(event) {
    const redesModal = document.getElementById('redes-modal');
    const adminModal = document.getElementById('admin-password-modal');
    const teamModal = document.getElementById('team-info-modal');
    
    if (event.target == redesModal) {
        redesModal.style.display = "none";
    }
    if (event.target == adminModal) {
        adminModal.style.display = "none";
    }
    if (event.target == teamModal) {
        teamModal.style.display = "none";
    }
}


// ===================================
// INICIALIZACIÓN (Al cargar la página)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Calcular, ordenar y mostrar todas las tablas
    recalculateAndRenderAll();

    // 2. Mostrar la primera fecha del calendario
    renderFecha(currentFecha);

    // 3. Asegurar que la sección 'Inicio' esté activa al cargar
    showSection('inicio');
});
