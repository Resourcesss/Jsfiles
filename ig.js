window.addEventListener('load', function() {
    // Fade in the page content
    document.body.style.opacity = '1';
    
    // Fade out the logo
    const fadeImageContainer = document.getElementById('fadeImageContainer');
    fadeImageContainer.style.opacity = '1';
    fadeImageContainer.style.transition = 'opacity 3s';
    setTimeout(() => {
        fadeImageContainer.style.opacity = '0';
    }, 100);
});
