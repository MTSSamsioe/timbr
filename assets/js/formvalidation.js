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