(() => {
    let previousFocus = null;

    function openIntro(modal) {
        previousFocus = document.activeElement;
        modal.hidden = false;
        document.body.classList.add("material-intro-visible");
        modal.querySelector(".material-intro-note")?.focus();
    }

    function closeIntro(modal) {
        modal.hidden = true;
        document.body.classList.remove("material-intro-visible");
        previousFocus?.focus();
        previousFocus = null;
    }

    document.addEventListener("click", (event) => {
        const openButton = event.target.closest("[data-material-intro-open]");
        if (openButton) {
            const modal = document.getElementById(openButton.dataset.materialIntroOpen);
            if (modal) openIntro(modal);
            return;
        }

        const modal = event.target.closest("[data-material-intro-modal]");
        if (!modal) return;

        if (event.target === modal || event.target.closest("[data-material-intro-close]")) {
            closeIntro(modal);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        const modal = document.querySelector("[data-material-intro-modal]:not([hidden])");
        if (modal) closeIntro(modal);
    });
})();
