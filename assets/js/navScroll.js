document.addEventListener("DOMContentLoaded", function() {
    // Function to handle scroll event
    function handleScroll() {
        const navbar = document.querySelector('#navbar-timbr');
        if (navbar) {
            window.addEventListener('scroll', () => {
                const scrollThreshold = window.innerHeight * 0.15;
                if (window.scrollY > scrollThreshold) {
                    navbar.classList.add('navbar-timbr');
                } else {
                    navbar.classList.remove('navbar-timbr')
                }
            });
        } else {
            console.error("Navbar element with id 'navbar-timbr' not found.");
        }
    }

    // Check if header content is loaded
    const headerPlaceholder = document.getElementById('nav-placeholder');
    if (headerPlaceholder) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    handleScroll();
                    observer.disconnect(); // Stop observing once the header is loaded
                }
            });
        });

        observer.observe(headerPlaceholder, { childList: true });
    } else {
        handleScroll(); // Fallback in case header-placeholder is not found
    }
});