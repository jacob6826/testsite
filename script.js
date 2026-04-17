// Basic interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded");
    
    // Smooth scroll for anchor links (fallback for older browsers/Safari)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
