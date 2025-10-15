// ===================================================================
//
//          SCRIPT JRS - Lógica de Tablas (Datos Estáticos para Edición Manual)
//
// ===================================================================

// --- Datos Fijos de la Liga Principal (ACTUALIZA PTS, GF, GC REGULARMENTE) ---
const datosLiga = {
    equipos: [
        // TODOS LOS EQUIPOS CON DATOS EN CERO (0) Y LOGO PLACEHOLDER ('#')
        
        { nombre: "Machetitos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "Cornudos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "White Phanter Kings", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "Calyndra", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "Banfield", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "Valunir", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "Loan", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "Laira", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "El Rejunte De Amigos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "Wanderers", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "Mamas FC", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "Joga Bonito", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
        { nombre: "Bristol City", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder
        },
    ],
    
    // TABLA DE GOLEADORES (DATOS EN CERO)
    goleadores: [
        { jugador: "Goleador A", equipo: "Equipo Ejemplo", goles: 0 },
        { jugador: "Goleador B", equipo: "Equipo Ejemplo", goles: 0 },
        { jugador: "Goleador C", equipo: "Equipo Ejemplo", goles: 0 },
        { jugador: "Goleador D", equipo: "Equipo Ejemplo", goles: 0 },
        { jugador: "Goleador E", equipo: "Equipo Ejemplo", goles: 0 }
    ],
    
    // TABLA DE ASISTENCIAS (DATOS EN CERO)
    asistencias: [
        { jugador: "Asistente X", equipo: "Equipo Ejemplo", asis: 0 },
        { jugador: "Asistente Y", equipo: "Equipo Ejemplo", asis: 0 },
        { jugador: "Asistente Z", equipo: "Equipo Ejemplo", asis: 0 },
        { jugador: "Asistente W", equipo: "Equipo Ejemplo", asis: 0 },
        { jugador: "Asistente Q", equipo: "Equipo Ejemplo", asis: 0 }
    ],
    
    // RESULTADOS DE FECHAS (RESET A ESTADO INICIAL)
    resultadosFechas: {
        "1": `<p class="placeholder-text">¡Resultados de la Fecha 1, pendientes!</p>`,
        "2": `<p class="placeholder-text">¡Resultados de la Fecha 2, pendientes!</p>`,
        "3": `<p class="placeholder-text">¡Resultados de la Fecha 3, pendientes!</p>`
        // Agrega más fechas aquí si es necesario
    }
};

// ===================================================================
//                            FUNCIONES DE RENDERIZADO (NO SE TOCAN)
// ===================================================================

function mostrarTablaPosiciones(data) {
    const tbody = document.querySelector("#tablaPosiciones tbody");
    if (!tbody) return;

    // Ordenamiento: 1. Puntos (desc) 2. Diferencia de Gol (desc) 3. Goles a Favor (desc)
    data.equipos.sort((a, b) => {
        const difA = a.gf - a.gc;
        const difB = b.gf - b.gc;
        
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (difB !== difA) return difB - difA;
        return b.
