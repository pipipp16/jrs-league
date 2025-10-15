// ===================================================================
//
//              SCRIPT JRS - Lógica de Navegación y Modal
//
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Lógica del MODAL de Redes ---
    const modal = document.getElementById("redesModal");
    const btn = document.getElementById("redesBtn");
    const span = document.getElementsByClassName("close-modal-btn")[0];

    // Abrir el modal
    if(btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    // Cerrar el modal con la X
    if(span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Cerrar el modal al hacer clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // --- Funcionalidad del Botón Discord ---
    const discordButton = document.getElementById('discordBtn');
    if(discordButton) {
        discordButton.addEventListener('click', () => {
            // REEMPLAZA ESTE LINK CON TU ENLACE REAL DE DISCORD
            window.open('https://discord.gg/ejemplodeinvitacion', '_blank'); 
        });
    }
});
