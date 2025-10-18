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
    for (const teamName in leagueStats)
