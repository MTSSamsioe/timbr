


// Values scroll effect

// function valuesScroll() {
//     const timbr_value_ani_left = document.querySelector('#timbr-value-left');
//     const timbr_value_ani_right = document.querySelector('#timbr-value-right');
//     window.addEventListener('scroll', () => {
//         const scrollThreshold = window.innerHeight * 0.4;

//         if (window.scrollY > 500 ) {
           
//             timbr_value_ani_left.classList.add('timbr-value-ani-left')
//             timbr_value_ani_right.classList.add('timbr-value-ani-right')
//         } else {
           
//             timbr_value_ani_left.classList.remove('timbr-value-ani-left')
//             timbr_value_ani_right.classList.remove('timbr-value-ani-right')
//         }
//     })
// }
// document.addEventListener('DOMContentLoaded', valuesScroll)

// co pilot script
// Values scroll effect

function valuesScroll() {
    const timbr_value_left = document.querySelector('#timbr-value-left');
    const timbr_value_right = document.querySelector('#timbr-value-right');

    const observerOptions = {
        threshold: 1 // Trigger when 40% of the element is visible
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



// Om oss animation

/* function omOssScroll() {
    const timbr_omOss_ani_right = document.querySelector('#timbr-om-oss');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1500) {
            
            timbr_omOss_ani_right.classList.add('timbr-value-ani-left')
        } else {
            
            timbr_omOss_ani_right.classList.remove('timbr-value-ani-left')
        }
    })
}
document.addEventListener('DOMContentLoaded', omOssScroll) */


// Form validation

// Form validation

const form = document.querySelector('.timbr-validation')

form.addEventListener('submit', (e) => {
    
    if(!form.checkValidity()){
        e.preventDefault();
    } else {
        console.log('Meddelande skickat')
        //alert('success');
        // testing
        const nextUrl = form.querySelector('input[name="_next"]').value;
        window.location.href = nextUrl;
    }
    form.classList.add('was-validated');
})

// Testimonials 
