// ===================================
// DATOS DE LA LIGA ⚽ (CON DETALLES Y JUGADORES)
// DATOS RESETEADOS A CERO
// ===================================

const teams = [
    "valunir", "banfield", "bristol", "joga bonito", "white phanter kings",
    "laira", "el rejunte de amigos", "loan", "machetitos",
    "cornudos", "wanderers", "mamas fc"
];

// Datos iniciales de la tabla (TODOS EN CERO)
let leagueStats = {
    "valunir":              { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 },
    "banfield":             { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 },
    "bristol":              { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 },
    "joga bonito":          { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 },
    "white phanter kings":  { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 },
    "laira":                { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 },
    "el rejunte de amigos": { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 },
    "loan":                 { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 },
    "machetitos":           { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 },
    "cornudos":             { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 },
    "wanderers":            { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 },
    "mamas fc":             { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 }
};

// Datos para goleadores y asistidores (TODOS EN CERO)
let goleadores = [
    { jugador: "Jugador A", equipo: "valunir", goles: 0 },
    { jugador: "Jugador B", equipo: "banfield", goles: 0 },
    { jugador: "Jugador C", equipo: "bristol", goles: 0 },
    { jugador: "Jugador D", equipo: "joga bonito", goles: 0 },
    { jugador: "Jugador E", equipo: "valunir", goles: 0 },
    // Jugadores iniciales para editar stats
    { jugador: "Jugador X", equipo: "loan", goles: 0 },
    { jugador: "Jugador Y", equipo: "mamas fc", goles: 0 },
];

let asistidores = [
    { jugador: "Jugador X", equipo: "loan", asistencias: 0 },
    { jugador: "Jugador Y", equipo: "mamas fc", asistencias: 0 },
    { jugador: "Jugador Z", equipo: "bristol", asistencias: 0 },
    { jugador: "Jugador WE", equipo: "valunir", asistencias: 0 },
    { jugador: "Jugador F", equipo: "banfield", asistencias: 0 },
];

// === NUEVA ESTRUCTURA DE DETALLES DE EQUIPO ===
const teamDetails = {
    "valunir": {
        descripcion: "Equipo campeón de la temporada pasada, conocido por su juego ofensivo y rápido. Es el gran favorito.",
        dt: "Juan Pérez",
        capitan: "Jugador A (Goleador)",
        jugadores: [
            { nombre: "Jugador A", rol: "Delantero (C)" },
            { nombre: "Jugador E", rol: "Mediocampista" },
            { nombre: "Técnico Suplente", rol: "Cuerpo Técnico" }
        ],
    },
    "banfield": {
        descripcion: "Un equipo tradicionalmente fuerte que busca el campeonato este año, con una defensa sólida.",
        dt: "Carlos López",
        capitan: "Jugador B",
        jugadores: [
            { nombre: "Jugador B", rol: "Delantero" },
            { nombre: "Jugador F", rol: "Defensa" }
        ]
    },
    "bristol": {
        descripcion: "La revelación del torneo. Bristol ha demostrado ser difícil de vencer.",
        dt: "María Rodríguez",
        capitan: "Jugador C",
        jugadores: [
            { nombre: "Jugador C", rol: "Delantero" },
            { nombre: "Jugador Z", rol: "Volante" }
        ]
    },
    "joga bonito": {
        descripcion: "Fieles a su nombre, buscan el juego bonito aunque les falte algo de consistencia.",
        dt: "Leo Martínez",
        capitan: "Jugador D",
        jugadores: [
            { nombre: "Jugador D", rol: "Volante Creativo" }
        ]
    },
    "white phanter kings": {
        descripcion: "Un equipo con mucha garra, siempre dan pelea hasta el último minuto.",
        dt: "Anónimo",
        capitan: "Capitán WP",
        jugadores: [
            { nombre: "Jugador Fantasma", rol: "Defensa" }
        ]
    },
    "laira": {
        descripcion: "El equipo del empate. Difícil de meterles goles.",
        dt: "DT Laira",
        capitan: "Capitán Laira",
        jugadores: []
    },
    "el rejunte de amigos": {
        descripcion: "Literalmente, el rejunte. Juegan por amor a la camiseta y la amistad.",
        dt: "No Aplica",
        capitan: "Capitán Rejunte",
        jugadores: []
    },
    "loan": {
        descripcion: "Equipo con potencial, pero le cuesta cerrar los partidos. Necesitan más puntería.",
        dt: "DT Loan",
        capitan: "Jugador X",
        jugadores: [
            { nombre: "Jugador X", rol: "Defensa" }
        ]
    },
    "machetitos": {
        descripcion: "Un equipo duro en el medio campo, no apto para sensibles.",
        dt: "DT Machetitos",
        capitan: "Capitán Machetitos",
        jugadores: []
    },
    "cornudos": {
        descripcion: "Les falta gol, pero su defensa está empezando a rendir.",
        dt: "DT Cornudos",
        capitan: "Capitán Cornudos",
        jugadores: []
    },
    "wanderers": {
        descripcion: "Tienen muchos empates, deben empezar a ganar para subir en la tabla.",
        dt: "DT Wanderers",
        capitan: "Capitán Wanderers",
        jugadores: []
    },
    "mamas fc": {
        descripcion: "El equipo menos goleador. Tienen que mejorar la ofensiva.",
        dt: "DT Mamas FC",
        capitan: "Jugador Y",
        jugadores: [
            { nombre: "Jugador Y", rol: "Volante" }
        ]
    }
    // Asegúrate de completar los demás equipos!
};

