// ===================================================================
//
//              SCRIPT JRS - Lógica de Navegación y Modal
//
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Lógica del MODAL de Redes ---
    const redButtons = document.querySelectorAll("#redesBtn");
    const modal = document.getElementById("redesModal");
    const closeModalBtn = document.getElementsByClassName("close-modal-btn")[0]; 

    function openModal() {
        if (modal) {
            modal.style.display = "block";
        }
    }

    function closeModal() {
        if (modal) {
            modal.style.display = "none";
        }
    }

    // 1. Abrir el modal al hacer clic en cualquiera de los botones "REDES"
    redButtons.forEach(btn => {
        btn.onclick = openModal;
    });

    // 2. Cerrar el modal con la X
    if(closeModalBtn) {
        closeModalBtn.onclick = closeModal;
    }

    // 3. Cerrar el modal al hacer clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // --- Funcionalidad del Botón Discord ---
    const discordButtons = document.querySelectorAll('.discord-btn');
    if(discordButtons.length > 0) {
        discordButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // REEMPLAZA ESTE LINK CON TU ENLACE REAL DE DISCORD
                window.open('https://discord.gg/ejemplodeinvitacion', '_blank'); 
            });
        });
    }
});
