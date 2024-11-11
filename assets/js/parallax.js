// assets/js/parallax.js

document.addEventListener('DOMContentLoaded', function() {
    const parallax = document.getElementById('hero-img');

    window.addEventListener('scroll', function() {
        let offset = window.window.scrollY;
        parallax.style.backgroundPositionY = offset * 0.4 + 'px';
    });
});