document.querySelector('[data-bs-toggle="collapse"]').addEventListener('click', function () {
    const icon = document.getElementById('arrowIcon');
    if (this.getAttribute('aria-expanded') === 'true') {
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
    } else {
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');
    }
});