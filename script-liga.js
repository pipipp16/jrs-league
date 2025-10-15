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
        { nombre: "Bristol City", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "Joga Bonito", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
        { nombre: "Mamas FC", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, logo: "#" },
    ],
    goleadores: [
        { jugador: "Goleador A", equipo: "Equipo Ejemplo", goles: 0 },
        { jugador: "Goleador B", equipo: "Equipo Ejemplo", goles: 0 },
        { jugador: "Goleador C", equipo: "Equipo Ejemplo", goles: 0 },
        { jugador: "Goleador D", equipo: "Equipo Ejemplo", goles: 0 },
        { jugador: "Goleador E", equipo: "Equipo Ejemplo", goles: 0 }
    ],
    asistencias: [
        { jugador: "Asistente X", equipo: "Equipo Ejemplo", asis: 0 },
        { jugador: "Asistente Y", equipo: "Equipo Ejemplo", asis: 0 },
        { jugador: "Asistente Z", equipo: "Equipo Ejemplo", asis: 0 },
        { jugador: "Asistente W", equipo: "Equipo Ejemplo", asis: 0 },
        { jugador: "Asistente Q", equipo: "Equipo Ejemplo", asis: 0 }
    ],
    resultadosFechas: {
        "1": `<p class="placeholder-text">¡Resultados de la Fecha 1, pendientes!</p>`,
        "2": `<p class="placeholder-text">¡Resultados de la Fecha 2, pendientes!</p>`,
        "3": `<p class="placeholder-text">¡Resultados de la Fecha 3, pendientes!</p>`
    }
};

// ===================================================================
//                            FUNCIONES DE RENDERIZADO
// ===================================================================

function mostrarTablaPosiciones(data) {
    const tbody = document.querySelector("#tablaPosiciones tbody");
    if (!tbody) return;

    // Asegura que los campos existen para evitar errores de NaN
    data.equipos.forEach(eq => {
        eq.gf = eq.gf || 0; 
        eq.gc = eq.gc || 0; 
        eq.logo = eq.logo || '#';
    });

    // Ordenamiento: 1. Puntos 2. Diferencia de Gol 3. Goles a Favor
    data.equipos.sort((a, b) => {
        const difA = a.gf - a.gc;
        const difB = b.gf - b.gc;
        
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (difB !== difA) return difB - difA;
        return b.gf - a.gf;
    });

    const filasHTML = data.equipos.map((eq, i) => {
        const claseFila = (i < 3) ? 'top-three' : '';
        const difGoles = eq.gf - eq.gc; 
        
        // Placeholder SVG para el logo cuando es '#'
        const logoSrc = eq.logo && eq.logo !== '#' ? eq.logo : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><rect width="25" height="25" fill="%23CCC"/><text x="12.5" y="16" font-family="Arial" font-size="10" fill="#333" text-anchor="middle">L</text></svg>';
        
        const logoAlt = eq.logo && eq.logo !== '#' ? `Logo ${eq.nombre}` : 'Logo Pendiente';

        return `
            <tr class="${claseFila}">
                <td>${i + 1}</td>
                <td class="team-name-cell">
                    <img src="${logoSrc}" alt="${logoAlt}" class="team-logo">
                    <span>${eq.nombre}</span>
                </td>
                <td>${eq.pts}</td>
                <td>${eq.pj}</td>
                <td>${eq.pg}</td>
                <td>${eq.pe}</td>
                <td>${eq.pp}</td>
                <td>${eq.gf}</td>
                <td>${eq.gc}</td>
                <td>${difGoles}</td>
            </tr>
        `;
    }).join('');

    tbody.innerHTML = filasHTML;
}

function mostrarGoleadores(data) {
    const tbody = document.querySelector("#tablaGoleadores tbody");
    if (!tbody) return;

    data.goleadores.sort((a, b) => b.goles - a.goles);

    const filasHTML = data.goleadores.map((jug, i) => {
        return `
            <tr>
                <td>${i + 1}</td>
                <td>${jug.jugador}</td>
                <td>${jug.equipo}</td>
                <td>${jug.goles}</td>
            </tr>
        `;
    }).join('');

    tbody.innerHTML = filasHTML;
}

function mostrarAsistencias(data) {
    const tbody = document.querySelector("#tablaAsistencias tbody");
    if (!tbody) return;

    data.asistencias.sort((a, b) => b.asis - a.asis);

    const filasHTML = data.asistencias.map((jug, i) => {
        return `
            <tr>
                <td>${i + 1}</td>
                <td>${jug.jugador}</td>
                <td>${jug.equipo}</td>
                <td>${jug.asis}</td>
            </tr>
        `;
    }).join('');

    tbody.innerHTML = filasHTML;
}

function configurarBotonesFechas(resultadosFechas) {
    const container = document.getElementById('resultadosFecha');
    if (!container) return;
    
    const dateButtonsContainer = container.previousElementSibling; 

    // Generar botones dinámicamente
    dateButtonsContainer.innerHTML = '';
    const fechas = Object.keys(resultadosFechas).sort((a, b) => a - b);

    fechas.forEach(fechaID => {
        const btn = document.createElement('button');
        btn.className = 'date-btn';
        btn.setAttribute('data-fecha', fechaID);
        btn.textContent = `Fecha ${fechaID}`;
        dateButtonsContainer.appendChild(btn);
    });

    const botones = dateButtonsContainer.querySelectorAll('.date-btn');

    botones.forEach(btn => {
        btn.addEventListener('click', function() {
            // Desactiva todos los botones y activa el presionado
            botones.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const fechaID = this.getAttribute('data-fecha');
            
            container.innerHTML = resultadosFechas[fechaID] || 
                                            `<p class="placeholder-text">Aún no hay resultados para la Fecha ${fechaID}.</p>`;
        });
    });

    // Carga la primera fecha automáticamente al iniciar
    if (botones.length > 0) {
        botones[0].click(); 
    }
}


// ===================================================================
//                            INICIALIZACIÓN
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Si estamos en liga.html
    if (document.body.getAttribute('data-liga') === 'principal') {
        
        // Cargar y mostrar todas las tablas con los datos fijos de la constante datosLiga
        mostrarGoleadores(datosLiga);
        mostrarTablaPosiciones(datosLiga);
        mostrarAsistencias(datosLiga);
        configurarBotonesFechas(datosLiga.resultadosFechas);
    }
});
