// ===================================
// DATOS DE LA LIGA (Estructura mejorada y REINICIADA a CERO) ⚽
// ===================================

// Equipos con estadísticas en 0
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

// Goleadores y asistidores en 0 (puedes dejarlos vacíos o con datos de ejemplo en 0)
let leaderStats = {
    goles: [
        { jugador: "Jugador A", equipo: "BANFIELD", cantidad: 0 },
        { jugador: "Jugador B", equipo: "VALUNIR", cantidad: 0 },
        { jugador: "Jugador C", equipo: "BRISTOL", cantidad: 0 },
    ],
    asistencias: [
        { jugador: "Jugador X", equipo: "VALUNIR", cantidad: 0 },
        { jugador: "Jugador Y", equipo: "BANFIELD", cantidad: 0 },
        { jugador: "Jugador Z", equipo: "BRISTOL", cantidad: 0 },
    ]
};


// Calendario de partidos con resultados en 0-0 y sin goles/asistencias registradas
const fixture = [
    // FECHA 1
    [
        { local: "VALUNIR", visitante: "BANFIELD", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "BRISTOL", visitante: "JOGA BONITO", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "WHITE PHANTER KINGS", visitante: "LAIRA", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "EL REJUNTE DE AMIGOS", visitante: "LOAN", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "CORNUDOS", visitante: "WANDERERS", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "MAMAS FC", visitante: "VALUNIR", resultado: { local: 0, visitante: 0 }, goles: [] }
    ],
    // FECHA 2
    [
        { local: "LOAN", visitante: "MAMAS FC", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "MACHETITOS", visitante: "EL REJUNTE DE AMIGOS", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "LAIRA", visitante: "CORNUDOS", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "JOGA BONITO", visitante: "WHITE PHANTER KINGS", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "BANFIELD", visitante: "BRISTOL", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "VALUNIR", visitante: "LOAN", resultado: { local: 0, visitante: 0 }, goles: [] }
    ],
    // FECHA 3
    [
        { local: "BRISTOL", visitante: "VALUNIR", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "WHITE PHANTER KINGS", visitante: "BANFIELD", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "CORNUDOS", visitante: "JOGA BONITO", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "EL REJUNTE DE AMIGOS", visitante: "LAIRA", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "MACHETITOS", visitante: "MAMAS FC", resultado: { local: 0, visitante: 0 }, goles: [] },
        { local: "WANDERERS", visitante: "VALUNIR", resultado: { local: 0, visitante: 0 }, goles: [] }
    ]
];

// ******************************************************
// EL RESTO DEL CÓDIGO JS SIGUE SIENDO EL MISMO
// (Lógica de tablas, renderizado, admin, modales)
// ******************************************************

let leagueTable = [];
let currentFecha = 0;
const ADMIN_PASSWORD = "ligajrs";

// Todas las funciones de cálculo (calculateStats, sortTable, renderTable, etc.)
// se mantienen igual, pero ahora operarán sobre datos iniciales en cero.

function calculateStats() { /* ... Lógica sin cambios ... */ }
function sortTable() { /* ... Lógica sin cambios ... */ }
function renderTable() { /* ... Lógica sin cambios ... */ }
function sortAndRenderLeaders() { /* ... Lógica sin cambios ... */ }
function renderFecha(fechaIndex) { /* ... Lógica sin cambios ... */ }
function nextFecha() { /* ... Lógica sin cambios ... */ }
function prevFecha() { /* ... Lógica sin cambios ... */ }
function closeModal(id) { /* ... Lógica sin cambios ... */ }
function showTeamModal(teamName) { /* ... Lógica sin cambios ... */ }
function checkAdminPassword() { /* ... Lógica sin cambios ... */ }
function initializeAdminPanel() { /* ... Lógica sin cambios ... */ }
function loadMatchesForAdmin() { /* ... Lógica sin cambios ... */ }
function saveMatchResult(fechaIndex, matchIndex) { /* ... Lógica sin cambios ... */ }
function updateLeagueStats(match, newLocalScore, newVisitanteScore) { /* ... Lógica sin cambios ... */ }
function loadPlayersForAdmin() { /* ... Lógica sin cambios ... */ }
function addPlayerToTeam() { /* ... Lógica sin cambios ... */ }
function removePlayerFromTeam(teamName, playerName) { /* ... Lógica sin cambios ... */ }
function showSection(id) { /* ... Lógica sin cambios ... */ }
function recalculateAndRenderAll() { /* ... Lógica sin cambios ... */ }

// Eventos y Inicialización se mantienen igual.

document.addEventListener('DOMContentLoaded', () => { /* ... Lógica sin cambios ... */ });
