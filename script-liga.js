// ===================================================================
//
//          SCRIPT JRS - Lógica de Tablas (Datos Estáticos para Edición Manual)
//
// ===================================================================

// --- Datos Fijos de la Liga Principal (EDITA ESTO PARA ACTUALIZAR LAS ESTADÍSTICAS) ---
const datosLiga = {
    equipos: [
        // ESTADÍSTICAS EN CERO (0) y LOGOS EN PLACEHOLDER ('#') con campos GF y GC
        { nombre: "Machetitos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "Cornudos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "White Phanter Kings", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "Calyndra", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "Banfield", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "Valunir", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "Loan", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "Laira", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "El Rejunte De Amigos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "Wanderers", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        // AÑADE AQUÍ LOS EQUIPOS QUE FALTAN EN TU LISTA ANTERIOR PARA COMPLETAR LOS 13
        { nombre: "Bristol City", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "Joga Bonito", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "Mamas FC", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
    ],
    goleadores: [
        { jugador: "Goleador A", equipo: "Machetitos", goles: 0 },
        { jugador: "Goleador B", equipo: "Cornudos", goles: 0 },
        { jugador: "Goleador C", equipo: "White Phanter Kings", goles: 0 },
        { jugador: "Goleador D", equipo: "Calyndra", goles: 0 },
        { jugador: "Goleador E", equipo: "Banfield", goles: 0 }
    ],
    asistencias: [
        { jugador: "Asistente X", equipo: "Machetitos", asis: 0 },
        { jugador: "Asistente Y", equipo: "Calyndra", asis: 0 },
        { jugador: "Asistente Z", equipo: "Banfield", asis: 0 },
        { jugador: "Asistente W", equipo: "Cornudos", asis: 0 },
        { jugador: "Asistente Q", equipo: "Loan", asis: 0 }
    ],
    resultadosFechas: {
        "1": `<p class="placeholder-text">¡Resultados de la Fecha 1, pendientes!</p>`,
        "2": `<p class="placeholder-text">¡Resultados de la Fecha 2, pendientes!</p>`,
        "3": `<p class="placeholder-text">¡Resultados de la Fecha 3, pendientes!</p>`
    }
};

// ===================================================================
//                            FUNCIONES DE RENDERIZADO (MODIFICADA)
// ===================================================================

function mostrarTablaPosiciones(data) {
    const tbody = document.querySelector("#tablaPosiciones tbody");
    if (!tbody) return;

    // AÑADE CAMPOS POR DEFECTO (NECESARIO si se edita solo el array de equipos)
    data.equipos.forEach(eq => {
        eq.gf = eq.gf || 0; 
        eq.gc = eq.gc || 0; 
        eq.logo = eq.logo || '#';
    });

    // Ordenamiento: 1. Puntos (desc) 2. Diferencia de Gol (desc) 3. Goles a Favor (desc)
    data.equipos.sort((a, b) => {
        const difA = a.gf - a.gc;
        const difB = b.gf - b.gc;
        
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (difB !== difA) return difB - difA; // Lógica por Diferencia de Goles
        return b.gf - a.gf;
