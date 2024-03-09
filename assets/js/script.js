
// Nav scroll effect
function userScroll() {
    const navbar = document.querySelector('#navbar-timbr')
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            
            // navbar.classList.add('bg-dark')
            navbar.classList.add('navbar-timbr')
        } else {
            // navbar.classList.remove('bg-dark')
            navbar.classList.remove('navbar-timbr')
        }
    })
}
document.addEventListener('DOMContentLoaded', userScroll)

// Values scroll effect

function valuesScroll() {
    const timbr_value_ani_left = document.querySelector('#timbr-value-left');
    const timbr_value_ani_right = document.querySelector('#timbr-value-right');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 70) {
            timbr_value_ani_left.classList.add('timbr-value-ani-left')
            timbr_value_ani_right.classList.add('timbr-value-ani-right')
        } else {
            timbr_value_ani_left.classList.remove('timbr-value-ani-left')
            timbr_value_ani_right.classList.remove('timbr-value-ani-right')
        }
    })
}
document.addEventListener('DOMContentLoaded', valuesScroll)

// Form validation

// Form validation

const form = document.querySelector('.timbr-validation')

form.addEventListener('submit', (e) => {
    
    if(!form.checkValidity()){
        e.preventDefault();
    } else {
        alert('success');
    }
    form.classList.add('was-validated');
})

// Testimonials 
