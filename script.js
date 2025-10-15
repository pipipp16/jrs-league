document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DEL MODAL DE REDES ---
    const redesBtn = document.getElementById('redesBtn');
    const redesModal = document.getElementById('redesModal');
    const closeModalBtn = redesModal ? redesModal.querySelector('.close-modal-btn') : null;
    
    // Solo si el botón y el modal existen en la página actual 
    if (redesBtn && redesModal) {
        // 1. Abrir modal
        redesBtn.onclick = function() {
            redesModal.style.display = 'block';
        }
        
        // 2. Cerrar modal con la 'X'
        if (closeModalBtn) {
            closeModalBtn.onclick = function() {
                redesModal.style.display = 'none';
            }
        }
        
        // 3. Cerrar modal al hacer clic fuera
        window.onclick = function(event) {
            if (event.target == redesModal) {
                redesModal.style.display = 'none';
            }
        }
    }
    
    // --- LÓGICA DEL BOTÓN DE DISCORD ---
    const discordBtn = document.getElementById('discordBtn');
    if (discordBtn) {
        discordBtn.onclick = function() {
            // Reemplaza este enlace con el enlace de invitación a tu servidor de Discord
            window.open('https://discord.gg/w4nN6njBX7', '_blank'); 
        }
    }

});
