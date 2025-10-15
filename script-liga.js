document.addEventListener("DOMContentLoaded", async () => {

    async function fetchData(file) {
        try {
            const res = await fetch(file);
            return await res.json();
        } catch (err) {
            console.error(`Error cargando ${file}:`, err);
            return [];
        }
    }

    const posiciones = await fetchData('data/posiciones.json');
    const goleadores = await fetchData('data/goleadores.json');
    const asistencias = await fetchData('data/asistencias.json');
    const fechas = await fetchData('data/fechas.json');

    function mostrarTablaPosiciones(data) {
        const tbody = document.querySelector("#tablaPosiciones tbody");
        if (!tbody) return;

        data.sort((a, b) => b.pts - a.pts || b.pg - a.pg);

        tbody.innerHTML = data.map((eq, i) => `
            <tr class="${i<3?'top-three':''}">
                <td>${i+1}</td>
                <td>${eq.nombre}</td>
                <td>${eq.pts}</td>
                <td>${eq.pj}</td>
                <td>${eq.pg}</td>
                <td>${eq.pe}</td>
                <td>${eq.pp}</td>
            </tr>
        `).join('');
    }

    function mostrarGoleadores(data) {
        const tbody = document.querySelector("#tablaGoleadores tbody");
        if (!tbody) return;

        data.sort((a, b) => b.goles - a.goles);

        tbody.innerHTML = data.map((jug, i) => `
            <tr>
                <td>${i+1}</td>
                <td>${jug.jugador}</td>
                <td>${jug.equipo}</td>
                <td>${jug.goles}</td>
            </tr>
        `).join('');
    }

    function mostrarAsistencias(data) {
        const tbody = document.querySelector("#tablaAsistencias tbody");
        if (!tbody) return;

        data.sort((a, b) => b.asis - a.asis);

        tbody.innerHTML = data.map((jug, i) => `
            <tr>
                <td>${i+1}</td>
                <td>${jug.jugador}</td>
                <td>${jug.equipo}</td>
                <td>${jug.asis}</td>
            </tr>
        `).join('');
    }

    function configurarBotonesFechas(fechasData) {
        const container = document.getElementById('resultadosFecha');
        if (!container) return;
        const dateButtonsContainer = container.previousElementSibling;
        dateButtonsContainer.innerHTML = '';

        Object.keys(fechasData).sort((a,b)=>a-b).forEach(id => {
            const btn = document.createElement('button');
            btn.className = 'date-btn';
            btn.dataset.fecha = id;
            btn.textContent = `Fecha ${id}`;
            dateButtonsContainer.appendChild(btn);
        });

        const botones = dateButtonsContainer.querySelectorAll('.date-btn');
        botones.forEach(btn => {
            btn.addEventListener('click', function() {
                botones.forEach(b=>b.classList.remove('active'));
                this.classList.add('active');
                container.innerHTML = fechasData[this.dataset.fecha];
            });
        });

        if (botones.length) botones[0].click();
    }

    mostrarTablaPosiciones(posiciones);
    mostrarGoleadores(goleadores);
    mostrarAsistencias(asistencias);
    configurarBotonesFechas(fechas);
});