// Calendario de partidos por fecha (Con scores en 0 para iniciar y espacio para stats)
let fixture = [
    // FECHA 1
    [
        { local: "valunir", visitante: "banfield", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "bristol", visitante: "joga bonito", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "white phanter kings", visitante: "laira", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "el rejunte de amigos", visitante: "loan", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "cornudos", visitante: "wanderers", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "mamas fc", visitante: "valunir", scoreLocal: 0, scoreVisitante: 0, stats: [] }
    ],
    // FECHA 2
    [
        { local: "loan", visitante: "mamas fc", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "machetitos", visitante: "el rejunte de amigos", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "laira", visitante: "cornudos", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "joga bonito", visitante: "white phanter kings", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "banfield", visitante: "bristol", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "valunir", visitante: "loan", scoreLocal: 0, scoreVisitante: 0, stats: [] }
    ],
    // FECHA 3
    [
        { local: "bristol", visitante: "valunir", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "white phanter kings", visitante: "banfield", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "cornudos", visitante: "joga bonito", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "el rejunte de amigos", visitante: "laira", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "machetitos", visitante: "mamas fc", scoreLocal: 0, scoreVisitante: 0, stats: [] },
        { local: "wanderers", visitante: "valunir", scoreLocal: 0, scoreVisitante: 0, stats: [] }
    ]
];

// Variables temporales para el modal de stats
let currentMatchIndex = -1;
let currentFechaIndex = -1;

// ===================================
// LÓGICA DE TABLA DE POSICIONES
// ===================================

let leagueTable = [];

