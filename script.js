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
    // 1. Resetear estadísticas de la liga a cero antes de recalcular
    for (const teamName in leagueStats) {
        leagueStats[teamName] = { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, Pts: 0 };
    }
    
    // 2. Procesar el fixture
    fixture.forEach(fechaData => {
        fechaData.forEach(match => {
            if (match.scoreLocal !== null && match.scoreVisitante !== null) {
                const local = leagueStats[match.local];
                const visitante = leagueStats[match.visitante];

                if (local && visitante) {
                    local.PJ++;
                    visitante.PJ++;
                    local.GF += match.scoreLocal;
                    local.GC += match.scoreVisitante;
                    visitante.GF += match.scoreVisitante;
                    visitante.GC += match.scoreLocal;

                    if (match.scoreLocal > match.scoreVisitante) {
                        local.PG++;
                        visitante.PP++;
                    } else if (match.scoreLocal < match.scoreVisitante) {
                        visitante.PG++;
                        local.PP++;
                    } else {
                        local.PE++;
                        visitante.PE++;
                    }
                }
            }
        });
    });

    // 3. Calcular puntos y Diferencia de Gol (DG)
    leagueTable = teams.map(teamName => {
        const stats = leagueStats[teamName];
        if (!stats) return null; 

        const Pts = (stats.PG * 3) + stats.PE;
        const DG = stats.GF - stats.GC;

        return {
            nombre: teamName.toLowerCase(), // Usar minúsculas para el link (por si acaso)
            PJ: stats.PJ,
            PG: stats.PG,
            PE: stats.PE,
            PP: stats.PP,
            GF: stats.GF,
            GC: stats.GC,
            DG: DG,
            Pts: Pts
        };
    }).filter(team => team !== null);
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
    if (!tableBody) return;

    tableBody.innerHTML = '';

    leagueTable.forEach((team, index) => {
        const row = tableBody.insertRow();
        
        // === Agregar el link para abrir el perfil del equipo ===
        // Se pasa el nombre.toUpperCase() para la visualización, pero se usa .nombre para la función.
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><a href="#" class="team-link" onclick="openTeamProfile('${team.nombre}')">${team.nombre.toUpperCase()}</a></td>
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
        // CORRECCIÓN: Si no hay detalles, se cierra el modal (si estuviera abierto) y se alerta.
        closeModal('team-profile-modal'); 
        alert(`No hay detalles disponibles para ${teamName.toUpperCase()}.`);
        return;
    }

    const modalTitle = document.getElementById('team-profile-title');
    const modalContent = document.getElementById('team-profile-content');
    
    // Obtener stats de Goles y Asistencias
    const teamStats = leagueStats[teamKey];

    // Generar la lista de jugadores con sus stats (si existen en goleadores/asistidores)
    const playersListHtml = details.jugadores.map(p => {
        const playerKey = p.nombre;
        const goles = goleadores.find(g => g.jugador === playerKey)?.goles || 0;
        const asistencias = asistidores.find(a => a.jugador === playerKey)?.asistencias || 0;

        return `<li>${p.nombre} - <span>${p.rol} (G:${goles} | A:${asistencias})</span></li>`;
    }).join('');

    let htmlContent = `
        <div class="profile-section">
            <h2>RESUMEN DE TEMPORADA</h2>
            <p><strong>PJ:</strong> ${teamStats.PJ} | <strong>PG:</strong> ${teamStats.PG} | <strong>PE:</strong> ${teamStats.PE} | <strong>PP:</strong> ${teamStats.PP}</p>
            <p><strong>GF:</strong> ${teamStats.GF} | <strong>GC:</strong> ${teamStats.GC} | <strong>DG:</strong> ${teamStats.GF - teamStats.GC}</p>
        </div>
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

    modalTitle.textContent = teamName.toUpperCase();
    modalContent.innerHTML = htmlContent;
    openModal('team-profile-modal');
}


// ===================================
// LÓGICA DE GOLEADORES Y ASISTIDORES
// ===================================

function sortAndRenderLeaders() {
    const goleadoresBody = document.querySelector('#tabla-goleadores tbody');
    const asistidoresBody = document.querySelector('#tabla-asistidores tbody');

    if (!goleadoresBody || !asistidoresBody) return;

    // Ordenar Goleadores (por Goles)
    goleadores.sort((a, b) => b.goles - a.goles);
    goleadoresBody.innerHTML = '';
    goleadores.slice(0, 5).forEach(player => { // Mostrar solo 5
        const row = goleadoresBody.insertRow();
        row.innerHTML = `<td>${player.jugador}</td><td>${player.equipo.toUpperCase()}</td><td>${player.goles}</td>`;
    });

    // Ordenar Asistidores (por Asistencias)
    asistidores.sort((a, b) => b.asistencias - a.asistencias);
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

    if (!container || !title) return;

    if (!fechaData) {
        container.innerHTML = `<p style="text-align:center; color: var(--color-primary-red);">No hay datos para esta fecha.</p>`;
        title.textContent = `FECHA DESCONOCIDA`;
        return;
    }

    title.textContent = `FECHA ${fechaIndex + 1}`;
    container.innerHTML = '';

    fechaData.forEach(match => {
        // Muestra '-' si el score es 0, si no, muestra el score
        const scoreLocalDisplay = (match.scoreLocal !== null && match.scoreLocal > 0) ? match.scoreLocal : '-';
        const scoreVisitanteDisplay = (match.scoreVisitante !== null && match.scoreVisitante > 0) ? match.scoreVisitante : '-';
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
    const section = document.getElementById(id);
    if (section) {
        section.classList.add('active');
    }
}

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Eventos de botones del Header
document.getElementById('redes-btn').addEventListener('click', () => {
    openModal('redes-modal');
});

document.getElementById('admin-btn').addEventListener('click', () => {
    // Limpiar campos antes de abrir
    const passwordInput = document.getElementById('admin-password');
    const message = document.getElementById('password-message');
    if (passwordInput) passwordInput.value = '';
    if (message) message.textContent = '';
    openModal('admin-login-modal');
});

// Cerrar modales al hacer click fuera
window.onclick = function(event) {
    const modalIds = ['redes-modal', 'admin-login-modal', 'team-profile-modal', 'match-stats-modal'];
    modalIds.forEach(id => {
        const modal = document.getElementById(id);
        if (modal && event.target === modal) {
            modal.style.display = "none";
        }
    });
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

function loadPlayerStats() {
    const selectJugador = document.getElementById('select-jugador');
    const inputGoles = document.getElementById('input-goles');
    const inputAsistencias = document.getElementById('input-asistencias');
    const playerName = selectJugador.value;

    if (!playerName || !inputGoles || !inputAsistencias) return;

    // Buscar goles
    const g = goleadores.find(p => p.jugador === playerName);
    inputGoles.value = g ? g.goles : 0;

    // Buscar asistencias
    const a = asistidores.find(p => p.jugador === playerName);
    inputAsistencias.value = a ? a.asistencias : 0;
}

function savePlayerStats() {
    const selectJugador = document.getElementById('select-jugador');
    const inputGoles = document.getElementById('input-goles');
    const inputAsistencias = document.getElementById('input-asistencias');
    const message = document.getElementById('stats-message');

    const playerName = selectJugador.value;
    const newGoles = parseInt(inputGoles.value) || 0;
    const newAsistencias = parseInt(inputAsistencias.value) || 0;

    if (!playerName) {
        message.textContent = "Selecciona un jugador primero.";
        return;
    }

    // Actualizar goles
    let gIndex = goleadores.findIndex(p => p.jugador === playerName);
    if (gIndex !== -1) {
        goleadores[gIndex].goles = newGoles;
    } else {
        // En caso de que se añada un jugador que aún no estaba en la lista de goleadores
        const teamName = teamDetails[playerName.toLowerCase()]?.equipo || "N/A"; 
        goleadores.push({ jugador: playerName, equipo: teamName, goles: newGoles });
    }

    // Actualizar asistencias
    let aIndex = asistidores.findIndex(p => p.jugador === playerName);
    if (aIndex !== -1) {
        asistidores[aIndex].asistencias = newAsistencias;
    } else {
        const teamName = teamDetails[playerName.toLowerCase()]?.equipo || "N/A";
        asistidores.push({ jugador: playerName, equipo: teamName, asistencias: newAsistencias });
    }
    
    message.textContent = `Stats de ${playerName.toUpperCase()} actualizadas a ${newGoles} Goles y ${newAsistencias} Asistencias.`;
    sortAndRenderLeaders(); // Actualizar las tablas de líderes
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
    const allPlayers = new Map();
    [...goleadores, ...asistidores].forEach(p => {
        const key = p.jugador.toLowerCase();
        if (!allPlayers.has(key)) {
             allPlayers.set(key, { ...p });
        }
    });

    Object.values(Array.from(allPlayers.values())).sort((a, b) => a.jugador.localeCompare(b.jugador)).forEach(player => {
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

    // 4. Cargar la primera fecha por defecto
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
    
    // 1. Validar y Agregar a los detalles del equipo
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
    const isPlayer = playerRol.toLowerCase().includes('jugador') || 
                     playerRol.toLowerCase().includes('delantero') || 
                     playerRol.toLowerCase().includes('defensa') || 
                     playerRol.toLowerCase().includes('volante') || 
                     playerRol.toLowerCase().includes('arquero');

    if (isPlayer) {
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

        matchDiv.innerHTML = `
            <span>${match.local.toUpperCase()}</span>
            <div>
                <input type="number" min="0" value="${match.scoreLocal}" data-team="${match.local}" data-match-index="${matchIndex}" data-type="local" onchange="updateMatchScore(${fechaIndex}, ${matchIndex}, 'local', this.value)">
                -
                <input type="number" min="0" value="${match.scoreVisitante}" data-team="${match.visitante}" data-match-index="${matchIndex}" data-type="visitante" onchange="updateMatchScore(${fechaIndex}, ${matchIndex}, 'visitante', this.value)">
            </div>
            <span>${match.visitante.toUpperCase()}</span>
            <button onclick="updateMatchScoreAndOpenStats(${fechaIndex}, ${matchIndex})">STATS</button>
        `;
        partidosContainer.appendChild(matchDiv);
    });
}

function updateMatchScore(fechaIndex, matchIndex, teamType, newScore) {
    const score = parseInt(newScore) || 0;
    const match = fixture[fechaIndex][matchIndex];
    
    if (teamType === 'local') {
        match.scoreLocal = score;
    } else {
        match.scoreVisitante = score;
    }
}

// Función que se activa al hacer click en el botón STATS (Opcional: puedes quitar la lógica de scores si el botón se encarga)
function updateMatchScoreAndOpenStats(fechaIndex, matchIndex) {
    // Aquí podrías guardar primero los scores que están en el input si fuera necesario,
    // pero para este ejemplo, solo actualizaremos las variables globales del modal
    currentFechaIndex = fechaIndex;
    currentMatchIndex = matchIndex;
    openMatchStatsModal(); // Abrir el modal de stats para asignar goleadores/asistidores
}

function openMatchStatsModal() {
    const match = fixture[currentFechaIndex][currentMatchIndex];
    const totalGoals = match.scoreLocal + match.scoreVisitante;
    const title = document.getElementById('stats-match-title');
    const container = document.getElementById('goal-slots-container');

    title.textContent = `Stats: ${match.local.toUpperCase()} (${match.scoreLocal}) vs ${match.visitante.toUpperCase()} (${match.scoreVisitante})`;
    container.innerHTML = '';

    const allPlayers = [...goleadores, ...asistidores].reduce((map, p) => {
        if (!map.has(p.jugador)) {
            map.set(p.jugador, p.equipo);
        }
        return map;
    }, new Map());

    // Generar las opciones de jugador una sola vez
    let playerOptionsHtml = '<option value="">-- Selecciona Goleador --</option>';
    let assistOptionsHtml = '<option value="N/A">Sin Asistencia</option>';
    
    Array.from(allPlayers.keys()).sort().forEach(player => {
        const teamName = allPlayers.get(player);
        playerOptionsHtml += `<option value="${player}" data-team="${teamName}">${player} (${teamName.toUpperCase()})</option>`;
        assistOptionsHtml += `<option value="${player}" data-team="${teamName}">${player} (${teamName.toUpperCase()})</option>`;
    });


    // Generar las ranuras de goles
    for (let i = 0; i < totalGoals; i++) {
        // Usar los stats ya guardados si existen, o valores por defecto
        const goalStat = match.stats[i] || { goalTeam: "N/A", goalPlayer: "", assistPlayer: "N/A" };
        
        // Determinar el equipo anotador por orden (asumiendo que los primeros N goles son del local, y el resto del visitante)
        const presumedScoringTeam = i < match.scoreLocal ? match.local : match.visitante;

        const slotDiv = document.createElement('div');
        slotDiv.className = 'goal-slot';
        slotDiv.dataset.goalIndex = i;

        // Opciones de equipo
        let teamOptions = `<option value="${match.local}" ${goalStat.goalTeam === match.local || (goalStat.goalTeam === 'N/A' && presumedScoringTeam === match.local) ? 'selected' : ''}>${match.local.toUpperCase()}</option>`;
        teamOptions += `<option value="${match.visitante}" ${goalStat.goalTeam === match.visitante || (goalStat.goalTeam === 'N/A' && presumedScoringTeam === match.visitante) ? 'selected' : ''}>${match.visitante.toUpperCase()}</option>`;


        const currentSelectedPlayerOptions = playerOptionsHtml.replace(`value="${goalStat.goalPlayer}"`, `value="${goalStat.goalPlayer}" selected`);
        const currentSelectedAssistOptions = assistOptionsHtml.replace(`value="${goalStat.assistPlayer}"`, `value="${goalStat.assistPlayer}" selected`);

        slotDiv.innerHTML = `
            <h4>Gol ${i + 1}</h4>
            <select class="select-team" data-index="${i}" onchange="updateGoalTeamInfo(${i}, this.value)">
                ${teamOptions}
            </select>
            <select class="select-scorer" data-index="${i}">
                ${currentSelectedPlayerOptions}
            </select>
            <select class="select-assist" data-index="${i}">
                ${currentSelectedAssistOptions}
            </select>
        `;
        container.appendChild(slotDiv);
    }
    openModal('match-stats-modal');
}


function saveMatchStats() {
    const match = fixture[currentFechaIndex][currentMatchIndex];
    const goalSlots = document.querySelectorAll('#goal-slots-container .goal-slot');
    const newStats = [];
    let scoreLocalCheck = 0;
    let scoreVisitanteCheck = 0;

    for (const slot of goalSlots) {
        const teamName = slot.querySelector('.select-team').value;
        const goalPlayer = slot.querySelector('.select-scorer').value;
        const assistPlayer = slot.querySelector('.select-assist').value;

        if (!goalPlayer) {
            alert('Por favor, selecciona un goleador para cada gol.');
            return;
        }

        newStats.push({ goalTeam: teamName, goalPlayer: goalPlayer, assistPlayer: assistPlayer });

        // Contar el marcador en base a las stats ingresadas
        if (teamName === match.local) {
            scoreLocalCheck++;
        } else if (teamName === match.visitante) {
            scoreVisitanteCheck++;
        }
    }

    if (scoreLocalCheck !== match.scoreLocal || scoreVisitanteCheck !== match.scoreVisitante) {
        alert(`¡Error! El total de goles ingresados por equipo (${scoreLocalCheck}-${scoreVisitanteCheck}) no coincide con el marcador guardado (${match.scoreLocal}-${match.scoreVisitante}).`);
        return;
    }

    // Actualizar las stats del partido
    match.stats = newStats;
    closeModal('match-stats-modal');
    alert('Estadísticas del partido guardadas temporalmente. No olvides darle a "GUARDAR TODO Y ACTUALIZAR WEB"');
}

// Función que recalcula la tabla de posiciones y las tablas de líderes
function saveAllAndRerender() {
    // 1. Recalcular las clasificaciones
    calculateStats();

    // 2. Recalcular Goleadores y Asistidores (reinicia las cuentas de jugadores y las rellena con las stats de los partidos)
    
    // a) Resetear Goles y Asistencias de todos los jugadores a 0
    goleadores.forEach(p => p.goles = 0);
    asistidores.forEach(p => p.asistencias = 0);
    
    // b) Contar de nuevo
    fixture.forEach(fechaData => {
        fechaData.forEach(match => {
            match.stats.forEach(stat => {
                // Contar Goleador
                let g = goleadores.find(p => p.jugador === stat.goalPlayer);
                if (g) g.goles++;

                // Contar Asistidor
                if (stat.assistPlayer !== 'N/A') {
                    let a = asistidores.find(p => p.jugador === stat.assistPlayer);
                    if (a) a.asistencias++;
                }
            });
        });
    });
    
    // 3. Renderizar la web con los nuevos datos
    sortTable();
    renderTable();
    sortAndRenderLeaders();
    renderFecha(currentFecha);
    
    alert("¡Datos guardados y web actualizada!");
    
    // Opcional: Recargar el panel de admin si estaba abierto
    const adminSection = document.getElementById('admin');
    if (adminSection && adminSection.classList.contains('active')) {
         initAdminPanel();
    }
}

// ===================================
// INICIALIZACIÓN DE LA WEB 🚀
// ===================================

function init() {
    // 1. Inicializar cálculos y tablas
    calculateStats();
    sortTable();
    renderTable();
    sortAndRenderLeaders();

    // 2. Renderizar la primera fecha del calendario (o la actual)
    renderFecha(currentFecha);
    
    // 3. Inicializar panel de administración (sus selectores)
    initAdminPanel();

    // 4. Mostrar la sección de inicio
    showSection('inicio');
}

// Ejecutar la inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);
