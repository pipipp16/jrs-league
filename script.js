// Contraseña para el Admin
const ADMIN_PASSWORD = "paginapipi";

// ----------------------------------------------------
// 1. Lógica de Navegación de Página (Mostrar/Ocultar secciones)
// ----------------------------------------------------
function showPage(pageId) {
    // Oculta todas las secciones
    document.querySelectorAll('.page-content').forEach(section => {
        section.classList.remove('active');
    });
    // Muestra la sección deseada
    const targetSection = document.getElementById(`page-${pageId}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Si se navega a una página de modalidad, genera las tablas
    if (pageId === 'primera') {
        generatePrimeraDivisionTables();
    }
}

// ----------------------------------------------------
// 2. Lógica de Acceso al Administrador
// ----------------------------------------------------
function handleAdminAccess(e) {
    e.preventDefault();
    const password = prompt("Ingresa la contraseña de administrador:");

    if (password === ADMIN_PASSWORD) {
        showPage('admin'); // Muestra la página de administración
    } else if (password !== null) {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

// ----------------------------------------------------
// 3. Datos y Lógica de Tablas
// ----------------------------------------------------
const jrsData = {
    // Equipos de ejemplo para Primera División (10 equipos)
    equiposPrimera: [
        { nombre: "Jaguares FC", pj: 10, pg: 7, pe: 2, pp: 1, gf: 30, gc: 10, pts: 0, dg: 0 },
        { nombre: "Los Galácticos", pj: 10, pg: 7, pe: 0, pp: 3, gf: 25, gc: 12, pts: 0, dg: 0 },
        { nombre: "Dream Team", pj: 10, pg: 6, pe: 3, pp: 1, gf: 22, gc: 15, pts: 0, dg: 0 },
        { nombre: "Phoenix Rising", pj: 10, pg: 5, pe: 3, pp: 2, gf: 20, gc: 15, pts: 0, dg: 0 },
        { nombre: "Dragones Rojos", pj: 10, pg: 4, pe: 4, pp: 2, gf: 18, gc: 15, pts: 0, dg: 0 },
        { nombre: "Gladiadores", pj: 10, pg: 4, pe: 2, pp: 4, gf: 15, gc: 16, pts: 0, dg: 0 },
        { nombre: "Titanes", pj: 10, pg: 3, pe: 3, pp: 4, gf: 12, gc: 14, pts: 0, dg: 0 },
        { nombre: "Relámpagos", pj: 10, pg: 2, pe: 2, pp: 6, gf: 10, gc: 20, pts: 0, dg: 0 },
        { nombre: "Novatos", pj: 10, pg: 1, pe: 1, pp: 8, gf: 8, gc: 30, pts: 0, dg: 0 },
        { nombre: "Últimos FC", pj: 10, pg: 0, pe: 2, pp: 8, gf: 5, gc: 28, pts: 0, dg: 0 },
    ],
    goleadoresPrimera: [
        { nombre: "Ciro", equipo: "Jaguares FC", goles: 15 },
        { nombre: "Pipi", equipo: "Los Galácticos", goles: 12 },
        { nombre: "Alfaro", equipo: "Dream Team", goles: 12 },
        { nombre: "Fermin", equipo: "Phoenix Rising", goles: 9 },
        { nombre: "Void", equipo: "Dragones Rojos", goles: 7 },
        { nombre: "Pito", equipo: "Gladiadores", goles: 6 }, 
    ],
    asistidoresPrimera: [
        { nombre: "Alfaro", equipo: "Dream Team", asistencias: 10 },
        { nombre: "Ciro", equipo: "Jaguares FC", asistencias: 9 },
        { nombre: "Void", equipo: "Dragones Rojos", asistencias: 7 },
        { nombre: "Pipi", equipo: "Los Galácticos", asistencias: 5 },
        { nombre: "Pito", equipo: "Gladiadores", asistencias: 5 }, 
        { nombre: "Otro", equipo: "Equipo Z", asistencias: 4 }, 
    ]
};

// **Función para calcular Puntos y Diferencia de Gol**
function calcularDatos(equipo) {
    equipo.pts = (equipo.pg * 3) + equipo.pe;
    equipo.dg = equipo.gf - equipo.gc;
}

// **Función para ordenar la tabla de posiciones**
function ordenarTablaPosiciones(equipos) {
    equipos.forEach(calcularDatos);
    
    return equipos.sort((a, b) => {
        if (b.pts !== a.pts) {
            return b.pts - a.pts; // 1. Puntos
        }
        if (b.dg !== a.dg) {
            return b.dg - a.dg; // 2. Diferencia de Gol
        }
        return b.gf - a.gf; // 3. Goles a Favor (desempate)
    });
}

// **Función para generar el HTML de la tabla de posiciones**
function generarTablaPosiciones(equipos) {
    const tablaOrdenada = ordenarTablaPosiciones([...equipos]); 
    
    let html = `<table>
                    <thead>
                        <tr>
                            <th>Pos</th><th>Equipo</th><th>PJ</th><th>PG</th><th>PE</th><th>PP</th>
                            <th>GF</th><th>GC</th><th>DG</th><th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>`;

    tablaOrdenada.forEach((equipo, index) => {
        html += `<tr>
                    <td>${index + 1}</td>
                    <td>${equipo.nombre}</td>
                    <td>${equipo.pj}</td>
                    <td>${equipo.pg}</td>
                    <td>${equipo.pe}</td>
                    <td>${equipo.pp}</td>
                    <td>${equipo.gf}</td>
                    <td>${equipo.gc}</td>
                    <td>${equipo.dg > 0 ? '+' + equipo.dg : equipo.dg}</td>
                    <td><strong>${equipo.pts}</strong></td>
                 </tr>`;
    });

    html += `</tbody></table>`;
    return html;
}

// **Función para generar el HTML de la tabla de goleadores (Top 5)**
function generarTablaGoleadores(goleadores) {
    const topGoleadores = goleadores.sort((a, b) => b.goles - a.goles).slice(0, 5);
    
    let html = `<table>
                    <thead>
                        <tr>
                            <th>#</th><th>Jugador</th><th>Equipo</th><th>Goles</th>
                        </tr>
                    </thead>
                    <tbody>`;
                    
    topGoleadores.forEach((jugador, index) => {
        html += `<tr>
                    <td>${index + 1}</td>
                    <td style="text-align: left; color: white;">${jugador.nombre}</td>
                    <td>${jugador.equipo}</td>
                    <td><strong>${jugador.goles}</strong></td>
                 </tr>`;
    });
    
    html += `</tbody></table>`;
    return html;
}

// **Función para generar el HTML de la tabla de asistidores (Top 5)**
function generarTablaAsistidores(asistidores) {
    const topAsistidores = asistidores.sort((a, b) => b.asistencias - a.asistencias).slice(0, 5);
    
    let html = `<table>
                    <thead>
                        <tr>
                            <th>#</th><th>Jugador</th><th>Equipo</th><th>Asist.</th>
                        </tr>
                    </thead>
                    <tbody>`;
                    
    topAsistidores.forEach((jugador, index) => {
        html += `<tr>
                    <td>${index + 1}</td>
                    <td style="text-align: left; color: white;">${jugador.nombre}</td>
                    <td>${jugador.equipo}</td>
                    <td><strong>${jugador.asistencias}</strong></td>
                 </tr>`;
    });
    
    html += `</tbody></table>`;
    return html;
}

// **Función principal para generar todas las tablas de Primera División**
function generatePrimeraDivisionTables() {
    if (document.getElementById('tabla-posiciones-primera')) {
        document.getElementById('tabla-posiciones-primera').innerHTML = generarTablaPosiciones(jrsData.equiposPrimera);
    }
    if (document.getElementById('tabla-goleadores-primera')) {
        document.getElementById('tabla-goleadores-primera').innerHTML = generarTablaGoleadores(jrsData.goleadoresPrimera);
    }
    if (document.getElementById('tabla-asistidores-primera')) {
        document.getElementById('tabla-asistidores-primera').innerHTML = generarTablaAsistidores(jrsData.asistidoresPrimera);
    }
}

// ----------------------------------------------------
// 4. Inicialización (Event Listeners)
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejar la navegación de enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = e.currentTarget.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // 2. Manejar el botón de Admin
    const adminBtn = document.getElementById('admin-btn');
    if (adminBtn) {
        adminBtn.addEventListener('click', handleAdminAccess);
    }

    // 3. Mostrar la página de inicio por defecto
    showPage('inicio'); 
});
