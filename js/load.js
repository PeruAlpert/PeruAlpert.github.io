/**
 * Theme Toggle & Helper Logic
 * Peru Alpert - Portfolio Page Helpers
 */

function dayNightToggle() {
    const body = document.body;
    const isLight = body.classList.toggle('light-mode');
    const toggleIcon = document.getElementById('toggle-icon');
    
    if (isLight) {
        if (toggleIcon) toggleIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        if (toggleIcon) toggleIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    }
}

function checkDayNight() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const toggleIcon = document.getElementById('toggle-icon');
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (toggleIcon) toggleIcon.className = 'fas fa-sun';
    } else {
        body.classList.remove('light-mode');
        if (toggleIcon) toggleIcon.className = 'fas fa-moon';
    }
}

// Self-init on load
window.addEventListener('DOMContentLoaded', () => {
    checkDayNight();
    
    // Set dynamic current year in footer if exists
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
