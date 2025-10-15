document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("redesModal");
    const closeModalBtn = document.querySelector(".close-modal-btn");
    const redButtons = document.querySelectorAll(".redes-btn");
    const discordButtons = document.querySelectorAll(".discord-btn");

    if (!modal) return;

    const openModal = () => modal.style.display = "block";
    const closeModal = () => modal.style.display = "none";

    redButtons.forEach(btn => btn.addEventListener("click", openModal));
    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    window.addEventListener("click", event => {
        if (event.target === modal) closeModal();
    });

    discordButtons.forEach(btn => btn.addEventListener("click", () => {
        window.open("https://discord.gg/w4nN6njBX7", "_blank");
    }));
});

