// ===================================================================
//
//              SCRIPT JRS - Lógica de Menú y Navegación
//
// ===================================================================

const sidebarWidth = "250px"; // Ancho del menú lateral

/* Función para abrir el menú lateral */
function openNav() {
  document.getElementById("mySidebar").style.width = sidebarWidth;
  // Opcional: Empujar el contenido principal hacia la derecha
  document.getElementById("main").style.marginLeft = sidebarWidth;
}

/* Función para cerrar el menú lateral */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  // Opcional: Regresar el contenido principal a su posición original
  document.getElementById("main").style.marginLeft = "0";
}

// ===================================================================
//                            INICIALIZACIÓN
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Funcionalidad del Botón Discord
  const discordButton = document.getElementById('discordBtn');
  if(discordButton) {
      discordButton.addEventListener('click', () => {
          // REEMPLAZA ESTE LINK CON TU ENLACE REAL DE DISCORD
          window.open('https://discord.gg/ejemplodeinvitacion', '_blank'); 
      });
  }

  // Nota: Las tablas y la lógica de datos se manejarán en la siguiente fase
  // cuando creemos las páginas de "Liga X6" y "Liga X4".
});

// Hacemos las funciones globales para que el HTML pueda llamarlas
window.openNav = openNav;
window.closeNav = closeNav;
