// ===================================================================
//
//          SCRIPT MODAL JRS - Lógica para Abrir y Cerrar el Modal
//
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos del DOM
    const modal = document.getElementById("socialModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.querySelector(".close-modal-btn");

    if (modal && openBtn && closeBtn) {
        // Función para abrir el modal al hacer clic en el botón del header
        openBtn.addEventListener("click", () => {
            modal.style.display = "flex"; // Usamos 'flex' para centrar el modal
        });

        // Función para cerrar el modal al hacer clic en la 'x'
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Función para cerrar el modal al hacer clic fuera del contenido del modal
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
    
    // --- Lógica adicional para la página principal (index.html) ---
    // Si necesitas lógica adicional para tu index.html, puedes añadirla aquí.
    // Por ejemplo, si tenías un botón o un contador específico.
    // ...
});
