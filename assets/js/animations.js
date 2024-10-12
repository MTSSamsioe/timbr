

// animation for values
function valuesScroll() {
    const timbr_value_left = document.querySelector('#timbr-value-left');
    const timbr_value_right = document.querySelector('#timbr-value-right');

    const observerOptions = {
        threshold: 1 // Trigger when 100% visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'timbr-value-left') {
                    entry.target.classList.add('timbr-value-ani-left');
                } else if (entry.target.id === 'timbr-value-right') {
                    entry.target.classList.add('timbr-value-ani-right');
                }
                observer.unobserve(entry.target); // Stop observing after the animation is triggered
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (timbr_value_left) {
        observer.observe(timbr_value_left);
    }

    if (timbr_value_right) {
        observer.observe(timbr_value_right);
    }
}

document.addEventListener('DOMContentLoaded', valuesScroll);