function calculateStats() {
    // Calcula Puntos y DG
    leagueTable = teams.map(teamName => {
        const stats = leagueStats[teamName];
        // Verifica si el equipo existe en leagueStats
        if (!stats) return null; 

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
    }).filter(team => team !== null); // Elimina equipos nulos por si acaso
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
        
        // === Agregar el link para abrir el perfil del equipo ===
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><a href="#" class="team-link" onclick="openTeamProfile('${team.nombre}')">${team.nombre}</a></td>
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
// LÓGICA DE PERFIL DE EQUIPO (PÚBLICO)
// ===================================

function openTeamProfile(teamName) {
    const teamKey = teamName.toLowerCase();
    const details = teamDetails[teamKey]; // Busca los datos

    if (!details) {
        alert(`No hay detalles disponibles para ${teamName}.`);
        return;
    }

    const modalTitle = document.getElementById('team-profile-title');
    const modalContent = document.getElementById('team-profile-content');
    
    // Genera la lista de jugadores
    const playersListHtml = details.jugadores.map(p => 
        `<li>${p.nombre} - <span>${p.rol}</span></li>`
    ).join('');

    let htmlContent = `
        <div class="profile-section">
            <h2>DESCRIPCIÓN</h2>
            <p>${details.descripcion}</p>
        </div>
        <div class="profile-section">
            <h2>CUERPO TÉCNICO</h2>
            <p><strong>DT:</strong> ${details.dt}</p>
            <p><strong>CAPITÁN:</strong> ${details.capitan}</p>
        </div>
        <div class="profile-section">
            <h2>JUGADORES Y STAFF (${details.jugadores.length})</h2>
            <ul class="player-list">
                ${playersListHtml}
            </ul>
        </div>
    `;

    modalTitle.textContent = teamName;
    modalContent.innerHTML = htmlContent;
    openModal('team-profile-modal');
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

    if (!container) {
        console.error("Error: Elemento 'partidos-container' no encontrado.");
        return;
    }

    if (!fechaData) {
        container.innerHTML = `<p style="text-align:center; color: var(--color-primary-red);">No hay datos para esta fecha.</p>`;
        title.textContent = `FECHA DESCONOCIDA`;
        return;
    }

    title.textContent = `FECHA ${fechaIndex + 1}`;
    container.innerHTML = '';

    fechaData.forEach(match => {
        // Muestra '-' si el score es 0, si no, muestra el score
        const scoreLocalDisplay = match.scoreLocal === 0 ? '-' : match.scoreLocal;
        const scoreVisitanteDisplay = match.scoreVisitante === 0 ? '-' : match.scoreVisitante;
        const resultado = `${scoreLocalDisplay} - ${scoreVisitanteDisplay}`;

        const matchDiv = document.createElement('div');
        matchDiv.classList.add('match');

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
    if (event.target.id === 'redes-modal' || event.target.id === 'admin-login-modal' || event.target.id === 'team-profile-modal' || event.target.id === 'match-stats-modal') {
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
    
    // Crear una lista única y combinada de jugadores
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

    // 3. Llenar el NUEVO selector de Equipos para añadir jugador
    const selectNewEquipo = document.getElementById('select-new-equipo');
    selectNewEquipo.innerHTML = '<option value="">-- Selecciona equipo --</option>';
    teams.forEach(teamName => {
        const option = document.createElement('option');
        option.value = teamName;
        option.textContent = teamName.toUpperCase();
        selectNewEquipo.appendChild(option);
    });

    // Cargar la primera fecha por defecto
    if (fixture.length > 0) {
        renderAdminMatches(0);
    }
}

// === NUEVA LÓGICA PARA AÑADIR JUGADORES/STAFF ===
function addNewPlayer() {
    const playerName = document.getElementById('input-new-jugador').value.trim();
    const playerTeam = document.getElementById('select-new-equipo').value.trim();
    const playerRol = document.getElementById('input-new-rol').value.trim() || 'Jugador';
    const message = document.getElementById('new-player-message');

    if (!playerName || !playerTeam) {
        message.textContent = "¡Error! Ingresa nombre y selecciona equipo.";
        return;
    }
    
    const playerKey = playerName.toLowerCase();
    
    // 1. Validar que el jugador no exista ya en los detalles del equipo
    const team = teamDetails[playerTeam];
    if (team) {
        let playerExistsInDetails = team.jugadores.some(p => p.nombre.toLowerCase() === playerKey);
        if (playerExistsInDetails) {
            message.textContent = `¡Error! ${playerName.toUpperCase()} ya está listado en ${playerTeam.toUpperCase()}.`;
            return;
        }
        // Agregar a la lista de detalles del equipo (Cuerpo Técnico/Jugador)
        team.jugadores.push({ nombre: playerName, rol: playerRol });
    }

    // 2. Agregar a las listas de Goleadores/Asistidores (solo si es un Jugador y no staff)
    if (playerRol.toLowerCase().includes('jugador') || playerRol.toLowerCase().includes('delantero') || playerRol.toLowerCase().includes('defensa') || playerRol.toLowerCase().includes('volante') || playerRol.toLowerCase().includes('arquero')) {
         // Solo añade si no existe aún para evitar duplicados en la lista de stats
        let existsInGoleadores = goleadores.some(p => p.jugador.toLowerCase() === playerKey);
        if (!existsInGoleadores) {
            goleadores.push({ jugador: playerName, equipo: playerTeam, goles: 0 });
            asistidores.push({ jugador: playerName, equipo: playerTeam, asistencias: 0 });
        }
    }
    
    // 3. Limpiar campos y actualizar
    document.getElementById('input-new-jugador').value = '';
    document.getElementById('select-new-equipo').value = '';
    document.getElementById('input-new-rol').value = '';
    message.textContent = `${playerName.toUpperCase()} agregado a ${playerTeam.toUpperCase()}.`;
    
    // Refrescar el selector principal de edición de stats
    initAdminPanel(); 
}


function renderAdminMatches(fechaIndex) {
    const partidosContainer = document.getElementById('admin-partidos');
    partidosContainer.innerHTML = '';
    const fechaData = fixture[fechaIndex];

    if (!fechaData) return;

    fechaData.forEach((match, matchIndex) => {
        const matchDiv = document.createElement('div');
        matchDiv.classList.add('admin-match-edit');

        // Función onchange que llama al modal de stats
        const onChangeAction = `updateMatchScoreAndOpenStats(${fechaIndex}, ${matchIndex}, this.value, 'local')`;

        matchDiv.innerHTML = `
            <span>${match.local.toUpperCase()}</span>
            <div>
                <input type="number" min="0" value="${match.scoreLocal}" data-team="${match.local}" data-match-index="${matchIndex}" data-type="local" onchange="${onChangeAction}">
                -
                <input type="number" min="0" value="${match.scoreVisitante}" data-team="${match.visitante
