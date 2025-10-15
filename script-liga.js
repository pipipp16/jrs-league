// ===================================================================
//
//          SCRIPT JRS - Lógica de Tablas (Datos Estáticos para Edición Manual)
//
// ===================================================================

// --- Datos Fijos de la Liga Principal (ACTUALIZA PTS, GF, GC REGULARMENTE) ---
const datosLiga = {
    equipos: [
        // ¡NUEVO EQUIPO AGREGADO! (Sin logo por ahora - usa '#' como placeholder)
        { nombre: "Machetitos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "#" // Placeholder: Reemplaza '#' con el URL del logo cuando lo tengas.
        },
        { nombre: "Cornudos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://media.discordapp.net/attachments/1427426202942963863/1427426208190300371/62lxYZTR_400x400.png?ex=68f02340&is=68eed1c0&hm=d8fdd0ef57466d5ea8b1304f271c1cb808540defd6bdfabc25d8ab9f9ca38b83&=&format=webp&quality=lossless&width=547&height=549" 
        },
        { nombre: "White Phanter Kings", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://media.discordapp.net/attachments/1426275667221413998/1426275669578354809/WHITEPANTHERKINGS-removebg-preview-removebg-preview_1.png?ex=68efe83a&is=68ee96ba&hm=950dfc2780f68b4b7c6f34765b4871a88a0033c7f7a5d5ba2f0fc73141e0924d&=&format=webp&quality=lossless&width=400&height=400" 
        },
        { nombre: "Calyndra", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://media.discordapp.net/attachments/1420895534520205393/1420895536218636399/calyndra.webp?ex=68f01c16&is=68eeca96&hm=c1bdf4df6662d7b2a995fc6b658fec7e65f6b0e0018f814fe1297c278751234c&=&format=webp&width=454&height=454" 
        },
        { nombre: "Banfield", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://media.discordapp.net/attachments/1416494488838213762/1416494490469924874/Screenshot_20250913_014640_Discord.jpg?ex=68efeb4b&is=68ee99cb&hm=54e754814a2a465e90a08e66e90cd96119255739d4361d72c17a94f1bdba433f&=&format=webp&width=716&height=549" 
        },
        { nombre: "Valunir", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://media.discordapp.net/attachments/1421544639395135498/1421544641588625418/valunir_fc.png?ex=68f07e5d&is=68ef2cdd&hm=fa6e3592c62715a43c4d1290ead78854b6a61b037d955beed6f2eee61f0b4d06&=&format=webp&quality=lossless&width=549&height=549" 
        },
        { nombre: "Loan", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://media.discordapp.net/attachments/1420195378720018462/1424049604898459749/raw.jpg?ex=68f060cb&is=68ef0f4b&hm=99d379367f473727910daf65928ad0bc95cf2fd6ad4cda42a28d69857dc9a56b&=&format=webp&width=549&height=549" 
        },
        { nombre: "Laira", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://cdn.discordapp.com/attachments/1420221949837185094/1420221952144179200/LAIRA-removebg-preview.png?ex=68f04bc3&is=68eefa43&hm=a4fea678acd298d13a43e6de0ee177d7fc3ebf5b7769dd40210e7059fc2e9b3e" 
        },
        { nombre: "El Rejunte De Amigos", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://media.discordapp.net/attachments/1423132879655010346/1423132881659891722/6c23c07dc3ebb40baef3349cee5865d9.png?ex=68f056c7&is=68ef0547&hm=d0580163c49ea6ec8f7f8215791f7f1d85acdcf5386c33bbe4a846bebdeea249&=&format=webp&quality=lossless&width=102&height=102" 
        },
        { nombre: "Wanderers", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://images-ext-1.discordapp.net/external/vjAiy9kVLUUB_r9OtIXgu42-sl9XoVGbig2a_scHZIc/%3Fsize%3D2048/https/cdn.discordapp.com/icons/1415116687732379731/41b9f102aa487746a4651ca25609123f.png?format=webp&quality=lossless&width=205&height=205" 
        },
        { nombre: "Mamas FC", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://media.discordapp.net/attachments/1427833099512840233/1427833100607557632/White_Black_Gold_Circle_Modern_Football_Club_Logo.jpg?ex=68f04cb3&is=68eefb33&hm=98b57e06aa88faabea5817d7be6b9b1466439feba2663ea52eb34feab583c4ae&=&format=webp&width=400&height=400" 
        },
        { nombre: "Joga Bonito", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://media.discordapp.net/attachments/1416494488838213762/1416494490469924874/Screenshot_20250913_014640_Discord.jpg?ex=68efeb4b&is=68ee99cb&hm=54e754814a2a465e90a08e66e90cd96119255739d4361d72c17a94f1bdba433f&=&format=webp&width=716&height=549" 
        },
        { nombre: "Bristol City", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, 
            gf: 0, gc: 0, 
            logo: "https://media.discordapp.net/attachments/1426327579421577337/1426327582521163796/bristol.png?ex=68f01893&is=68eec713&hm=c18a45a6092b6fedd2ee3e1acb5a5d68b68750065cbf909e5b28424bcf7baab1&=&format=webp&quality=lossless&width=400&height=400" 
        },
    ],
    // ... el resto de goleadores y asistencias permanece igual ...
    goleadores: [
        { jugador: "Goleador A", equipo: "Machetitos", goles: 9 },
        { jugador: "Goleador B", equipo: "Cornudos", goles: 7 },
        { jugador: "Goleador C", equipo: "White Phanter Kings", goles: 7 },
        { jugador: "Goleador D", equipo: "Calyndra", goles: 5 },
        { jugador: "Goleador E", equipo: "Banfield", goles: 4 }
    ],
    asistencias: [
        { jugador: "Asistente X", equipo: "Machetitos", asis: 8 },
        { jugador: "Asistente Y", equipo: "Calyndra", asis: 6 },
        { jugador: "Asistente Z", equipo: "Banfield", asis: 5 },
        { jugador: "Asistente W", equipo: "Cornudos", asis: 4 },
        { jugador: "Asistente Q", equipo: "Loan", asis: 3 }
    ],
    resultadosFechas: {
        "1": `
            <p><strong>Resultados Fecha 1:</strong></p>
            <ul class="score-list">
                <li>Machetitos 3 - 1 Cornudos</li>
                <li>Calyndra 2 - 2 Banfield</li>
                <li>Loan 0 - 1 Laira</li>
            </ul>
        `,
        "2": `
            <p><strong>Resultados Fecha 2:</strong></p>
            <ul class="score-list">
                <li>Valunir 4 - 3 Wanderers</li>
                <li>W.P.K 2 - 1 Banfield</li>
            </ul>
        `,
        "3": `<p class="placeholder-text">¡Resultados de la Fecha 3, pendientes!</p>`
    }
};

// ===================================================================
//                            FUNCIONES DE RENDERIZADO
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
        return b.gf - a.gf;
    });

    const filasHTML = data.equipos.map((eq, i) => {
        const claseFila = (i < 3) ? 'top-three' : '';
        const difGoles = eq.gf - eq.gc; // Calcula la diferencia de goles
        
        // Determina la fuente de la imagen (usa un logo por defecto si el URL es '#')
        const logoSrc = eq.logo && eq.logo !== '#' ? eq.logo : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><rect width="25" height="25" fill="%23444"/><text x="12.5" y="16" font-family="Arial" font-size="10" fill="white" text-anchor="middle">L</text></svg>';
        
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
