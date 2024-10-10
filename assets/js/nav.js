//Nav load
document.addEventListener("DOMContentLoaded", function() {
    fetch('includes/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
});