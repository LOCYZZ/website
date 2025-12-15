document.addEventListener('DOMContentLoaded', function() {
    const folderLinks = document.querySelectorAll('.folder-link');
    const phoneImage = document.getElementById('phone-image');
    const phoneLink = document.getElementById('phone-link');
    const titleLink = document.querySelector('.title-link');
    const hiddenLink = document.getElementById('hidden-link');

    let clickCount = 0;

    folderLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const phoneImageSrc = this.getAttribute('data-phone-image');
            const phoneUrl = this.getAttribute('data-phone-url');
            phoneImage.src = phoneImageSrc;
            phoneLink.href = phoneUrl;
        });
    });

    titleLink.addEventListener('click', function(event) {
        event.preventDefault();
        clickCount++;
        if (clickCount === 10) {
            window.location.href = 'Logbook.html';
        }
    });

    // Exemple : Rediriger vers code.html si une certaine touche est pressée
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'e') {
            hiddenLink.click();
        }
    });
});
