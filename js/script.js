document.addEventListener('DOMContentLoaded', () => {
    const btnLoadMore = document.getElementById('btn-load-more');
    const overlay = document.querySelector('.grid-fade-overlay');
    const wrapper = document.querySelector('.portfolio-wrapper');

    if (btnLoadMore && wrapper) { // Verificamos que los elementos existan
        btnLoadMore.addEventListener('click', () => {
            console.log("Expandiendo proyectos...");

            // 1. Expandimos el contenedor
            wrapper.classList.add('expanded');

            // 2. Escondemos el difuminado y el botón
            if (overlay) overlay.style.opacity = '0';
            btnLoadMore.style.display = 'none';

            // Opcional: después de la transición, quitamos el overlay del todo
            setTimeout(() => {
                if (overlay) overlay.style.display = 'none';
            }, 800);
        });
    }
});