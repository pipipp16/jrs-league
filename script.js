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

// Goleadores y asistidores con 5 entradas en 0 (Iniciales)
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
        { jugador: "Asistidor 3", equipo: "LOAN", cantidad
